<?php
$reserved_sql_login="";
$reserved_sql_host="@not_set";
$reserved_sql_database="";
$reserved_sql_password="";
$reserved_sql_can_create_database=0;
$reserved_sql_special_identifier="r58dc2ftj1e26t";

function is_wa_mail($sender, $to, $title, $content)
{
$headers='';
$headers.='From:'.$sender.'
';
$headers.='Return-Path:'.$sender.'
';
$headers.='Content-Type: text/plain;charset=UTF-8
';
$supplementaire='-f'.$sender;
if (@mail($to,$title,$content,$headers,$supplementaire)) return true;
if (@mail($to,$title,$content,$headers)) return true;
$headers='';
$headers.='Content-Type: text/plain;charset=UTF-8
';
if (@mail($to,$title,$content,$headers)) return true;
return false;
}


//il faut laisser au moins 2 caractÃ©re en fin de fichier
?>