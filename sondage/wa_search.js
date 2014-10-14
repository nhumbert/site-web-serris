<!--

function vhXDQ(FIglg)
{
document.wa_search_index_js_loaded=true;
var uaOVI=FIglg[0]
LrCMr();
uaOVI.LVexT=false;
uaOVI.ierxg()
}
function WA_onClickSearch()
{
var uaOVI=WA_Dialog.getCurrent()
if(!uaOVI)return;
if(uaOVI.LVexT==true) return;
uaOVI.ierxg()
}
function YwKaW(tYTQK)
{
var tYTQK_value=tYTQK.value
var QkKec=tYTQK_value;
QkKec=removeAccentsFromString(QkKec);
QkKec=trimString(QkKec);
var dMirA=[",",";","\\.","'",":","/","`","\\?"];
for(var c=0;c<dMirA.length;c++)
{
var reg=new RegExp(dMirA[c],"g");
QkKec=QkKec.replace(reg," ")
}
var dmRYb=QkKec.toLowerCase().split(" ");
var YDIlC=new Array();
for(var i=0;i<dmRYb.length;i++)
{
var w=trimString(dmRYb[i]);
if((w!=undefined)&&(w.length>2))
{
YDIlC.push(w);
}
}
YDIlC=YDIlC.sort(XtqaZ);
var kOXar_search=new Array()
for(var i=0;i<YDIlC.length;i++)
{
var w=YDIlC[i];
var sUvSG=""
for(var i2=0;i2<w.length;i2++)
{
var nMRKc=w.charCodeAt(i2);
if((nMRKc>125)||(nMRKc==38)||(nMRKc=='<')||(nMRKc=='>')||(nMRKc=='"'))
{
sUvSG+="&#"+nMRKc+";"
}
else
{
sUvSG+=w.charAt(i2);
}
}
kOXar_search.push(sUvSG);
}

var mvWgl=new Array();
for(var i=0;i<kOXar_search.length;i++)
{
var uaOVI=kOXar_search[i];
var Zqcdo=true;
for(var i2=i+1;i2<kOXar_search.length;i2++)
{
var sUvSG=kOXar_search[i2];
if(sUvSG.indexOf(uaOVI)>-1)
{
Zqcdo=false;
break;
}
}
if(Zqcdo) mvWgl.push(uaOVI);
}
return mvWgl;
}
function WA_openSearchDialog(tYTQK,VKguI)
{
var uaOVI=new WA_Dialog();
uaOVI.XEWZo=tYTQK
uaOVI.abBEZ=function(tYTQK_value)
{
this.aNJbF='search-dialog-input'
this.BqDgn='search-dialog-select-filter'
this.sXPjp_windows_title_result="wa-result-windows-title"
this.kgkxC="wa-result-windows"
var RsmCe="font-family:Arial;"
var xLgMw=RsmCe+"color:"+this.getColorTheme(3)+";font-weight:bold;font-size:12px;"
this.initializeWindow(600,700)
var BDRBZ=""
BDRBZ+="<table border=0 cellpadding=0 cellspacing=0  style='width:100%;'>";
BDRBZ+="<tr><td align=left style='"+xLgMw+"'>"
BDRBZ+="<input type=text results=0 placeholder='' id='"+this.aNJbF+"' >&nbsp;&nbsp;"
BDRBZ+="<input type=button value='"+Translator.tr("Search")+"' onclick='WA_onClickSearch()'>"
BDRBZ+="&nbsp;&nbsp;"
BDRBZ+="<select id='"+this.BqDgn+"' onchange='WA_onClickSearch()'>"
BDRBZ+="<option value='-1'>"+Translator.tr("All results")+"</option>"
BDRBZ+="<option value='0'>"+Translator.tr("Pages results")+"</option>"
BDRBZ+="<option value='2'>"+Translator.tr("Photos results")+"</option>"
BDRBZ+="<option value='1'>"+Translator.tr("Articles results")+"</option>"
BDRBZ+="</select>"
BDRBZ+="<br><br>"
BDRBZ+="</td>"
BDRBZ+="</tr>";
BDRBZ+="</table>"
BDRBZ+="<div id='"+this.sXPjp_windows_title_result+"' style='"
BDRBZ+="font-family:Arial;color:#ffffff;text-align:right;font-size:13px;";
BDRBZ+="height:20px;line-height:20px;width:100%;background-color:"+this.getColorTheme(0)+";"
BDRBZ+="' ></div>"
BDRBZ+="<div id='"+this.kgkxC+"' style='";
BDRBZ+="position:relative;overflow:auto;"
BDRBZ+="border-style:solid;border-width:1px;border-color:"+this.getColorTheme(0)+";"
BDRBZ+="background-color:#ffffff;width:"+this.nAeRe()+"px;height:"+this.kluWR()+"px;'></div>"
this.writeContent(BDRBZ)
var tYTQK=document.getElementById(this.aNJbF);
tYTQK.value=tYTQK_value
}
uaOVI.IloUl=function(BDRBZ)
{
var Hiink_title=document.getElementById(this.sXPjp_windows_title_result);
if(Hiink_title)
{
Hiink_title.innerHTML=BDRBZ+"&nbsp;"
}
}
uaOVI.closeWin=function()
{
this.XEWZo.focus()
this.intern_closeWin()
}
uaOVI.onCustomKeypress=function(kUkNK)
{
if(kUkNK==13)
{
this.ierxg()
return true;
}
if(kUkNK!=27)
{
this.hIwWv("")
this.IloUl("");
}
return false;
}
uaOVI.nAeRe=function()
{
return this.m_content_lx-2;
}
uaOVI.kluWR=function()
{
return this.m_content_ly-80;
}
uaOVI.customUpdate=function()
{
var Hiink=document.getElementById(this.kgkxC);
if(Hiink)
{
html_SetSize(this.kgkxC,this.nAeRe(),this.kluWR());
}
}
uaOVI.hIwWv=function(BDRBZ)
{
var Hiink=document.getElementById(this.kgkxC);
Hiink.innerHTML=BDRBZ
}
uaOVI.ierxg=function()
{
var IaTBH_filter=document.getElementById(this.BqDgn);
var iqcBB=IaTBH_filter.value
var tYTQK=document.getElementById(this.aNJbF);
this.XEWZo.value=tYTQK.value
var kOXar_query=YwKaW(tYTQK)
var CgoGG=gHeXF(kOXar_query,iqcBB)
var BDRBZ=""
var RsmCe="font-family:Arial;";
var HGnjt="color:#0000ff;text-decoration:underline;font-size:15px;";
var BIhQt="color:#000000;font-size:13px;";
var uKsOB="color:#006600;font-size:13px;";
var LPNqW="color:#990099;font-size:12px;";
var LmvBR="color:#006600;font-size:11px;";
BDRBZ+="<table border=0 cellpadding=0 cellspacing=3  style='"+RsmCe+"width:90%;'>";
var l_image=40;
for(var i=0;i<CgoGG.length;i++)
{
var LJSPw=CgoGG[i]
var wVqtH=LJSPw.page_reference;
var wHEax=wVqtH.TIeLA(kOXar_query);
var desc=wVqtH.m_description;
var url=wVqtH.url(Translator.m_lang_for_filename)
var rouUo=false;
if((wVqtH.m_img.length>0))
{
if(isNaN(wVqtH.m_img_lx))
{
rouUo=new Size(l_image,l_image)
}
else
{
rouUo=new Size(wVqtH.m_img_lx,wVqtH.m_img_ly)
if(rouUo.scale(new Size(l_image,l_image))==false)
{
rouUo=new Size(l_image,l_image)
}
}
}
BDRBZ+="<tr valign=top>"
if(rouUo)
{
BDRBZ+="<td width="+l_image+"px  align=center>"
BDRBZ+="<a href='"+url+"'><img hspace=0 vspace=3  border=0  width=\""+rouUo.width+"\" height=\""+rouUo.height+"\" src=\""+wVqtH.m_img+"\"></a>";
BDRBZ+="</td>"
}
BDRBZ+="<td"
if(!rouUo)
{
BDRBZ+=" colspan=2"
}
BDRBZ+=">"
BDRBZ+="<a style='"+HGnjt+"' href='"+url+"'>"+wHEax+"</a>";
BDRBZ+=" <span style='"+LmvBR+"'>"+Translator.tr("Pertinence")+" : "+Math.round(LJSPw.scoring)+"</span>";
BDRBZ+="<br>";
if(desc.length>0)
{
BDRBZ+="<span style='"+BIhQt+"'>"+wVqtH.xIkem(kOXar_query)+"</span><br>";
}
BDRBZ+="<a style='"+uKsOB+"' href='"+url+"'>"+url+"</a><br><br>";
BDRBZ+="</td>"
BDRBZ+="</tr>"
}
BDRBZ+="</table>" 
this.hIwWv(BDRBZ)
if(CgoGG.length==0)
{
this.IloUl(Translator.tr("No results"))
}
else
{
this.IloUl(Translator.tr("Search result")+" : "+CgoGG.length)
}
tYTQK.focus()
}
uaOVI.abBEZ(tYTQK.value)
if(document.wa_search_index_js_loaded==true)
{
uaOVI.ierxg()
}
else
{
uaOVI.LVexT=true;
uaOVI.IloUl("Loading search index...")
uaOVI.hIwWv("<div width=100% align=center><img src='wa_loading.gif'></div>")
WA_loadScript(VKguI,vhXDQ,[uaOVI])
}
}
function gHeXF(kOXar_query,iqcBB)
{
var nXvvx=false;
var mSSar=new Array()
var fYQVC=CONST_WA_SEARCH_INDEX.m_array_index
var ulUqB=CONST_WA_SEARCH_INDEX.m_array_page_infos 
var kOXar_search=kOXar_query
for(var i=0;i<kOXar_search.length;i++)
{
var w=kOXar_search[i];
if(w.length>0)
{
mSSar=new Array();
for(var index in fYQVC)
{
var WkurN=index.indexOf(w);
if(WkurN!=-1)
{
var list_refs=fYQVC[index];
for(var index_page in list_refs)
{
var ref=list_refs[index_page];
var obj_result=mSSar[index_page];
if(!obj_result)
{
mSSar[index_page]=new Object();
obj_result=mSSar[index_page];
obj_result.list_langs=new Array();
}
var vrBXT=obj_result.list_langs;
for(var lng in ref)
{
var ABNsf=parseInt(ref[lng]);
ABNsf*=MtPNw.WhabE(w,index);
if(!vrBXT[lng])
{
vrBXT[lng]=ABNsf;
}
else
{
vrBXT[lng]+=ABNsf;
}
}
}
}
}
if(nXvvx)
{
var jhnSt=new Array();
for(var index in mSSar)
{
for(var index2 in nXvvx)
{
if(index2==index)
{
jhnSt[index]=mSSar[index];
break;
}
}
}
mSSar=jhnSt;
}
nXvvx=mSSar;
}
}
var vAaUQ=new Array();
var key_lang_page=Translator.m_lang;
var EndHG=0;
for(var index_page in mSSar)
{
var list_lng=mSSar[index_page].list_langs;
var key_lang_reference="";
var VoVtR_score=0;
var i=0;
for(var lng in list_lng)
{
if(i==0)
{
key_lang_reference=lng;
VoVtR_score+=list_lng[lng];
}
if(lng==key_lang_page)
{
VoVtR_score+=list_lng[lng];
key_lang_reference=lng;
break;
}
i++;
}
if(key_lang_reference.length==0)
{
key_lang_reference="#";
}
var wVqtH=ulUqB[index_page][key_lang_reference];
if(wVqtH&&((iqcBB<0)||(iqcBB==wVqtH.m_type)))
{
var LJSPw=new Array();
LJSPw.page_reference=wVqtH;
LJSPw.index_page=index_page;
LJSPw.scoring=VoVtR_score+wVqtH.MfRnr(kOXar_search);
LJSPw.test_index=EndHG;
vAaUQ.push(LJSPw);
EndHG++;
}
}
vAaUQ=vAaUQ.sort(AKJKS);
return vAaUQ;
}
function LrCMr()
{
if(CONST_WA_SEARCH_INDEX.initialized==true) return;
CONST_WA_SEARCH_INDEX.initialized=true
CONST_WA_SEARCH_INDEX.m_array_index=new Array()
CONST_WA_SEARCH_INDEX.m_array_page_infos=new Array() 
var hMVQm=CONST_WA_SEARCH_INDEX.index
for(var kkSBo=0;kkSBo<hMVQm.length;kkSBo+=2)
{
var WRXLf=hMVQm[kkSBo]
var hFPBi=hMVQm[kkSBo+1]
var VoVtR_list_2=new Array();
var VoVtR_list=hFPBi.split(",");
for(var hMVQm_ref0 in VoVtR_list)
{
var VajIi="#";
var hMVQm_ref=VoVtR_list[hMVQm_ref0]
var BDRBZ_score="";
var WApeT=hMVQm_ref.indexOf(":");
if(WApeT!=-1)
{
BDRBZ_score=hMVQm_ref.substring(WApeT+1);
hMVQm_ref=hMVQm_ref.substring(0,WApeT);
}
var NQPVV="";
var YJUIH_info=hMVQm_ref.indexOf("@");
if(YJUIH_info!=-1)
{
NQPVV=hMVQm_ref.substring(YJUIH_info+1);
hMVQm_ref=hMVQm_ref.substring(0,YJUIH_info);
}
var YJUIH=hMVQm_ref.indexOf("|");
if(YJUIH!=-1)
{
VajIi=hMVQm_ref.substring(YJUIH+1);
hMVQm_ref=hMVQm_ref.substring(0,YJUIH);
}
var hMVQm_page=hMVQm_ref;
if(NQPVV.length>0)
{
hMVQm_page+="@"+NQPVV;
}
if(!VoVtR_list_2[hMVQm_page])
{
VoVtR_list_2[hMVQm_page]=new Array();
}
var vrBXT=VoVtR_list_2[hMVQm_page];
if(!vrBXT[VajIi])
{
vrBXT[VajIi]=BDRBZ_score;
}
}
var wHtve_index=CONST_WA_SEARCH_INDEX.m_array_index
if(!wHtve_index[WRXLf])
{
wHtve_index[WRXLf]=VoVtR_list_2;
}
else
{
for(var VajIi in VoVtR_list_2)
{
wHtve_index[WRXLf][VajIi]=VoVtR_list_2[VajIi];
}
}
}
var NINcY=CONST_WA_SEARCH_INDEX.page_info;
var TiNYl=CONST_WA_SEARCH_INDEX.m_array_page_infos
for(var kkSBo=0;kkSBo<NINcY.length;kkSBo++)
{
var NNRaM=NINcY[kkSBo]
var VoVtR=NNRaM.ref;
if(VoVtR)
{
var wVqtH=new MtPNw();
wVqtH.m_ref=VoVtR;
wVqtH.parseAttributes(NNRaM);
if(!TiNYl[VoVtR])
{
TiNYl[VoVtR]=new Array();
}
var IHQGd=wVqtH.m_lang;
if(IHQGd.length==0)
{
IHQGd="#";
}
TiNYl[VoVtR][IHQGd]=wVqtH;
}
}
}
function MtPNw()
{
this.m_ref="";
this.m_img=""
this.uGSfd=function(BDRBZ)
{
if(BDRBZ==undefined) return""
return BDRBZ
}
this.parseAttributes=function(NNRaM)
{
this.m_lang=NNRaM.lng;
this.m_url=NNRaM.url;
this.m_title=this.uGSfd(NNRaM.title);
this.m_title2=this.uGSfd(NNRaM.title2);
this.m_description=this.uGSfd(NNRaM.desc);
this.m_description2=this.uGSfd(NNRaM.desc2);
this.m_keywords=this.uGSfd(NNRaM.k);
this.m_img=this.uGSfd(NNRaM.img);
var img_size=NNRaM.img_size;
if(!img_size)img_size=""
this.m_type=parseInt(NNRaM.type)
if(isNaN(this.m_type))
{
this.m_type=0;
}
if(img_size.length>0)
{
var list_size=img_size.split(",");
if(list_size.length==2)
{
this.m_img_lx=parseInt(list_size[0])
this.m_img_ly=parseInt(list_size[1])
}
}
}
this.MfRnr=function(kOXar_search)
{
var res=0;
for(var i=0;i<kOXar_search.length;i++)
{
var w=kOXar_search[i];
if(w.length>1)
{
res+=25*MtPNw.WhabE(w,this.m_title2);
res+=15*MtPNw.WhabE(w,this.m_description2);
res+=30*MtPNw.WhabE(w,this.m_keywords);
}
}
return res;
}
this.url=function(lng)
{
if(this.m_lang=="all")
{
if(lng.length==0)
{
return this.m_url.replace(/@lng@/g,"") 
}
else
{
return this.m_url.replace(/@lng@/g,"_"+lng)
}
}
return this.m_url;
}
this.formatStringWithQuery=function(s,kOXar_search)
{
var title_ref=s;
var title2=removeAccentsFromString(title_ref.toLowerCase());
var result=title_ref;
var result2=title2;
for(var i=0;i<kOXar_search.length;i++)
{
var w=trimString(kOXar_search[i]);
var len_w=w.length;
if(len_w>1)
{
var nb=0;
var ind0=0;
var ind_search=0;
var ind=0;
do
{
ind=result2.indexOf(w,ind_search);
if(ind>-1)
{
var index_1=ind+len_w;
var s0=result.substring(ind0,ind);
var sw=result.substring(ind,ind+len_w);
var s1=result.substring(index_1);
var s2_0=result2.substring(ind0,ind);
var s2_1=result2.substring(index_1);
result=s0+"<b>"+sw+"</b>"+s1;
result2=s2_0+"<b>"+w+"</b>"+s2_1;
ind_search=index_1+7;
}
nb++;
}
while(ind>0);
}
}
return result;
}
this.title=function()
{
var title=this.m_title;
if(title.length==0)
{
title="Page "+this.m_ref+"(no title !)";
}
return title;
}
this.TIeLA=function(kOXar_search)
{
return this.formatStringWithQuery(this.title(),kOXar_search);
}
this.xIkem=function(kOXar_search)
{
return this.formatStringWithQuery(this.m_description,kOXar_search);
}
}
MtPNw.WhabE=function(chJjn,match_w)
{
var ABNsf=0;
if(chJjn==match_w)
{
ABNsf=6.2;
}
else
{
var ind=match_w.indexOf(chJjn);
if(ind==0)
{
ABNsf=5;
}
else
if(ind>0)
{
ABNsf=1;
}
}
return ABNsf;
}
function XtqaZ(a,b)
{
if(a.length<b.length) return-1;
else
if(a.length>b.length) return 1;
return 0;
}
function AKJKS(a,b)
{
if(b.scoring<a.scoring) return-1;
else
if(b.scoring>a.scoring) return 1;
if(a.page_reference.m_type<b.page_reference.m_type) return-1;
else
if(a.page_reference.m_type>b.page_reference.m_type) return 1;
return 0;
}

-->
