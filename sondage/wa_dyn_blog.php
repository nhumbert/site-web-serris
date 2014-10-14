<?php header('Content-Type: text/xml;charset=utf-8');
echo "<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>\n";	



 $HTTP_SESSION_VARS["error_message"]="";
 $_SESSION["error_message"]="";
 
$info_error="";
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
	$error_message="";
  switch ($errno) 
  {
	case E_STRICT:break;
	case E_USER_WARNING:break;
  default:
    $error_message = "[$errno] $errstr";
   break;
  }
  setError($error_message);
}


function getParameter($k)
{
	
	if (isset($_GET)&&array_key_exists($k,$_GET)) 
	{
		return $_GET[$k];
	}	
	if (isset($HTTP_GET_VARS)&&array_key_exists($k,$HTTP_GET_VARS)) 
	{
		return $HTTP_GET_VARS[$k];
	}
	return "";
	
	//return ((isset($HTTP_GET_VARS[$k]))?$HTTP_GET_VARS[$k]:$_GET[$k]);
}

function postParameter($k)
{
	
	if (isset($HTTP_POST_VARS)&&array_key_exists($k,$HTTP_POST_VARS)) 
	{
		return $HTTP_POST_VARS[$k];
	}
	if (isset($_POST)&&array_key_exists($k,$_POST)) 
	{
		return $_POST[$k];
	}	
	return "";
	
	//return ((isset($HTTP_POST_VARS[$k]))?$HTTP_POST_VARS[$k]:$_POST[$k]);
}

function postParameter_escaped($k)
{
	$val=postParameter($k);
	$val=str_replace("%20"," ",$val);
	//$val=urldecode($val);
	return $val;
}


function getSessionVar($k)
{
	
	if (isset($HTTP_SESSION_VARS)&&array_key_exists($k,$HTTP_SESSION_VARS)) 
	{
		return $HTTP_SESSION_VARS[$k];
	}
	if (isset($_SESSION)&&array_key_exists($k,$_SESSION)) 
	{
		return $_SESSION[$k];
	}	
	return "";
	
	//return ((isset($HTTP_SESSION_VARS[$k]))?$HTTP_SESSION_VARS[$k]:$_SESSION[$k]);
}

set_error_handler("myErrorHandler");
///////////////////////////////////////////////////////////////////////////////////////////////
// $server_name = $HTTP_SERVER_VARS['SERVER_NAME'];

 $tbl_comment_name="cariboost_tbl_blog_comment";

{
	$predefined_message_error_connect="can't connect to sql database";
	$predefined_message_error_create_db="can't create sql database";
	
	$reserved_sql_host="@not_set";
	@include("./cariboost_private/connexion.inc.php");
	if ($reserved_sql_host=="@not_set")
	{
		setError("@you have to configure SQL settings");
	}
	else
   	if (mysql_connect($reserved_sql_host,$reserved_sql_login,$reserved_sql_password)==false)
   	{
	/*
		if ($reserved_sql_host=="localhost")
		{
			$info_error = "Can't connect to SQL Database host '".$reserved_sql_host."' , Check your SQL settings";
		}
		else
		{
			$info_error = "Can't connect to SQL Database host '".$reserved_sql_host."' , try 'localhost' and check your SQL settings";
		}*/
   	}
   	else
   	{
       if (mysql_select_db($reserved_sql_database)==false)
       {
       		if ($reserved_sql_can_create_database==1)
			{
	       		if (createDatabase($reserved_sql_database))
	       		{
	       			if (mysql_select_db($reserved_sql_database)==false)
	       			{
	       				$info_error = "Can't select database '".$reserved_sql_database."'";
	       			}
	       		}
	       		else
	       		{
	       			$info_error = "Error creating SQL database '".$reserved_sql_database."'";
	       		}				
			}
			else
			{
				setError("Can't create database ".$reserved_sql_database);
			}				
       } 
	}
}




function setError($str) 
{
	$HTTP_SESSION_VARS["error_message"]=strip_tags(convertStringToAscii($str));
	$_SESSION["error_message"]=strip_tags(convertStringToAscii($str));
}

function convertStringToAscii($str) 
{
	$encode="";
	for ($i=0;$i<strlen($str);$i++) 
	{
		$car = ord($str[$i]);
		$car2=chr($car);
		if (  ($car==ord('ê')) ||($car==ord('é')) || ($car==ord('è')) || ($car==ord('ë'))   ) //e
		{
			$car2="e";
		}
		else
		if ($car==ord('ô')) //c
		{
			$car2="o";
		}		
		else
		if ($car==ord('ç')) //c
		{
			$car2="c";
		}
		else
		if ($car==ord('ï')) //c
		{
			$car2="i";
		}		
		else
		if (  (($car>=192) && ($car<=198)) ||  (($car>=224) && ($car<=230))   ) //a
		{
			$car2="a";
		}
		else
		if (  (($car>=192) && ($car<=198)) ||  (($car>=224) && ($car<=230))   )
		{
			$car2="a";
		}						
		$encode=$encode . $car2;
	
	}
  	 return $encode;

}

function filterMessageValues($val)
{
	//&amp;   &
	//&quot;  "
	//&lt;   <
	$val = str_replace("<","&amp;lt;",$val);
	$val = str_replace("\"","&amp;quot;",$val);
	return $val;
}

function doRequestRetrieveComments($tbl_comment_name,$id_article)
{
	$sql_where ="";
	if ($id_article!="")
	{
		$sql_where =" where id_article = '".$id_article."' ";
	}
	
	$sql="SELECT id_comment,key_site,id_article,name,comment,author,email,created FROM ".$tbl_comment_name." ".$sql_where." order by created DESC";
	$req = mysql_query($sql);
	if ($req)
	{
		while($data = mysql_fetch_assoc($req)) 
		{
			$author = filterMessageValues($data['author']);
			$comment = filterMessageValues($data['comment']);
			$email = filterMessageValues($data['email']);
			if ($email=="undefined")
			{
				$email = "";
			}
			

			$comment = str_replace("/br/","\n",$comment);
			$comment = str_replace("\n\r","\n",$comment);
			$comment = str_replace("\r","\n",$comment);
			$comment = str_replace("\n","&lt;br&gt;",$comment);


			echo "<OBJECT>\n";

			echo "<id_article val=\"".$data['id_article']."\"/>";
			echo "<key_site val=\"".$data['key_site']."\"/>";
			echo "<id_comment val=\"".$data['id_comment']."\"/>";
			echo "<email val=\"".$email."\"/>";
			echo "<author val=\"".$author."\"/>";
			echo "<created val=\"".$data['created']."\"/>";
			echo "<comment val=\"".$comment."\"/>";

			echo "</OBJECT>\n";				
	

		}
		return true;
	}	
	createTable($tbl_comment_name);
	//setError(mysql_error());
	return false;
}

function doRequestCountComments($tbl_comment_name,$id_article)
{
	$sql="SELECT count(id_article) FROM ".$tbl_comment_name." where id_article = '".$id_article."'";
	$req = mysql_query($sql);
	if ($req)
	{		
		$count = mysql_result($req,0,0); 
		echo "<counter_".$id_article.">".$count."</counter_".$id_article.">";
		return true;
	}	
	return false;
}

function createDatabase($reserved_sql_database)
{
		$sql_create_database = "CREATE DATABASE `".$reserved_sql_database."`;";
		$req = mysql_query($sql_create_database);
		if ($req)
		{
			return true;
		}
	return false;
}
	
function createTable($tbl_comment_name)
{
	if( !mysql_num_rows( mysql_query("SHOW TABLES LIKE '".$tbl_comment_name."'")))
	{
		$sql_create_tbl_comment = "CREATE TABLE `".$tbl_comment_name."` (`ID_ARTICLE` varchar(20) NOT NULL default '0',`ID_COMMENT` bigint(20) NOT NULL auto_increment,`NAME` text NOT NULL default '',`AUTHOR` text NOT NULL default '',`COMMENT` text NOT NULL,`EMAIL` text NOT NULL default '',`CREATED` datetime NOT NULL, `KEY_SITE` varchar(10) NOT NULL,PRIMARY KEY  (`ID_COMMENT`),KEY `ID_ARTICLE` (`ID_ARTICLE`));";
		$req = mysql_query($sql_create_tbl_comment);
		if ($req)
		{
			return true;
		}
	}
	return false;
}
function addComment($tbl_comment_name,$id_article,$comments,$author,$key_site,$email)
{
	$today = getdate();
	$s_date = date("Y-m-d H:i:s",mktime($today['hours'], $today['minutes'], $today['seconds'], $today['mon'], $today['mday'], $today['year']));

	
	$sql_add_comment = "INSERT INTO ".$tbl_comment_name." ( `ID_ARTICLE` , `NAME` , `COMMENT` , `EMAIL` , `CREATED` , `AUTHOR` ,`KEY_SITE`) VALUES (\"".$id_article."\", '', \"".$comments."\", \"".$email."\", \"".$s_date."\",\"".$author."\",\"".$key_site."\")";
	$req = mysql_query($sql_add_comment);
	if ($req)
	{
		return true;
	}
	return false;	
}

function lastIndexOf($text,$search)
{
	$first_pos = -1;
	for ($i=0; $i<count($search); $i++) 
	{
		$pos = strrpos($text,$search[$i]);
		if (($pos>0)&&($pos>$first_pos))
		{
			$first_pos = $pos;
		}
	}
}
function filterText($text)
{
	$text = htmlspecialchars($text);
	return $text;
}

///////////////////////////////////


echo "<is_blogslike>";



$result="false";

$action = getParameter('action');
$error_message=getSessionVar('error_message');

if ($error_message!="")
{	
	
}
else
if ($action=="post_comment")
{
	$id_article= postParameter_escaped('id_article');
	$comments= postParameter_escaped('comments');
	$author= postParameter_escaped('author');
	$key_site= postParameter_escaped('key_site');
	$email= postParameter_escaped('email');
	
	
	$key_site= "";
	if ($email=="undefined")
	{
		$email = "";
	}
	echo "post_comment ".$id_article;
	if (addComment($tbl_comment_name,$id_article,$comments,$author,$key_site,$email)==true)
	{
		$result="true";
		
		
	}
}
else
if ($action=="delete_comment")
{
	$list_id= getParameter('id_comment');
	$spec_id= getParameter('id');
	
	if ($spec_id==$reserved_sql_special_identifier)
	{
		$words = explode(",", $list_id.",");
		foreach ($words as $val)
		{
			if (strlen($val)>0)
			{
				$sql="DELETE FROM ".$tbl_comment_name." where id_comment=".$val;
				$req = mysql_query($sql);
				if ($req)
				{		
				$result="true";
				}
			}
		}
	}	
}
else
if ($action=="move_comment")
{
	$list_id= getParameter('id_comment');
	$spec_id= getParameter('id');
	$article_id= getParameter('id_article');
	$site_id= getParameter('id_site');

	if ($spec_id==$reserved_sql_special_identifier)
	{
		$words = explode(",", $list_id.",");
		foreach ($words as $val)
		{
			
			if (strlen($val)>0)
			{
				$sql="UPDATE `".$tbl_comment_name."` SET `ID_ARTICLE` = '".$article_id."', `KEY_SITE` = '".$site_id."' WHERE `ID_COMMENT` = ".$val." LIMIT 1;";
				$req = mysql_query($sql);
				if ($req)
				{		
					$result="true";
				}
			}
		}
	}	
}
else
if ($action=="delete_all_comments")
{
	$id_article= postParameter('id_article');
}
else
if ($action=="refresh_counter_comments")
{
	$list_id=getParameter('list_id');
	if ($list_id=="")$list_id=postParameter('list_id');

	echo "<counter_comments>";
	$words = explode(",", $list_id.",");
	foreach ($words as $val)
	{
		if (strlen($val)>0)
		{
			if (doRequestCountComments($tbl_comment_name,$val)==true)
			{
				$result="true";
			}
		
			else
			{
				if (createTable($tbl_comment_name))
				{
					if (doRequestCountComments($tbl_comment_name,$val)==true)
					{
						$result="true";
					}
				}			
			}
		
		}
		
	}
	echo "</counter_comments>";	
}
else
if ($action=="get_comments")
{
	$list_id=getParameter('list_id');
	if ($list_id=="")$list_id=postParameter('list_id');

	echo "<comments>\n";
	
	
	if ($list_id=="")
	{
		if (doRequestRetrieveComments($tbl_comment_name,"")==true)
		{
			$result="true";
		}		
	}
	else
	{
		$list_id =  $list_id.",";
		$words = explode(",", $list_id.",");
		foreach ($words as $val)
		{
			if (strlen($val)>0)
			{
				if (doRequestRetrieveComments($tbl_comment_name,$val)==true)
				{
					$result="true";
				}
			}
		}		
	}

	echo "</comments>\n";	
	
}

$s_error_message=getSessionVar('error_message');


if ($s_error_message!="")
{	
	$result="false";
}

if ($result=="false")
{	
	if ($s_error_message=="")
	{
		setError(mysql_error());
	}
	

		echo "<error val=\"".$info_error." ".$s_error_message."\">";	
		echo $info_error." ".$s_error_message;	
		echo "</error>";
	
}



	echo "<result>\n";
	echo $result."\n";
	echo "</result>\n";
	
	echo "<result_operation val='".$result."'/>\n";
	echo "</is_blogslike>";

?>

