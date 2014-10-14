<!--
 

var CONST_URL_WA_BLOG="wa_dyn_blog.php"
function tIhJJ(WtCoi)
{
var fHGOB;
if((WtCoi.responseXML!=null)&&(WtCoi.responseXML.documentElement!=null))
{
fHGOB=WtCoi.responseXML.documentElement
}
else
{
var s=WtCoi.responseText;
var delimiter1="<?xml";
var delimiter2="</is_blogslike>";
var n1=s.indexOf(delimiter1);
if(n1>=0)
{
s=s.substring(n1);
var n2=s.lastIndexOf(delimiter2);
if(n2>0)
{
s=s.substring(0,n2+delimiter2.length);
if(typeof DOMParser!='undefined')
{
var parser=new DOMParser();
fHGOB=parser.parseFromString(s,"text/xml");
}
else
{
var inYKJ=new ActiveXObject("Microsoft.XMLDOM");
inYKJ.async=false;
if(inYKJ.loadXML(s))
{
fHGOB=inYKJ;
}
}
}
}
}
return fHGOB
}
function dUDBV(pPJGX)
{
var FewSt=pPJGX.getElementsByTagName("result");
if(FewSt&&(FewSt.length>0))
{
var qmSQF=FewSt[0].firstChild.nodeValue
return wa_evaluate(qmSQF);
}
return false;
}
function Zlbif(pPJGX)
{
var FewSt=pPJGX.getElementsByTagName("error");
if(FewSt&&(FewSt.length>0))
{
var qmSQF=""+trimString(FewSt[0].firstChild.nodeValue)
if(qmSQF.substr(0,1)=="@")
{
qmSQF=Translator.tr(qmSQF.substr(1));
}
return qmSQF;
}
var sXSTo=dUDBV(pPJGX)
if(sXSTo==false)
{
return Translator.tr("Error:Server connexion");
}
return"";
}
cTInh=function(hnJZX,DLCaW,FIglg)
{
var hXGIb=FIglg[0]
var pPJGX=tIhJJ(DLCaW)
var avErE=dUDBV(pPJGX) 
if(avErE)
WA_Dialog.alert(Translator.tr("Post message successfully"))
else
{
WA_Dialog.alert(Zlbif(pPJGX))
}
WA_refreshBlogs() 
}
FBQOl=function(hXGIb,YLEpS)
{
if(document.webaca_is_preview)
{
WA_Dialog.alert(Translator.tr("Operation not allowed in preview mode"));return;
}
var w=new WA_Dialog();
w.progress()
makePOSTRequest(CONST_URL_WA_BLOG+"?action=post_comment",YLEpS,cTInh,[hXGIb]);
}
sqHZc=function(hnJZX,DLCaW,FIglg)
{
var pbHNL=FIglg[0]
var hXGIb_button=FIglg[1]
var pPJGX=tIhJJ(DLCaW)
var avErE=dUDBV(pPJGX)
var Ljcob_ids=pbHNL.split(',');
for(var kkSBo=0;kkSBo<Ljcob_ids.length;kkSBo++)
{
var hXGIb_counter=Ljcob_ids[kkSBo]
var FewSt=pPJGX.getElementsByTagName("counter_"+hXGIb_counter);
if(FewSt.length>0)
{
var qmSQF=FewSt[0].firstChild.nodeValue;
var bTIZN=document.getElementById(hXGIb_button)
if(bTIZN)
{
bTIZN.innerHTML=qmSQF+" "+Translator.tr("label_message(s)")
}
}
}
}
WA_refreshBlogs=function()
{
for(var kUkNK in document.wa_global_blogs_elements)
{
WA_blog_refresh(kUkNK)
}
}
WA_blog_refresh=function(hXGIb_button)
{
var hXGIb_blog=CcGoK(hXGIb_button)
var YLEpS=""
YLEpS+="list_id="+hXGIb_blog+"&"
makePOSTRequest(CONST_URL_WA_BLOG+"?action=refresh_counter_comments",YLEpS,sqHZc,[hXGIb_blog,hXGIb_button]);
}
function LjakF(FIglg)
{
var hXGIb=FIglg[0]
var w=new WA_Dialog();
w.PlIxS=function(qmSQF)
{
return qmSQF;
}
w.XQvSK=function(hXGIb)
{
var ffPxv=document.getElementById(hXGIb+"-blog-form")
var ruLKZ=[ffPxv.author,ffPxv.comment]
for(var i=0;i<ruLKZ.length;i++)
{
var uGsij=ruLKZ[i];
uGsij.style.backgroundColor="#ffffff"
if(uGsij.value.length==0)
{
uGsij.style.backgroundColor="#ff0000";uGsij.focus();return;
}
}
var YLEpS=""
YLEpS+="id_article="+CcGoK(hXGIb)+"&"
YLEpS+="author="+this.PlIxS(ffPxv.author.value)+"&"
if(ffPxv.email)
{
YLEpS+="email="+this.PlIxS(ffPxv.email.value)+"&"
}
YLEpS+="comments="+this.PlIxS(ffPxv.comment.value)+"&"
FBQOl(hXGIb,YLEpS)
}
w.rVAns=function(hXGIb)
{
var WtCoi=document.wa_global_blogs_elements[hXGIb]
var Bbojj=WtCoi.has_email
this.addButton(Translator.tr("Submit message"),this.XQvSK,hXGIb,this) 
var css_common="font-family:Arial;"
var s_col_text=this.getColorTheme(3)
var css_label=css_common+"color:"+s_col_text+";text-decoration:none;font-weight:bold;font-size:12px;"
this.initializeWindow(500,500)
var s=""
s+="<form id='"+hXGIb+"-blog-form'>"
s+="<table border=0 cellpadding=0 cellspacing=0  style='width:90%;'>";
s+="<tr><td align=left style='"+css_label+"'>"
s+=Translator.tr("Blog author")+"<br>"
s+="<input name='author' type=text>"
s+="<br>"
s+="<br>"
s+="</td></tr>";
if(Bbojj)
{
s+="<tr><td align=left style='"+css_label+"'>"
s+=Translator.tr("Blog url")+"<br>"
s+="<input name='email' type=text>"
s+="<br>"
s+="<br>"
s+="<br>"
s+="</td></tr>";
}
s+="<tr><td align=center style='"+css_label+"'>"
s+="<textarea name='comment' style='width:100%;height:100px;' ></textarea>"
s+="</td></tr>";
s+="</table>"
s+="</form>"
this.writeContent(s)
}
w.rVAns(hXGIb)
}
function GsKnG(parent,name)
{
var obj=parent.getElementsByTagName(name)
if(obj&&obj.length>0)
{
var node=obj[0]
return node.getAttribute('val');
}
return "";
}
function bSRid(hnJZX,DLCaW,cULxf)
{
var hXGIb=cULxf[0]
var uaOVI=cULxf[1]
var pPJGX=tIhJJ(DLCaW)
var KVchU=Zlbif(pPJGX)
if(KVchU.length>0)
{
if(document.webaca_is_preview)
{
return;
}
uaOVI.writeContent("<span style='"+uaOVI.cssText1()+"'>"+KVchU+" </span>")
return;
}
var doc=pPJGX
var text="";
var items=pPJGX.getElementsByTagName("OBJECT");
var css_common="font-family:Arial;"
var s_col_text=uaOVI.getColorTheme(3)
var BDRBZ=""
for(i=0;i<items.length;i++)
{
var obj_comment=items[i]
var id_article=GsKnG(obj_comment,"id_article")
var comment=GsKnG(obj_comment,"comment")
var author=GsKnG(obj_comment,"author")
var created=GsKnG(obj_comment,"created")
var email=GsKnG(obj_comment,"email")
author=unescape(author)
comment=unescape(comment)
if(email=="http://") email="";
if(email.length>0)
{
var label_url=email;
var url=email;
if((email.indexOf("@")>0)&&(email.indexOf("mailto:")<0))
{
url="mailto:"+email;
label_url=email;
}
email="<a href='"+url+"' target=_blank>"+label_url+"</a>";
}
BDRBZ+="<span style='"+css_common+"color:"+s_col_text+";text-decoration:none;font-size:13px;'><b>"+author+" </b></span>";
BDRBZ+="<span style='"+css_common+"color:#0000ff;text-decoration:underline;font-size:13px;'>"+email+"</span> ";
BDRBZ+="<span style='"+css_common+"color:#0000ff;text-decoration:none;font-size:11px;'>"+created+" </span>";
BDRBZ+="<br>";
BDRBZ+="<span style='"+css_common+"color:"+s_col_text+";font-size:13px;'>"+comment+" </span>";
if(i<items.length-1)
{
BDRBZ+="<hr>";
}
}
if(items.length==0)
{
BDRBZ+="<span style='"+uaOVI.cssText1()+"'>"+Translator.tr("No comments in this blog!")+" </span>"
}
uaOVI.writeContent(BDRBZ)
}
function CcGoK(hXGIb_button)
{
var WtCoi=document.wa_global_blogs_elements[hXGIb_button]
return WtCoi.id_blog
}
function WA_blog(hXGIb_button)
{
var w=new WA_Dialog();
w.rVAns=function(hXGIb_button)
{
this.addButton(Translator.tr("Send a message"),LjakF,[hXGIb_button])
this.initializeWindow(650,900) 
var mess="Loading messages...."
if(document.webaca_is_preview)
{
mess=Translator.tr("Operation not allowed in preview mode");
}
var s=""
s+="<table border=0 cellpadding=0 cellspacing=0  style='width:100%;'><tr>";
s+="<td align=center style='"+this.cssText1()+"'>"
s+=mess
s+="</td></tr></table>"
this.writeContent(s)
var YLEpS="";
YLEpS+="list_id="+CcGoK(hXGIb_button)
if(document.webaca_is_preview!=true)
{
makePOSTRequest(CONST_URL_WA_BLOG+"?action=get_comments",YLEpS,bSRid,[hXGIb_button,this]);
}
}
w.rVAns(hXGIb_button)
}

-->
