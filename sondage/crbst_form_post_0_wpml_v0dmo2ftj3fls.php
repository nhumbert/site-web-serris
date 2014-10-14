<?php
include('cariboost_private/connexion.inc.php');
function setError($str) 
{
$HTTP_SESSION_VARS['error_message']=strip_tags($str);
$_SESSION['error_message']=strip_tags($str);
}
function getError()
{
$k='error_message';
if (isset($HTTP_SESSION_VARS)&&array_key_exists($k,$HTTP_SESSION_VARS)) 
return $HTTP_SESSION_VARS[$k];
if (isset($_SESSION)&&array_key_exists($k,$_SESSION))
return $_SESSION[$k];
return '';
}
function postParameter($k)
{
$val='';
if (isset($HTTP_POST_VARS)&&array_key_exists($k,$HTTP_POST_VARS)) $val= $HTTP_POST_VARS[$k];
if (isset($_POST)&&array_key_exists($k,$_POST)) $val= $_POST[$k];
return $val;
}
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
$error_message = '';
switch ($errno) 
{
case E_STRICT:break;
case E_USER_WARNING:
 break;
default:
  $error_message .= '['.$errno.']'.$errstr;
 break;
}
 setError($error_message);
}
setError('');
set_error_handler('myErrorHandler');
echo "BEGIN_IS_PHP="."1"."\n";
$text="";
$wa_form0= postParameter('field0');
$text.= "Nom\n".postParameter('field0')."\n\n";
$wa_form1= postParameter('field1');
$text.= "Prénom\n".postParameter('field1')."\n\n";
$wa_form2= postParameter('field2');
$text.= "Je suis pour une commune nouvelle\n".postParameter('field2')."\n\n";
$wa_form3= postParameter('field3');
$text.= "Je suis pour une intercommunalité\n".postParameter('field3')."\n\n";
$wa_form4= postParameter('field4');
$text.= "Commentaires\n\n";
$wa_form5= postParameter('field5');
$text.= postParameter('field5')."\n\n";
$sender="n.humbert@mairie-serris.net";
$destinataire="n.humbert@mairie-serris.net";
$title="Envoyer le formulaire";
if (is_wa_mail($sender, $destinataire, $title,$text))
{
echo "mail_sended=1\n";
}
else
{
echo "error_string=".getError()."\n";
}
echo "END_IS_PHP";
?>
