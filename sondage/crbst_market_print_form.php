<?php header('Content-Type: text/html;charset=utf-8');

include('cariboost_private/connexion.inc.php');

function varPost($key)
{
	return ((isset($HTTP_POST_VARS[$key]))?$HTTP_POST_VARS[$key]:((isset($_POST[$key]))?$_POST[$key]:""));
	//return ((isset($HTTP_POST_VARS[$key]))?$HTTP_POST_VARS[$key]:$_POST[$key]);
}

function varGet($key)
{
	return ((isset($HTTP_GET_VARS[$key]))?$HTTP_GET_VARS[$key]:((isset($_GET[$key]))?$_GET[$key]:""));
	//return ((isset($HTTP_GET_VARS[$key]))?$HTTP_GET_VARS[$key]:$_GET[$key]);
}

function varServer($key)
{
	return ((isset($HTTP_SERVER[$key]))?$HTTP_SERVER[$key]:((isset($_SERVER[$key]))?$_SERVER[$key]:""));
	//return ((isset($HTTP_SERVER[$key]))?$HTTP_SERVER[$key]:$_SERVER[$key]);
}

function varPostUtf8($key)
{
	$val=varPost($key);
	$val = str_replace("\\\"","\"",$val);
	return $val;
}

$crbst_action=varPost('crbst_action');

if ($crbst_action == "check_php")
{
?>check_php=<?php echo('true');?>&<?php
}
else
{
	$array_info_url = parse_url(varServer("HTTP_REFERER"));
	$SITE_REFERER = $array_info_url['host'];
	
	$send_copy_email_to_buyer=varPost('send_copy_email_to_buyer');
	
	$MAIL_TITLE_PREFIXE = varPostUtf8('MAIL_TITLE_PREFIXE');

	/*
	$MAIN_TITLE = varPostUtf8('MAIN_TITLE');
	
	$PREFIXE_ORDER = varPostUtf8('PREFIXE_ORDER');
	$ID_ORDER = varPostUtf8('ID_ORDER');
	$CARD_TITLE = varPostUtf8('CARD_TITLE');
	$LABEL_TYPE_PAYMENT = varPostUtf8('LABEL_TYPE_PAYMENT');
	$TYPE_PAYMENT = varPostUtf8('TYPE_PAYMENT');
	$MESSAGE_CHECK = varPostUtf8('MESSAGE_CHECK');
	$MESSAGE_WIRE = varPostUtf8('MESSAGE_WIRE');
	*/
	$WA_LABEL_PRINT = varPostUtf8('LABEL_PRINT');
	
	////
	$WA_MAIN_TITLE = varPostUtf8('MAIN_TITLE');
	$WA_PREFIXE_ORDER = varPostUtf8('PREFIXE_ORDER');
//	$WA_ID_ORDER = varPostUtf8('ID_ORDER');
	$WA_CART_TITLE = varPostUtf8('CARD_TITLE');
	$wa_html_cart= varPostUtf8('card_html');
	$wa_market_promo_code=varPostUtf8('wa_promo_code');	
	$wa_has_market_promo_code = (strlen($wa_market_promo_code)>0);
	
	$wa_infos_shipping=varPostUtf8('buyer_info_shipping');
	$wa_infos_billing=varPostUtf8('buyer_info_billing');	
	
	$WA_LABEL_TYPE_PAYMENT = varPostUtf8('LABEL_TYPE_PAYMENT');
	$WA_TYPE_PAYMENT = varPostUtf8('TYPE_PAYMENT');
	
	$WA_MESSAGE_CHECK = varPostUtf8('MESSAGE_CHECK');
	$WA_MESSAGE_WIRE = varPostUtf8('MESSAGE_WIRE');
	////
	
	$PAYPAL_EMAIL="";
	/*
	$CARD_TOTAL_PRICE = varPostUtf8('CARD_TOTAL_PRICE');
	$CARD_CURRENCY = varPostUtf8('CARD_CURRENCY');
	$CARD_LANG = varPostUtf8('CARD_LANG');	
	*/
	$WA_LABEL_PAYPAL_CART_TITLE = varPostUtf8('LABEL_PAYPAL_CART_TITLE');
	$WA_LABEL_PROCESS_ORDER = varPostUtf8('LABEL_PROCESS_ORDER');
	$WA_LABEL_CHECKOUT_WARNING = varPostUtf8('LABEL_CHECKOUT_WARNING');
	
//	$card_html = varPostUtf8('card_html');
	$card_plain_text = varPostUtf8('card_plain_text');
	$type_payment=varPost('type_payment');
	$email_buyer=varPost('email_buyer');
	$email='';
	$WA_LABEL_SELLER_INFORMATION=varPostUtf8('LABEL_SELLER_INFORMATION');
	$wa_check_information=varPostUtf8('seller_address');
	$wa_wire_information=varPostUtf8('bank_account_informations');

	$wa_market_first_name=varPostUtf8('form_first_name');
	$wa_market_last_name=varPostUtf8('form_last_name');
	$wa_market_address1=varPostUtf8('form_address1');
	$wa_market_address2=varPostUtf8('form_address2');
	$wa_market_city=varPostUtf8('form_city');
	$wa_market_zip=varPostUtf8('form_zip');
	$wa_market_state=varPostUtf8('form_state');	
	$wa_market_country=varPostUtf8('form_country');
	
	$wa_market_company=varPostUtf8('form_company');
	$wa_market_fiscal_code=varPostUtf8('form_fiscal_code');
	$wa_market_tva=varPostUtf8('form_tva');
	$wa_market_phone=varPostUtf8('form_phone');
	$wa_market_fax=varPostUtf8('form_fax');
	
	$wa_market_lang=varPostUtf8('CARD_LANG');	
	$wa_market_id_order=varPostUtf8('ID_ORDER');
	$wa_market_total_price=varPostUtf8('CARD_TOTAL_PRICE');
	$wa_market_currency=varPostUtf8('CARD_CURRENCY');
	$wa_market_email_notification=$email;
	$wa_market_email_buyer=$email_buyer;	

	$wa_check_information_plaintext = $wa_check_information;
	$wa_wire_information_plaintext  = $wa_wire_information;
	$wa_infos_shipping_plaintext  = $wa_infos_shipping;
	$wa_infos_billing_plaintext  = $wa_infos_billing;
	
	$wa_check_information = str_replace("\n","<br>",$wa_check_information);
	$wa_wire_information = str_replace("\n","<br>",$wa_wire_information);
	$wa_infos_shipping = str_replace("\n","<br>",$wa_infos_shipping);
	$wa_infos_billing = str_replace("\n","<br>",$wa_infos_billing);
	
	
	//////
	//send email!

	$email_title = $MAIL_TITLE_PREFIXE." (".$SITE_REFERER.") ".$wa_market_id_order." *".$WA_TYPE_PAYMENT."*";
	
	$txt_mail="";
	$txt_mail.= $WA_PREFIXE_ORDER." ".$wa_market_id_order." (".$WA_TYPE_PAYMENT.")\n";
	$txt_mail.= "From:\n";
	$txt_mail.= $SITE_REFERER;
	$txt_mail.= "\n";
	$txt_mail.= $WA_CART_TITLE;
	$txt_mail.= "\n";
	$txt_mail.= $card_plain_text;
	
	if (strlen($wa_market_promo_code)>0)
	{
		$txt_mail.= "PROMO CODE: ";
		$txt_mail.= $wa_market_promo_code."\n";
	}
	
	if (($type_payment=='wire')||($type_payment=='check'))
	{
		$txt_mail.= "\n";
		$txt_mail.= "------------------------\n";
		$txt_mail.= $WA_LABEL_SELLER_INFORMATION."\n";

		if ($type_payment=='wire')
		{
			$txt_mail.= "\n";
			$txt_mail.= $wa_wire_information_plaintext;
			$txt_mail.= "\n";
		}
		if ($type_payment=='check')
		{
			$txt_mail.= "\n";
			$txt_mail.= $wa_check_information_plaintext;
			$txt_mail.= "\n";
		}		
	}
	
	$txt_mail.= "------------------------\n";
	$txt_mail.= $wa_infos_shipping_plaintext;
	$txt_mail.= "\n";
	$txt_mail.= $wa_infos_billing_plaintext;
	$txt_mail.= "\n";
	
	$sender = $email;
/*
	$result_email = is_wa_mail($sender, $email, $email_title, $txt_mail);

	if ($send_copy_email_to_buyer=="1")
	{
		is_wa_mail($sender, $email_buyer, $email_title, $txt_mail);
	}	
*/
	/////

	/////
	?>
	<html>
<head>
<meta content="text/html; charset=UTF-8" http-equiv="content-type">
<title><?php echo($WA_CART_TITLE);?></title>

<style>
.wa-cart-global-table{border:1px solid #cccccc;width:600px;}
.wa-cart-global-table td{border:1px solid #999999;}
.wa-cart-title td{border:0px solid black; background-color:#BBBBBB;;}

.wa-cart-option{font-size:11px;}

.wa-cart-table-total{border-collapse:collapse;border:0px solid black;width:100%;}
.wa-cart-table-total td{border-collapse:collapse;border:0px solid black;}
.wa-cart-promo{}
.wa-cart-total{font-weight: bold;font-size:15pt;}

.wa-shipping-info{border:1px solid #cccccc;font-weight: normal;font-size:11pt;vertical-align: top;width:200px;;}

.wa-title{font-family:Arial;font-size:13pt;border:1px solid #cccccc;width:300px;}
.wa-title td{border:0px solid black; background-color:#BBBBBB;text-align:center;;}

input.checkout {background-color: #cccccc; font-weight: bold; font-size: 15px; }

</style>

</head>
<body>
<div style="text-align: center;">
<span style="font-size:16pt;font-family:Arial;font-weight: bold;"><?php echo($WA_CART_TITLE);?></span>

<br>
<br>
<table style="width:100%;">
	<tr>
		<td align=center>
<table class=wa-title>
	<tr>
		<td>
			<span><?php echo($WA_PREFIXE_ORDER);?></span>
			<span style="font-weight: bold;"><?php echo($wa_market_id_order);?></span>
		</td>
	</tr>
</table>
</td>
</tr>
</table>

<br>
<!--
<br>
<span style="font-family: Arial;"><?php echo($WA_CART_TITLE);?> :</span>
<br>
-->
<br>

<!--begin card-->
<table style="width:100%;text-align: left; margin-left: auto; margin-right: auto;">
	<tr>
		<td align=center>
<!-- begin tag-->
<?php echo($wa_html_cart);?>		
<!--end card-->
<?php
if ($wa_has_market_promo_code==true)
{
	echo("<br>");
	echo ("promo code: ".$wa_market_promo_code."<br>");
}
?>
<?php
if ($type_payment=="paypal")
{
	?>
	
		<form target="_blank" action="https://www.paypal.com/fr/cgi-bin/webscr" method="post">
		<input type="hidden" name="cmd" value="_xclick">
		<input type="hidden" name="business" value="<?php echo($PAYPAL_EMAIL);?>">

		<input type="hidden" name="item_name" value="<?php echo($WA_LABEL_PAYPAL_CART_TITLE);?>">
		<input type="hidden" name="item_number" value="<?php echo($wa_market_id_order);?>">
		<input type="hidden" name="amount" value="<?php echo($wa_market_total_price);?>">
		<input type="hidden" name="currency_code" value="<?php echo($wa_market_currency);?>">
		
		<input type="hidden" name="email" value="<?php echo($wa_market_email_buyer);?>"> 
		<input type="hidden"name="night_phone_b"value="<?php echo($wa_market_phone);?>">
		
		<input type="hidden" name="first_name" value="<?php echo($wa_market_first_name);?>">
		<input type="hidden" name="last_name" value="<?php echo($wa_market_last_name);?>">
		<input type="hidden" name="address1" value="<?php echo($wa_market_address1);?>">
		<input type="hidden" name="address2" value="<?php echo($wa_market_address2);?>">
		<input type="hidden" name="city" value="<?php echo($wa_market_city);?>">
		<input type="hidden" name="country" value="<?php echo($wa_market_country);?>">
		<input type="hidden" name="zip" value="<?php echo($wa_market_zip);?>">
		<input type="hidden" name="state" value="<?php echo($wa_market_state);?>">

		<input type="hidden" name="invoice" value="<?php echo($wa_market_id_order);?>">
		<input type="hidden" name="charset" value="utf-8">
		<input type="hidden" name="no_shipping" value="2">
		<input type="hidden" name="address_override" value="1">
		<input type="hidden" name="lc" value="<?php echo($wa_market_lang);?>">

		<input type="hidden" name="no_note" value="1">
		
		<span style="font-family: Arial;font-size:13pt;font-weight:bold;">
			<br>
			<?php 
			echo($WA_LABEL_CHECKOUT_WARNING);
			?>
			<br>
			<br>
		</span>						
		
		<input type="submit" class="checkout" value="<?php echo($WA_LABEL_PROCESS_ORDER);?>" name="submit">
		</form>
	<?php
}
?>

<br>
<table style="width:100%;text-align: left; margin-left: auto; margin-right: auto;;">
	<tr>
		<td align=center>
			<table class="wa-shipping-info">
				<tr>
					<td>
						<?php echo($wa_infos_shipping);?>			
					</td>
					
					<?php
					if (strlen($wa_infos_billing)>0)
					{
						?>
						<td>
							<?php echo($wa_infos_billing);?>		
						</td>
						<?php	
					}
					?>
				</tr>
			</table>		
		</td>
	</tr>
</table>



<br>
<table style="width:607px;text-align: center; margin-left: auto; margin-right: auto;font-family:Arial;;">
	<tr>
		<td>
<span><?php echo($WA_LABEL_TYPE_PAYMENT);?> : </span><span style="color:#000000;"><b><?php echo($WA_TYPE_PAYMENT);?> </b></span>
		</td>
	</tr>

	
	
	<?php
	if ($type_payment=="wire")
	{
		?>
		<tr>
			<td >
					<br>
					<span style="font-family:Arial;font-weight:normal;"><?php echo($WA_MESSAGE_WIRE);?></span>
			</td>
		</tr>
		<tr>
			<td >
				<br>
				<span style="font-family: Arial;font-size:13pt;font-weight:bold;">
					<?php echo($wa_wire_information);?>
				</span>
			</td>
		</tr>
		<?php
	}
	?>	

	
	
	<?php
	if ($type_payment=="check")
	{
		?>
		<tr>
			<td >
					<br>
					<span style="font-family:Arial;font-weight:normal;"><?php echo($WA_MESSAGE_CHECK);?></span>
			</td>
		</tr>
		<tr>
			<td >
				<br>
				<span style="font-family: Arial;font-size:13pt;font-weight:bold;">
					<?php echo($wa_check_information);?>
				</span>
			</td>
		</tr>
		<?php
	}
	?>
	
	
	<tr>
		<td >
				<br>
				<?php
				if (($type_payment=="check")||($type_payment=="wire"))
				{
					?>
					<input type="button" style="font-size:13pt;" value="   <?php echo($WA_LABEL_PRINT);?>  " onclick="javascript:window.print()">
					<?php
				}


				if ($type_payment=="custom_script_0")
				{
					?>
					
					<?php
				}
				
				if ($type_payment=="custom_script_1")
				{
					?>
					
					<?php
				}
				
				if ($type_payment=="custom_script_2")
				{
					?>
					
					<?php
				}
												
				?>

		</td>
	</tr>
</table>

</div>
</body>
</html>

	<?php
	
	function setError($mess) {};
	$result_email = is_wa_mail($sender, $email, $email_title, $txt_mail);

	if ($send_copy_email_to_buyer=="1")
	{
		is_wa_mail($sender, $email_buyer, $email_title, $txt_mail);
	}	
}
?>