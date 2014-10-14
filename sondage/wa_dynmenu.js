<!--

function WA_dynmenuBg(hXGIb)
{
var vpJBE=document.wa_global_menu_declaration[hXGIb]
WA_bg(vpJBE.id,vpJBE.root_lx,vpJBE.root_ly,vpJBE.root_corner,vpJBE.root_border,vpJBE.root_col_border,[vpJBE.root_bg],false,0)
}
function over_menu_off(p_obj,id_menu)
{
YRjdO()
var WtCoi_menu_root=document.wa_root_obj_menu;
var WtCoi_current_menu=WtCoi_menu_root.search(id_menu)
var aQdLG=p_obj.offsetParent.offsetParent;
if(aQdLG)
{
var WtCoi_menu=aQdLG.WtCoi_menu
WtCoi_menu.QEhjm=WtCoi_current_menu
rKmFv(aQdLG.cur_menu)
rMjxm(p_obj,true)
}
}
function WA_dynmenu_onmouseover_off(p_obj,Muthj)
{
hide_menu();
var pmsoi=document.wa_global_menu_declaration[Muthj]
p_obj.obj_menu=new AMHIl(Muthj,pmsoi,null,0)
var WtCoi_menu=p_obj.obj_menu
document.wa_root_obj_menu=WtCoi_menu
rMjxm(p_obj,true)
}
function WA_dynmenu_onmouseout(p_obj)
{
clearTimeout(window.wa_dynmenu_timer);
window.wa_dynmenu_timer=wa_timeout("hide_menu()",1000);
rMjxm(p_obj,false)
}
function over_menu(p_obj,id_menu,vsckw)
{
var WtCoi_menu_root=document.wa_root_obj_menu;
var WtCoi_menu=WtCoi_menu_root.search(id_menu)
YRjdO()
var dyn_cont=document.getElementById('dynmenu-container');
var jxkbQ=html_findPos(p_obj)
if(vsckw==false)
{
var BXLjh=p_obj.offsetParent.offsetParent;
rKmFv(BXLjh.cur_menu)
}
var x2=0;
var y2=jxkbQ.y;
if(vsckw)
{
x2=vsckw.x
y2=vsckw.y
}
var par_menu=p_obj.offsetParent.offsetParent;
if(par_menu)
{
var rHaCN=par_menu.WtCoi_menu
if(rHaCN)
{
var jxkbQ_par=rHaCN.sGYEr
x2=jxkbQ_par.x+rHaCN.QsFGa()-3
}
}

var pHnxi=(x2+WtCoi_menu.QsFGa()+40-getWindowScroll().x)-getWindowSize().width
if(pHnxi>0)
{
x2=x2-pHnxi 
}
var MBiem_dec=(y2+WtCoi_menu.onEtY()+15-getWindowScroll().y)-getWindowSize().height
if(MBiem_dec>0)
{
y2=y2-MBiem_dec
y2=Math.max(0,y2)
}
var menu=document.getElementById(id_menu);
menu.WtCoi_menu=WtCoi_menu
WtCoi_menu.sGYEr=new Point(x2,y2)
if(par_menu!=undefined)
{
GtoLf(par_menu,menu)
}
html_SetVisibility(menu,true)
html_SetPosition(menu,x2,y2)
WtCoi_menu.ekSev()
rMjxm(p_obj,true)
}
function GtoLf(CJbBB,aQdLG)
{
CJbBB.cur_menu=aQdLG
var rHaCN=CJbBB.WtCoi_menu
if(rHaCN)
{
rHaCN.QEhjm=aQdLG.WtCoi_menu
}
}
function WA_dynmenu_onmouseover(p_obj,hXGIb,WYLre,vsckw)
{
var vpJBE=document.wa_global_menu_declaration[hXGIb]
var id_menu="dynmenu-id-var"
var dyn_cont=document.getElementById('dynmenu-container');
var JscfW=new Array();
for(var n=0;n<WYLre.length-1;n++)
{
JscfW.push(WYLre[n])
}
var SoFWi=WYLre[WYLre.length-1]
WYLre=JscfW 
p_obj.obj_menu=new AMHIl(id_menu,vpJBE,WYLre,null,SoFWi)
var WtCoi_menu=p_obj.obj_menu
dyn_cont.innerHTML=WtCoi_menu.div_menu(true)
document.wa_root_obj_menu=WtCoi_menu
over_menu(p_obj,id_menu,vsckw)
}
function YRjdO()
{
clearTimeout(window.wa_dynmenu_timer);
window.wa_dynmenu_timer=false;
}
function PqkrW(vpJBE,jxkbQ)
{
var MBiem=0
for(var i=0;i<vpJBE.root_sizes.length;i++)
{
var tFfdf=vpJBE.root_sizes[i]
MBiem+=tFfdf
if(jxkbQ<MBiem)
{
return i;
}
}
return vpJBE.root_sizes.length;
}
function rMjxm(p_obj,b_over)
{
var AHDNI=p_obj.offsetParent.offsetParent
var WtCoi_menu=AHDNI.WtCoi_menu
var xRUPg_i_root=false;
if(!WtCoi_menu)
{
xRUPg_i_root=true;
WtCoi_menu=document.wa_root_obj_menu;
}
if(!WtCoi_menu) return;
var vpJBE=WtCoi_menu.vpJBE
var fMVYQ;
var DvXRk=false;
var PkWhd=p_obj
var kfwDp=p_obj.getElementsByTagName("A")
if(kfwDp.length==1)
{
PkWhd=kfwDp[0]
}
if(b_over)
{
fMVYQ=(xRUPg_i_root)?vpJBE.root_col_text_over:vpJBE.sub_col_text_over
DvXRk=(xRUPg_i_root)?vpJBE.root_text_u_over:vpJBE.sub_text_u_over
}
else
{
fMVYQ=(xRUPg_i_root)?vpJBE.root_col_text:vpJBE.sub_col_text
DvXRk=(xRUPg_i_root)?vpJBE.root_text_u:vpJBE.sub_text_u
}
PkWhd.style.color=fMVYQ
PkWhd.style.textDecoration=(DvXRk)?"underline":"none"
if(xRUPg_i_root)
{
WA_bg_menu(vpJBE.id)
if(b_over)
{
var uGsij=document.getElementById(vpJBE.id)
if(!uGsij)return;
var c=uGsij.getContext('2d');
c.fillStyle=vpJBE.root_col_bg_over
c.beginPath()
var jxkbQ=html_findPos(p_obj)
var hFPBi=new Rect(0,0,0,0)
if(vpJBE.root_vertical==false)
{
var ORuUT=html_findPos(AHDNI)
var hMVQm=PqkrW(vpJBE,jxkbQ.x-ORuUT.x+10) 
hFPBi.x=jxkbQ.x-ORuUT.x
hFPBi.y=0
hFPBi.width=p_obj.offsetWidth
hFPBi.height=vpJBE.root_ly
if(hMVQm==0)
{
hFPBi.x+=vpJBE.root_corner
hFPBi.width-=vpJBE.root_corner
}
if(hMVQm==vpJBE.root_sizes.length)
{
hFPBi.width-=vpJBE.root_corner
}
}
else
{
var ORuUT=html_findPos(AHDNI)
var MXZAc=(jxkbQ.y-ORuUT.y)+p_obj.offsetHeight/2 
var MBiem=0;
hFPBi.x=0
hFPBi.width=p_obj.offsetWidth
for(var i=0;i<vpJBE.root_sizes.length;i++)
{
var tFfdf=vpJBE.root_sizes[i]
MBiem+=tFfdf
if(MXZAc<MBiem)
{
hFPBi.y=MBiem-tFfdf
hFPBi.height=tFfdf
break
}
}
if(hFPBi.height==0)
{
hFPBi.y=MBiem
hFPBi.height=vpJBE.root_ly-MBiem
}
{
hFPBi.x+=vpJBE.root_corner
hFPBi.width-=2*vpJBE.root_corner
}
}
c.fillRect(hFPBi.x+1,hFPBi.y+1,hFPBi.width-2,hFPBi.height-2)
}
}
WtCoi_menu.qYVYX()
}
function AMHIl(id_menu,vpJBE,WYLre,wVqtH,emcWB)
{
this.toHtml=function()
{
return this.WRPFL.toHtml()
}
this.search=function(hXGIb)
{
if(this.kfwDp)
for(var i=0;i<this.kfwDp.length;i++)
{
var jTmpf=this.kfwDp[i]
var eDgqq=jTmpf.search(hXGIb)
if(eDgqq)return eDgqq;
}
if(this.Muthj==hXGIb)return this;
return false;
}
this.KIHlA=function()
{
this.WRPFL.registerDynamicCanvas()
}
this.qYVYX=function()
{
this.WRPFL.draw()
}
this.ekSev=function()
{
this.KIHlA() 
this.WRPFL.setRect(0,0,this.QsFGa(),this.onEtY())
}
this.onEtY=function()
{
return this.kfwDp.length*this.vxoQD_sub_menu
}
this.QsFGa=function()
{
var w2=150;
var xRUPg_hasChild=false;
if(!this.Crdhi)
{
var OptSP=w2;
for(var i=0;i<this.kfwDp.length;i++)
{
var mCJri=this.kfwDp[i]
if(mCJri.FNhmi())xRUPg_hasChild=true
var hXGIb_sub_menu=(this.Muthj+"-submenu"+i)
var fWSSH_menu=document.getElementById(hXGIb_sub_menu);
if(fWSSH_menu)
{
if(isMSIE())
{
OptSP=Math.max(OptSP,fWSSH_menu.clientWidth)
}
else
{
OptSP=Math.max(OptSP,fWSSH_menu.offsetWidth)
}
}
}
if(isMSIE())
{

}
OptSP=(OptSP+6)
for(var i=0;i<this.kfwDp.length;i++)
{
var hXGIb_sub_menu=(this.Muthj+"-submenu"+i)
var fWSSH_menu=document.getElementById(hXGIb_sub_menu);
if(fWSSH_menu)
{
fWSSH_menu.style.width=OptSP+"px";
}
}
if(xRUPg_hasChild)
{
OptSP+=10
}
if(this.SUGjm=="right")
{
OptSP+=4
}
this.Crdhi=OptSP
w2=OptSP 
var aQdLG=document.getElementById(this.Muthj);
aQdLG.style.width=OptSP+"px";
}
else
{
w2=this.Crdhi
}
return w2
}
this.FNhmi=function()
{
return(this.oaieS)?true:false;
}
this.div_menu=function(b_visible,ChIRY)
{
var param_menu=this.oaieS
var design=this.vpJBE;
if(ChIRY==undefined)ChIRY=0;
var iJlCD=this.iJlCD
var BDRBZ="";
var UaQsd=400
if(isMSIE())
{
UaQsd=this.emcWB
}
BDRBZ+="<div id=\""+this.Muthj+"\" ";
BDRBZ+="style=\"";
if(b_visible==false)
{
BDRBZ+="visibility:hidden;";
}
BDRBZ+="position:absolute;";
BDRBZ+="width:"+UaQsd+"px;";
BDRBZ+="z-index:"+(ChIRY*10);
BDRBZ+="\">";
BDRBZ+=this.WRPFL.toHtml()
BDRBZ+="<div style='position:absolute;left:0px;top:0px;";
BDRBZ+="z-index:100;" 
BDRBZ+="'>";
iJlCD+="position:relative;"
iJlCD+="height:"+this.vxoQD_sub_menu+"px;";
iJlCD+="line-height:"+this.vxoQD_sub_menu+"px;"
iJlCD+="cursor:"+this.vxoQD_sub_menu+"px;"
if(this.SUGjm=="center")
{
iJlCD+="text-align:center;";
}
else
{
iJlCD+="text-align:"+this.SUGjm+";";
iJlCD+="padding-"+this.SUGjm+":4px;";
}
this.kfwDp=new Array()
for(var i=0;i<param_menu.length;i++)
{
var hXGIb_sub_menu=this.Muthj+"-"+i
var o=param_menu[i];
var wVqtH=o[0]
var SoFWi=wVqtH[3] 
this.kfwDp.push(new AMHIl(hXGIb_sub_menu,design,o[1],wVqtH,SoFWi))
}
for(var i=0;i<param_menu.length;i++)
{
var mCJri=this.kfwDp[i]
var info=mCJri.wVqtH
var kgaha=info[0] 
var UUiLk=info[1]
var JxuSx=info[2]
if(UUiLk.length>0)
{
BDRBZ+="<a href='"+UUiLk+"' style='text-decoration:none;cursor:pointer;' ";
if(JxuSx.length>0)BDRBZ+="target="+JxuSx;
BDRBZ+=">";
}
BDRBZ+="<div id='"+(this.Muthj+"-submenu"+i)+"' style='"+iJlCD+"' "
if(mCJri.oaieS)
{
BDRBZ+="onmouseover=\u0022javascript:over_menu(this,'"+mCJri.Muthj+"',false)\u0022 ";
}
else
{
BDRBZ+="onmouseover=\u0022javascript:over_menu_off(this,'"+mCJri.Muthj+"')\u0022 ";
}
BDRBZ+="onmouseout=\u0022javascript:WA_dynmenu_onmouseout(this)\u0022 ";
BDRBZ+=">";
BDRBZ+=kgaha;
BDRBZ+="</div>";
if(UUiLk.length>0)
{
BDRBZ+="</a>";
}
}
BDRBZ+="</div>";
BDRBZ+="</div>";
for(var i=0;i<param_menu.length;i++)
{
var mCJri=this.kfwDp[i]
if(mCJri.oaieS)
{
BDRBZ+=mCJri.div_menu(false,ChIRY+1)
}
}
return BDRBZ;
}

this.oaieS=WYLre
this.emcWB=emcWB
this.wVqtH=wVqtH
this.vpJBE=vpJBE
this.tFfdf_border=1
this.fMVYQ_border=vpJBE.sub_col_border
this.iJlCD=vpJBE.sub_style_text
this.JagUw=vpJBE.sub_col_text
this.SUGjm=vpJBE.sub_align_text
this.vxoQD_sub_menu=vpJBE.sub_menu_height
this.Muthj=id_menu
this.WRPFL=new WA_GraphicElement(id_menu+"-bg",50,vpJBE.sub_menu_shadow)
this.WRPFL.WtCoi_menu=this;
this.WRPFL.vpJBE=vpJBE;
this.WRPFL.draw=function()
{
var WtCoi=this.WtCoi_menu
var vpJBE=this.vpJBE
var dNVjm=this.rect().width
var uAOQk=this.rect().height
var nNuwe=vpJBE.sub_col_bg.col1
if(vpJBE.sub_col_bg.has_gradient)
{
var xJUNw=vpJBE.sub_col_bg
var hPpgb=xJUNw.pt1.x*dNVjm/100
var omAiC=xJUNw.pt1.y*uAOQk/100
var mhhth=xJUNw.pt2.x*dNVjm/100
var JBYcF=xJUNw.pt2.y*uAOQk/100
nNuwe="("+hPpgb+";"+omAiC+";"+mhhth+";"+JBYcF+";"+xJUNw.col1+";"+xJUNw.col2+")";
}
WA_bg(this.canvasId(),dNVjm,uAOQk,vpJBE.sub_menu_corner,1,WtCoi.fMVYQ_border,[nNuwe],this.shadow(),0)
var el=document.getElementById(this.canvasId())
if(!el)return;
var c=el.getContext('2d');
c.fillStyle=WtCoi.JagUw;
var w=WtCoi.QsFGa()
var h=WtCoi.vxoQD_sub_menu
var fgxZV=8
var uWAmU=6
var fLAKT=Math.max(2,vpJBE.sub_corner-2);
var jbgbh=0;
var NLmIX=0;
if(this.shadow())
{
jbgbh+=6;
NLmIX+=6;
}
var MBiem=NLmIX+Math.round((h-fgxZV)/2);
var iIRYP=jbgbh+w-uWAmU-4;
c.shadowOffsetX=0;
c.shadowOffsetY=0;
c.shadowBlur=0;
for(var i=0;i<WtCoi.kfwDp.length;i++)
{
var fWSSH=WtCoi.kfwDp[i]
if(WtCoi.QEhjm==fWSSH) 
{
var mhhth=iIRYP-30
c.fillStyle=vpJBE.sub_col_bg_over
c.beginPath()
c.fillRect(jbgbh+fLAKT/2,NLmIX+fLAKT/2,w-fLAKT,WtCoi.vxoQD_sub_menu-fLAKT)
}
if(fWSSH.FNhmi())
{
c.fillStyle=WtCoi.JagUw;
c.beginPath()
c.moveTo(iIRYP,MBiem);
c.lineTo(iIRYP+uWAmU,MBiem+fgxZV/2);
c.lineTo(iIRYP,MBiem+fgxZV);
c.lineTo(iIRYP,MBiem);
c.fill()
}
NLmIX+=WtCoi.vxoQD_sub_menu
MBiem+=WtCoi.vxoQD_sub_menu
}
}
}
function rKmFv(aQdLG)
{
if(aQdLG==undefined) return
if(aQdLG.cur_menu!=undefined)
{
rKmFv(aQdLG.cur_menu)
}
html_SetVisibility(aQdLG,false)
}
function hide_menu()
{
YRjdO()
var rCfFl=document.getElementById('dynmenu-container');
rCfFl.innerHTML=""
}

-->
