<!--
 
function CSXuT(c,p_x,p_y,lx,b_right)
{
var factor=lx/100;
var yAxe=Math.round(50*factor);
var x1=Math.round(80*factor);var y1=0*factor;var x2=Math.round(55*factor);var y2=Math.round(25*factor);
var x3=Math.round(47*factor);var y3=Math.round(17*factor);var x4=Math.round(60*factor);var y4=Math.round(5*factor);
var x5=Math.round(22*factor);var y5=y4;
if(b_right==false)
{
x1=lx-x1;x2=lx-x2;x3=lx-x3;x4=lx-x4;x5=lx-x5;
}
c.beginPath()
c.moveTo(p_x+x1,p_y+yAxe-y1);c.lineTo(p_x+x2,p_y+yAxe-y2);c.lineTo(p_x+x3,p_y+yAxe-y3);c.lineTo(p_x+x4,p_y+yAxe-y4);c.lineTo(p_x+x5,p_y+yAxe-y5);
c.lineTo(p_x+x5,p_y+yAxe+y5);c.lineTo(p_x+x4,p_y+yAxe+y4);
c.lineTo(p_x+x3,p_y+yAxe+y3);c.lineTo(p_x+x2,p_y+yAxe+y2);c.lineTo(p_x+x1,p_y+yAxe+y1);
c.fill()
}
function kanxi(c,x,y,lx,size,epais)
{
x=Math.round(x+(lx-size)/2);y=Math.round(y+(lx-size)/2);c.fillRect(x,y+(size-epais)/2,size,epais);c.fillRect(x+(size-epais)/2,y,epais,size);
}
function qPkiP(c,x,y,lx,col)
{
var old_fill=c.fillStyle;
var size=16;x=Math.round(x+(lx-size)/2);y=Math.round(y+(lx-size)/2);var x2=9;
c.beginPath();c.moveTo(x+x2,y);c.lineTo(x+x2+6,y+7);c.lineTo(x+x2,y+14);c.fill();
var grad=c.createLinearGradient(x,y,x+8,y);
var uqLXE=new RGBColor(col)
uqLXE.a=0
grad.addColorStop(1,col);grad.addColorStop(0,uqLXE.toRGB());
c.fillStyle=grad;
c.beginPath();c.rect(x,y,8,14);c.fill()
c.fillStyle=old_fill
}
function UdtNf(c,x,y,lx,col)
{
var old_fill=c.fillStyle;
var size=16;
x=Math.round(x+(lx-size)/2);
y=Math.round(y+(lx-size)/2);
c.fillStyle=col;
c.beginPath();
c.rect(x,y,size,size);
c.fill()
c.fillStyle=old_fill
}
function SwqJB(name,qmSQF,tFfdf)
{
var n=qmSQF.indexOf("%")
if(n>-1)
{
qmSQF=wa_evaluate(qmSQF.replace("%","/100"))
return Math.round(qmSQF*tFfdf)
}
qmSQF=parseFloat(qmSQF)
return Math.round(qmSQF)
}
function doaIW(hFPBi,dNVjm,uAOQk)
{
var x=SwqJB("x",hFPBi.x,dNVjm)
var y=SwqJB("y",hFPBi.y,uAOQk)
if(hFPBi.x.indexOf("%")==-1)dNVjm=dNVjm-x
if(hFPBi.y.indexOf("%")==-1)uAOQk=uAOQk-y 

var lx=SwqJB("lx",hFPBi.lx,dNVjm)
var ly=SwqJB("ly",hFPBi.ly,uAOQk)
return new Rect(x,y,lx,ly)
}
function WA_change_tool_button(hXGIb,kkSBo,over)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi&&WtCoi.pNeTT)
{
var hVRAc=WtCoi.pNeTT[kkSBo]
if(hVRAc)
{
hVRAc.fqkSN=over
hVRAc.draw()
}
}
}
function WA_toolbar_button(id,lx,ly,type,col,shadow)
{
var el=document.getElementById(id)
var c=el.getContext('2d');
c.clearRect(0,0,lx,ly) 
var current_col=col;
c.fillStyle=current_col;
if(type=="<")
{
CSXuT(c,0,0,lx,false)
}
if(type==">")
{
CSXuT(c,0,0,lx,true)
}
if(type=="down")
{
c.rotate(-Math.PI/2);c.translate(-lx,0);
CSXuT(c,0,0,lx,false)
c.translate(lx,0);c.rotate(Math.PI/2);
}
if(type=="up")
{
c.rotate(Math.PI/2);c.translate(0,-ly);
CSXuT(c,0,0,lx,false);
c.translate(0,ly);c.rotate(-Math.PI/2);
}
if(type=="+")
{
kanxi(c,0,0,lx,12,4)
}
if(type=="diapo")
{
qPkiP(c,0,0,lx,current_col)
}
if(type=="stop")
{
UdtNf(c,0,0,lx,current_col)
}
}
TTdSL.prototype=new Tween();
TTdSL.prototype.constructor=Tween;
TTdSL.superclass=Tween.prototype;
function TTdSL(obj,xnLJt,RpbMR,irNrs,fWnvR)
{
this.targetObject=obj;
this.init(new Object(),'a',xnLJt,RpbMR,irNrs,fWnvR);
this.onMotionChanged=function(evt)
{
var v=evt.target.getPosition();
var jTmpf=this.targetObject;
v=Math.round(v*100)/100
jTmpf.setOpacity(v/100);
}
}
function onMouseOnPreviewComment(hXGIb,RjVHR,ohrAH)
{
var WtCoi=VOIkZ(hXGIb)
var RlXIs=WtCoi.ZKKdI_preview_obj 
var old=WtCoi.uTxHx
WtCoi.uTxHx=RjVHR;
RlXIs.tbiXf=RjVHR
if(WtCoi.uTxHx)
WtCoi.SNAit=-1;

if(ohrAH)
wa_timeout(Delegate.create(RlXIs,RlXIs.RUqQh),200);
else
wa_timeout(Delegate.create(RlXIs,RlXIs.SDpqS),200);
}
XoSMn.prototype=new Tween();
XoSMn.prototype.constructor=Tween;
XoSMn.superclass=Tween.prototype;
function XoSMn(obj,xnLJt,RpbMR,irNrs,fWnvR)
{
this.targetObject=obj;
this.init(new Object(),'a',xnLJt,RpbMR,irNrs,fWnvR);
this.onMotionChanged=function(evt)
{
var v=evt.target.getPosition();
var RlXIs=this.targetObject;
RlXIs.IUROr=v
RlXIs.ToVEa()
}
this.onMotionFinished=function(evt)
{
var RlXIs=this.targetObject;
if(RlXIs.vYBbx==false)
{
RlXIs.WRPFL.setVisible(false)
html_SetVisibility(RlXIs.OtHCa,false)
}
RlXIs.setOverflow(RlXIs.tbiXf)
}
}
function IqaYm(hXGIb,xfREY)
{
this.YjfoN=hXGIb
this.xfREY=xfREY
this.OtHCa=this.xfREY+"comment-text-div"
this.tbiXf=false;
this.vYBbx=false;
this.IUROr=0;
this.toHtml=function()
{
var BDRBZ=""
this.WRPFL=new WA_GraphicElement(this.xfREY+"-graphic-comment-bg",500,false)
this.WRPFL._objPreview=this
this.WRPFL.draw=function()
{
if(this._objPreview.vYBbx)
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,0,0,'',['rgba(0,0,0,0.6)'],this.shadow(),0,this.opacity())
}
}
BDRBZ+=this.WRPFL.toHtml() 
BDRBZ+="<div id='"+this.OtHCa+"' ";
BDRBZ+="onmouseover=\"javascript:onMouseOnPreviewComment('"+this.YjfoN+"',true)\" ";
BDRBZ+="onmouseout=\"javascript:onMouseOnPreviewComment('"+this.YjfoN+"',false)\" ";
BDRBZ+=" style=\"font-family:Arial;font-size:13px;color:#ffffff;margin:2px;text-align:center;"
BDRBZ+="overflow:auto;visibility:hidden;"
BDRBZ+="position:absolute;"
BDRBZ+="z-index:5250;"
BDRBZ+="\">";
BDRBZ+="</div>";
return BDRBZ
}
this.ZgHwQ=function()
{
this.WRPFL.registerDynamicCanvas();
}
this.lcLKc=function(iIRYP,MBiem,dNVjm,uAOQk)
{
this.bdttU=new Rect(iIRYP,MBiem,dNVjm,uAOQk)
this.dUpNg(iIRYP,MBiem,dNVjm,uAOQk)
}
this.dUpNg=function(iIRYP,MBiem,dNVjm,uAOQk)
{
if(uAOQk<=0)
{
this.WRPFL.setVisible(false)
html_SetVisibility(this.OtHCa,false)
return;
}
this.WRPFL.setRect(iIRYP,MBiem,dNVjm,uAOQk)
html_SetGeometry(this.OtHCa,iIRYP,MBiem,dNVjm,uAOQk)
}
this.setOverflow=function(xRUPg)
{
var jTmpf=html_getLayer(this.OtHCa)
var Gjaet=((xRUPg)?"auto":"hidden")
jTmpf.style.overflow=Gjaet 
}
this.lhgvs=function()
{
this.vFKPe=true
clearTimeout(this.timerProgress)
this.timerProgress=wa_timeout(Delegate.create(this,this.mtlfV),300);
}
this.mtlfV=function()
{
if(this.vFKPe!=true)return;
this.vFKPe=false
this.rQNDE("chargement en cours...")
}
this.rQNDE=function(BDRBZ)
{
this.Pcdnf=BDRBZ
this.aXsWS(BDRBZ)
}
this.RWBLJ=function(BDRBZ)
{
this.vFKPe=false
this.EoKHw=0;
this.vYBbx=true
this.aXsWS(BDRBZ)
}
this.aXsWS=function(BDRBZ)
{
this.Pcdnf=BDRBZ
var hFPBi=this.bdttU 
if(!hFPBi)return;
var jTmpf=html_getLayer(this.OtHCa)
jTmpf.style.overflow="hidden" 
this.dUpNg(hFPBi.x,hFPBi.y+hFPBi.height-1,hFPBi.width,1)
html_writeContent(this.OtHCa,this.Pcdnf)
if(isMSIE())
{
WA_exec_delayedCallback(this,this.Ogxio)
}
else
{
this.Ogxio()
}
}
this.Ogxio=function()
{
var hFPBi=this.bdttU
var jTmpf=html_getLayer(this.OtHCa)
this.EoKHw=jTmpf.scrollHeight+4;
this.EoKHw=Math.min(this.EoKHw,hFPBi.height*0.8);
this.IUROr=0
this.RUqQh()
}
this.ToVEa=function()
{
var BDRBZ=this.Pcdnf;
var hFPBi=this.bdttU
var jTmpf=html_getLayer(this.OtHCa)
var RTqDD=this.IUROr
var uAOQk=RTqDD 
this.dUpNg(hFPBi.x,hFPBi.y+hFPBi.height-uAOQk,hFPBi.width,uAOQk)
WA_exec_delayedCallback(this,this.CWjeE)
}
this.RUqQh=function()
{
this.ekSev(true)
}
this.SDpqS=function()
{
this.ekSev(false)
}
this.ekSev=function(jvUXY)
{
var hFPBi=this.bdttU
if(this.wFbKZ)
{
this.wFbKZ.stop()
this.wFbKZ=false;
}
var IlpfI=Math.min(hFPBi.height*0.2,this.EoKHw);
IlpfI=Math.min(40,IlpfI);
if(this.tbiXf)IlpfI=this.EoKHw
var rsutB=this.IUROr;
var thnVu=IlpfI;
if(this.vYBbx==false)
{
rsutB=this.IUROr;
thnVu=0;
}

if(jvUXY)
{
this.setOverflow(false)
}
if(this.tbiXf!=true)
{
var jTmpf=html_getLayer(this.OtHCa)
jTmpf.scrollTop=0
}
this.wFbKZ=new XoSMn(this,Tween.strongEaseOut,rsutB,thnVu,0.5)
this.wFbKZ.start()
}
this.CWjeE=function(xRUPg)
{
var vYBbx=this.vYBbx
if(xRUPg==false)
{


vYBbx=false;
}
this.WRPFL.setVisible(vYBbx)
html_SetVisibility(this.OtHCa,vYBbx)
}
}
function WA_photoAlbumActionThumb(hXGIb,kkSBo,thnbU)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi.wjkAw()==false)return 
var raVxf=WtCoi.CorYX_preview_id;
var uGsij_img=document.getElementById(raVxf)
if(kkSBo==-1) kkSBo=0;
var CorYX=FjbMi(hXGIb)[kkSBo]
var OYBxA=WtCoi.oknUN()
var ClGdM=OYBxA.border_size 
if(thnbU!=true)
if(WtCoi.QOjeU==kkSBo)
{
return;
}
if(WtCoi.AJmYp) return;
WtCoi.AJmYp=true 
var IlpfI_size=new Size(WtCoi.sxern_preview.width-2*ClGdM,WtCoi.sxern_preview.height-2*ClGdM) 

var gFTex=WtCoi.nsamJ.max_img_resolution
var src_folder=oZvec(hXGIb)
var tFfdf=new Size(CorYX.size.w,CorYX.size.h)
tFfdf.scale(IlpfI_size)
if(gFTex>0)
{
var IlpfI_size_album=new Size(gFTex,gFTex)
tFfdf.scale(IlpfI_size_album)
}
var KvEpw=new Image();
if(isMSIE())
{
KvEpw=document.getElementById(WtCoi.CorYX_preview_id_cache) 
KvEpw.width=tFfdf.width
KvEpw.height=tFfdf.height
}
WtCoi.xQeci=KvEpw
KvEpw.CVHTD=0.2
KvEpw.RHYSU=0.2
KvEpw.hMVQm_img=kkSBo
KvEpw.CorYX_info=CorYX
KvEpw.ZKKdI_preview_obj=WtCoi.ZKKdI_preview_obj
KvEpw.TPqdl=WtCoi.TPqdl
KvEpw.jswCl_transition=Tween.strongEaseOut
KvEpw.uGsij_img=uGsij_img
KvEpw.FJFBX=document.getElementById(WtCoi.TPqdl.divId())
KvEpw.WtCoi=WtCoi 
KvEpw.HxeqC=tFfdf;
KvEpw.loaded=false;
WtCoi.ZKKdI_preview_obj.lhgvs()
KvEpw.onload=function()
{
OiYcf(this,this.uGsij_img)
}
KvEpw.onerror=function()
{
fcNDi(this,false)
}
KvEpw.onabort=function()
{
fcNDi(this,false)
}
KvEpw.src=src_folder+"/"+CorYX.th+"?v="+CorYX.mod;

}
function OiYcf(iJEnJ,uGsij_img)
{
clearTimeout(iJEnJ.WtCoi.ZKKdI_preview_obj.timerProgress) 
if(isMobileBrowser())
{
var WtCoi=iJEnJ.WtCoi
WtCoi.QOjeU=iJEnJ.hMVQm_img
iJEnJ.TPqdl.setOpacity(1);
html_SetOpacity(iJEnJ.uGsij_img,1)
BdOSI(iJEnJ)
fcNDi(iJEnJ,true)
return;
}
var NcHAg=new TTdSL(iJEnJ.TPqdl,iJEnJ.jswCl_transition,100,0,iJEnJ.CVHTD);
NcHAg.iJEnJ=iJEnJ
NcHAg.uGsij_img=uGsij_img
NcHAg.onMotionFinished=kXHgt
var VZbEn=new OpacityTween(uGsij_img,iJEnJ.jswCl_transition,100,0,iJEnJ.CVHTD);
VZbEn.iJEnJ=iJEnJ
VZbEn.uGsij_img=uGsij_img
NcHAg.start()
VZbEn.start()
}
function kXHgt()
{
var iJEnJ=this.iJEnJ 
var kkSBo=iJEnJ.hMVQm_img
var WtCoi=iJEnJ.WtCoi
WtCoi.QOjeU=kkSBo
var uGsij_img=iJEnJ.uGsij_img 
uGsij_img.iJEnJ=iJEnJ
BdOSI(iJEnJ) 
if(isMSIE()||isOperaBrowser())
{
var AahwR=new TTdSL(iJEnJ.TPqdl,iJEnJ.jswCl_transition,0,100,iJEnJ.RHYSU);
AahwR.iJEnJ=iJEnJ
AahwR.uGsij_img=this.uGsij_img
AahwR.onMotionFinished=nunMv
var cgFOP=new OpacityTween(this.uGsij_img,this.iJEnJ.jswCl_transition,0,100,this.iJEnJ.RHYSU);
cgFOP.iJEnJ=this.iJEnJ
cgFOP.uGsij_img=this.uGsij_img
cgFOP.start()
AahwR.start()
}
else
{
uGsij_img.onload=function()
{
var iJEnJ=this.iJEnJ
var uGsij_img=iJEnJ.uGsij_img
var AahwR=new TTdSL(iJEnJ.TPqdl,iJEnJ.jswCl_transition,0,100,iJEnJ.RHYSU);
AahwR.iJEnJ=iJEnJ
AahwR.uGsij_img=uGsij_img
AahwR.onMotionFinished=nunMv
var cgFOP=new OpacityTween(uGsij_img,iJEnJ.jswCl_transition,0,100,iJEnJ.RHYSU);
cgFOP.iJEnJ=iJEnJ
cgFOP.uGsij_img=uGsij_img
cgFOP.start()
AahwR.start()
}
}
}
function nunMv()
{
fcNDi(this.iJEnJ,true)
}
function fcNDi(iJEnJ,hnJZX)
{
var kkSBo=iJEnJ.hMVQm_img
var WtCoi=iJEnJ.WtCoi
WtCoi.AJmYp=false;
var kkSBo=WtCoi.QOjeU 
{
WtCoi.cDPSC=Math.floor(kkSBo/(WtCoi.qHxEk*WtCoi.JToYm))
JXgOV(WtCoi.hXGIb)
}
WtCoi.NhuOF()
WtCoi.fuBCI()
var ZKKdI=WtCoi.dZMHF()
if(ZKKdI.length==0)
{
WtCoi.ZKKdI_preview_obj.CWjeE(false)
}
WtCoi.OvsUG()
}
function BdOSI(iJEnJ)
{
var uGsij_img=iJEnJ.uGsij_img
var WtCoi=iJEnJ.WtCoi
var tFfdf=iJEnJ.HxeqC
WtCoi.rIDbx.width=tFfdf.width
WtCoi.rIDbx.height=tFfdf.height
uGsij_img.width=tFfdf.width;
uGsij_img.height=tFfdf.height;
uGsij_img.src=iJEnJ.src;
uGsij_img.WtCoi=WtCoi
uGsij_img.tFfdf=tFfdf
WtCoi.OvsUG()
var ZKKdI=WtCoi.dZMHF()
if(ZKKdI.length>0)
{
WtCoi.UbELZ()
WtCoi.ZKKdI_preview_obj.RWBLJ(ZKKdI)
}
else
{
WtCoi.ZKKdI_preview_obj.CWjeE(false);
}
}
function WA_photoAlbumChangeImageSize(uGsij_img,tFfdf,ZDnRl)
{
var dec=3
uGsij_img.width=tFfdf
uGsij_img.height=tFfdf
uGsij_img.style.borderWidth=ZDnRl
}
function WA_photoAlbumThumbOver(uGsij,hXGIb,kkSBo)
{
var WtCoi=VOIkZ(hXGIb)
var CorYX_def=FjbMi(hXGIb)[kkSBo]
var raVxf=WtCoi.ecLIF(kkSBo)
var uGsij_img=document.getElementById(raVxf)
uGsij.WtCoi=WtCoi;
uGsij.uGsij_img=uGsij_img
var dec=2
WA_photoAlbumChangeImageSize(uGsij_img,WtCoi.tFfdf_thumb-2*dec,WtCoi.tFfdf_border_thumbnail+dec)
}
function WA_photoAlbumThumbOut(uGsij)
{
var uGsij_img=uGsij.uGsij_img;
var WtCoi=uGsij.WtCoi
WA_photoAlbumChangeImageSize(uGsij_img,WtCoi.tFfdf_thumb,WtCoi.tFfdf_border_thumbnail) 
}
function GODBt(hXGIb,jLeDj)
{
this.hXGIb=hXGIb;
this.rVFwx=25;
this.QcToA=jLeDj;
this.hXGIb_canv_bg_toolbar="photo-album-toolbar-"+this.hXGIb
this.TqQqW=("photo-album-scroll-content"+this.hXGIb)
this.sxern_selector_slider=null;
this.sxern_selector_toolbar=null;
this.sxern_preview=null;
this.qHxEk=0;
this.JToYm=0;
this.VTOIu=new Array()
this.cDPSC=0;
this.CWmKp=1
this.toCYq=true;
this.hPJtO=false
this.WxJaP=40
this.rIDbx=new Size(0,0)
this.MERNh=false;
this.SNAit=-1;
this.QOjeU=-1;
this.TJVTC=this.QcToA.def.length
this.jQgOl=false;
this.sxern_container=new Rect(0,0,100,100)
this.nsamJ=sOsKl(this.hXGIb)
var GpxlB=this.nsamJ
if(GpxlB.diaporama&&(GpxlB.diaporama.startup))this.jQgOl=true;
this.SOaBL=false;
this.bPigi=false;
this.xJaMf=0;
this.SGwOb=function()
{
if(this==this.QcToA.album_object) return true;
return false;
}
this.xfREY=function()
{
return this.hXGIb+this.xJaMf
}
this.UbELZ=function()
{
var WtCoi=this
var tFfdf=new Size(WtCoi.rIDbx.width,WtCoi.rIDbx.height)
var OYBxA=WtCoi.oknUN()
var YNsJg=new RGBColor(OYBxA.border_col)
var ClGdM=OYBxA.border_size
if(YNsJg.a==0) ClGdM=0;
var hFPBi_preview=WtCoi.sxern_preview 
var x0=Math.round((hFPBi_preview.width-(tFfdf.width+2*ClGdM))/2)
var y0=Math.round((hFPBi_preview.height-(tFfdf.height+2*ClGdM))/2) 


WtCoi.ZKKdI_preview_obj.lcLKc(x0+ClGdM,y0+ClGdM,tFfdf.width,tFfdf.height);

}
this.OvsUG=function()
{
var WtCoi=this
var tFfdf=new Size(WtCoi.rIDbx.width,WtCoi.rIDbx.height)
var OYBxA=WtCoi.oknUN()
var YNsJg=new RGBColor(OYBxA.border_col)
var ClGdM=OYBxA.border_size
if(YNsJg.a==0) ClGdM=0;
var hFPBi_preview=WtCoi.sxern_preview 
var x0=Math.round((hFPBi_preview.width-(tFfdf.width+2*ClGdM))/2)
var y0=Math.round((hFPBi_preview.height-(tFfdf.height+2*ClGdM))/2)
WtCoi.TPqdl.setRect(x0,y0,tFfdf.width+2*ClGdM,tFfdf.height+2*ClGdM) 
var YjIfp_img=document.getElementById(WtCoi.YjIfp_img_preview_id)
html_SetPosition(YjIfp_img,ClGdM+x0,ClGdM+y0)
}
this.dZMHF=function()
{
var iJEnJ=this.xQeci
var wWbwY=this.nsamJ
var ZKKdI=""
var url=iJEnJ.CorYX_info.url
if(wWbwY.disp_comment)
{
if(wWbwY.disp_comment_img_number)
ZKKdI+="<b>"+(iJEnJ.hMVQm_img+1)+"/"+this.TJVTC+"</b>"
if(wWbwY.disp_comment_img_fn)
{
if(ZKKdI.length>0)ZKKdI+="<br>"
ZKKdI+="("+iJEnJ.CorYX_info.fn+")"
}
if(iJEnJ.CorYX_info.comment.length>0)
{
if(ZKKdI.length>0)ZKKdI+="<br>"
ZKKdI+=iJEnJ.CorYX_info.comment
}
if(url.length>0)
{
if(ZKKdI.length>0)ZKKdI+="<br>"
ZKKdI+="<br><a href='"+url+"' target=_blank "
ZKKdI+="style='color:#0000ff;' "
var kDRrD=this.ZKKdI_preview_obj.YjfoN
ZKKdI+="onmouseover=\"javascript:_onMouseOnPreviewComment('"+kDRrD+"',true)\" ";
ZKKdI+=">";
ZKKdI+="@ link"
ZKKdI+="</a><br><br>"
}
}
return ZKKdI;
}
this.vQNlf=function()
{
var GpxlB=sOsKl(hXGIb)
var OcZAJ=this.ZeieK();
this.hPJtO=OcZAJ.nav_has_horz_flow
if(this.hPJtO==false)
{
this.VTOIu.push("up")
this.VTOIu.push("down")
}
else
{
this.VTOIu.push("<")
this.VTOIu.push(">")
}
if(this.lJNRo())
{
this.VTOIu.push("+")
}
else
if(this.kZjTA())
{
this.VTOIu.push("-")
}
if(GpxlB.diaporama)
{
this.VTOIu.push("diapo")
}
if((OcZAJ.nav_but_orient==5)||(OcZAJ.nav_but_orient==3))
{
this.toCYq=false;
}
var canvas_bg=""
this.HNdEp=new WA_GraphicElement(this.xfREY()+"-graphic-selector-bg",50,OcZAJ.bg_shadow)
this.HNdEp.draw=function()
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,1,OcZAJ.bg_border_col,[OcZAJ.bg_col],OcZAJ.bg_shadow,0)
}
canvas_bg+=this.HNdEp.toHtml() 
this.RAgaQ=new WA_GraphicElement(this.xfREY()+"-graphic-toolbar-bg",50,OcZAJ.bg_shadow)
this.RAgaQ.toCYq=this.toCYq 
this.RAgaQ.draw=function()
{
var TAejg=false;
if(this.toCYq)
{
TAejg=cweFa(0,0,0,this.rect().height/2,OcZAJ.toolbar_bg_col1,OcZAJ.toolbar_bg_col2)
}
else
{
TAejg=cweFa(0,0,this.rect().width/2,0,OcZAJ.toolbar_bg_col1,OcZAJ.toolbar_bg_col2)
}
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,1,OcZAJ.toolbar_border_col,[TAejg],OcZAJ.toolbar_shadow,0)
}
canvas_bg+=this.RAgaQ.toHtml() 
this.pNeTT=new Array()
this.pNeTT_by_action=new Array()
for(var n=0;n<this.VTOIu.length;n++)
{
var n_action=this.VTOIu[n]
var hVRAc=new WA_GraphicElement(this.xfREY()+"-graphic-toolbar-but"+n,70,false)
hVRAc.n_action=n_action
hVRAc.WtCoi=this
hVRAc.fqkSN=false
hVRAc.rVFwx=this.rVFwx
hVRAc.SjlZg=OcZAJ.toolbar_but_col1
hVRAc.sPZnG=OcZAJ.toolbar_but_col2
hVRAc.draw=function()
{
var GYmEO_but=this.rVFwx
var bTIZN=this.n_action
if(bTIZN=="diapo")
{
if(this.WtCoi.EoinG())bTIZN="stop"
}
var fMVYQ=(this.fqkSN)?this.sPZnG:this.SjlZg
WA_toolbar_button(this.canvasId(),GYmEO_but,GYmEO_but,bTIZN,fMVYQ,true)
}
this.pNeTT.push(hVRAc)
var MQEjk=n_action
if(MQEjk=="up")MQEjk="<"
if(MQEjk=="down")MQEjk=">"
this.pNeTT_by_action[MQEjk]=hVRAc
canvas_bg+="<div id='"+hVRAc.divId()+"-href' onclick=\"javascript:WA_photoAlbumAction('"+this.hXGIb+"',"+n+")\" ";
canvas_bg+="style=\""
canvas_bg+="position:absolute;"
canvas_bg+="z-index:1000;"
canvas_bg+="cursor:pointer;"
canvas_bg+="\" "
canvas_bg+="onmouseover=\"";
canvas_bg+="WA_change_tool_button('"+this.hXGIb+"',"+n+",true)";
canvas_bg+="\" ";
canvas_bg+="onmouseout=\"";
canvas_bg+="WA_change_tool_button('"+this.hXGIb+"',"+n+",false)";
canvas_bg+="\" ";
canvas_bg+=">";
canvas_bg+="</div>";
canvas_bg+=hVRAc.toHtml()
}
canvas_bg+="<div id='"+this.TqQqW+"' style=\"";
canvas_bg+="position:absolute;z-index:100;";
canvas_bg+="overflow:hidden;";
canvas_bg+="\"></div>";
return canvas_bg;
}
this.rmYmK=function()
{
var OcZAJ=this.ZeieK();
var r1_rect=this.sxern_selector_slider;
var BDRBZ="" 
var min_size=Math.min(r1_rect.width,r1_rect.height)
var size_thumb=OcZAJ.th_size.size;
if(OcZAJ.th_size.percent) size_thumb=Math.round(size_thumb*(min_size)/100);
var image_spacing=Math.max(0,Math.round((OcZAJ.th_spacing/100)*size_thumb))
image_spacing=Math.round(image_spacing/2)*2
var nb_cols_real=r1_rect.width/(size_thumb+image_spacing);
var nb_cols=Math.floor(nb_cols_real);
this.qHxEk=Math.max(1,nb_cols);
var nb_rows_real=r1_rect.height/(size_thumb+image_spacing);
var nb_rows=Math.floor(nb_rows_real);
this.JToYm=Math.max(1,nb_rows);
var size_border_thumbnail=Math.max(1,Math.round((size_thumb)*0.03));
size_thumb-=2*size_border_thumbnail
var nb_images=this.TJVTC
var nb_pages=(nb_images/(this.qHxEk*this.JToYm));
if(nb_pages>Math.floor(nb_pages)) nb_pages=Math.floor(nb_pages)+1;
this.CWmKp=nb_pages
this.tFfdf_thumb=size_thumb;
this.luwHs=image_spacing;
this.tFfdf_border_thumbnail=size_border_thumbnail
var n_image=0;
var nb_item_x=this.qHxEk*nb_pages
var nb_item_y=this.JToYm;
var nb_item_per_page=this.qHxEk*this.JToYm 
if(this.hPJtO==false)
{
nb_item_x=this.qHxEk
nb_item_y=this.JToYm*nb_pages;
}
BDRBZ+="<table border=0 cellpadding=0 cellspacing=0 width=100% height=100% >";
BDRBZ+="<tr>"
BDRBZ+="<td "
if((this.hPJtO==false)||(this.CWmKp==1))
{
BDRBZ+="align=center"
}
BDRBZ+=">" 
BDRBZ+="<table border=0 cellpadding="+(image_spacing/2)+" cellspacing=0  width=10px>";
for(var MBiem=0;MBiem<nb_item_y;MBiem++)
{
BDRBZ+="<tr>" 
for(var iIRYP=0;iIRYP<nb_item_x;iIRYP++)
{
BDRBZ+="<td>"
var ind_img=0;
var nx_0=Math.floor(iIRYP/this.qHxEk)
var diff0=iIRYP-nx_0*this.qHxEk;
ind_img=nx_0*nb_item_per_page+(MBiem*this.qHxEk)+diff0
if(ind_img<nb_images)
{
var CorYX=this.QcToA.def[ind_img]
var CorYX_src=this.QcToA.src_folder+"/th_"+CorYX.th+"?v="+CorYX.mod_th
BDRBZ+="<a href=\"";
if(this.wjkAw())
{
BDRBZ+="javascript:WA_photoAlbumActionThumb('"+hXGIb+"',"+ind_img+")"
}
else
{
BDRBZ+="javascript:WA_photoAlbumIncrease('"+hXGIb+"',"+ind_img+")"
}
BDRBZ+="\" "
BDRBZ+="onmouseover=\"WA_photoAlbumThumbOver(this,'"+hXGIb+"',"+ind_img+")\" "
BDRBZ+="onmouseout=\"WA_photoAlbumThumbOut(this)\" "
BDRBZ+=">"
BDRBZ+="<img title='"+CorYX.tooltip+"' id='"+this.ecLIF(ind_img)+"' width="+size_thumb+"px height="+size_thumb+"px src='"+CorYX_src+"' ";
BDRBZ+="style='";
if(size_border_thumbnail>0)
{
BDRBZ+="border-color:"+OcZAJ.selector_img_border_color+";";
BDRBZ+="border-width:"+size_border_thumbnail+"px;border-style:solid;";
}
BDRBZ+="' ";
BDRBZ+=">"
BDRBZ+="</a>"
n_image++;
}
BDRBZ+="</td>"
}
if(this.toCYq)
if(this.CWmKp>1)
{
for(var iIRYP=0;iIRYP<this.qHxEk;iIRYP++)
{
var AwNie=size_thumb+2*size_border_thumbnail
BDRBZ+="<td>"
BDRBZ+="<div  style='width:"+(AwNie)+"px;height:"+AwNie+"px;'></div>";
BDRBZ+="</td>"
}
}
BDRBZ+="</tr>"
}
if(this.toCYq==false)
if(this.CWmKp>1)
{
for(var MBiem=0;MBiem<this.JToYm;MBiem++)
{
BDRBZ+="<tr>"
var AwNie=size_thumb+2*size_border_thumbnail
BDRBZ+="<td colspan="+this.qHxEk+">"
BDRBZ+="<div  style='width:"+(AwNie)+"px;height:"+AwNie+"px;'></div>";
BDRBZ+="</td>"
BDRBZ+="</tr>"
}
}
BDRBZ+="</table>" 
BDRBZ+="</td>"
BDRBZ+="</tr>"
BDRBZ+="</table>"
return BDRBZ;
}
this.ecLIF=function(kkSBo)
{
return this.xfREY()+"-th-img"+kkSBo
}
this.iKILp=function()
{
var OYBxA=this.oknUN();
if(OYBxA==false) return;
var CorYX=this.QcToA.def[0]
this.CorYX_preview_id="photo-album-preview-img-"+this.xfREY()
this.CorYX_preview_id_cache=this.CorYX_preview_id+"-cache"
this.YjIfp_img_preview_id="photo-album-preview-img-div"+this.xfREY()
this.RLcWP="photo-album-preview-zone"+this.xfREY()
var BDRBZ=""
BDRBZ+="<div  id='"+this.RLcWP+"' style=\"";
BDRBZ+="position:absolute;z-index:500;";
BDRBZ+="\" ";
BDRBZ+="onclick=\"WA_clickAlbumPreview('"+this.hXGIb+"')\" ";
BDRBZ+="onmousemove=\"javascript:WA_mousemoveAlbumPreview(event,'"+this.hXGIb+"')\" ";
BDRBZ+="onmouseout=\"javascript:WA_mouseoutAlbumPreview(event,'"+this.hXGIb+"')\" ";
BDRBZ+=">";
BDRBZ+="<div style='position:absolute;z-index:450;left:0px;top:0px;";
BDRBZ+="width:100%;height:100%;background-color:#000000;";
BDRBZ+="filter:alpha(opacity=0);-moz-opacity:0;opacity:0;' "
BDRBZ+="></div>"
this.ZKKdI_preview_obj=new IqaYm(this.hXGIb,this.xfREY());
BDRBZ+=this.ZKKdI_preview_obj.toHtml() 
this.TPqdl=new WA_GraphicElement(this.xfREY()+"-graphic-img-bg",50,OYBxA.shadow)
this.TPqdl.draw=function()
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,0,'',[OYBxA.border_col],this.shadow(),0,this.opacity())
}
BDRBZ+=this.TPqdl.toHtml() 
BDRBZ+="<div id='"+this.YjIfp_img_preview_id+"' style=\"";
BDRBZ+="position:absolute;z-index:100;";
BDRBZ+="left:0px;";
BDRBZ+="top:0px;";
BDRBZ+="\" ";
BDRBZ+=">";
BDRBZ+="<img  id='"+this.CorYX_preview_id+"' border=0 >";
if(isMSIE())
{
BDRBZ+="<img style='position:absolute;left:0px;top:0px;visibility:hidden;' id='"+this.CorYX_preview_id_cache+"'>"
}
else
{
BDRBZ+="<img style='position:absolute;left:0px;top:0px;display:none;' id='"+this.CorYX_preview_id_cache+"'>"
}
BDRBZ+="</div>";
this.MZdXl=new WA_GraphicElement(this.xfREY()+"-graphic-arrow0",300,true)
this.MZdXl.setImage("intuisphere.png",new Rect(97,49,46,47))
this.MZdXl.draw=function()
{
var dNVjm=Math.round(this.rect().width*0.8);
var uAOQk=Math.round(this.rect().height*0.8);
WA_drawImage(this.canvasId(),this.img_src(),6+(this.rect().width-dNVjm)/2,6+(this.rect().height-uAOQk)/2,dNVjm,uAOQk,this.img_clip(),this.opacity(),false)
}
this.QZTkq=new WA_GraphicElement(this.xfREY()+"-graphic-arrow1",300,true)
this.QZTkq.setImage("intuisphere.png",new Rect(2,49,46,47))
this.QZTkq.draw=function()
{
var dNVjm=Math.round(this.rect().width*0.8);
var uAOQk=Math.round(this.rect().height*0.8);
WA_drawImage(this.canvasId(),this.img_src(),6+(this.rect().width-dNVjm)/2,6+(this.rect().height-uAOQk)/2,dNVjm,uAOQk,this.img_clip(),this.opacity(),false)
}
BDRBZ+=this.MZdXl.toHtml()
BDRBZ+=this.QZTkq.toHtml() 
this.mnXuF=new WA_GraphicElement(this.xfREY()+"-graphic-cursor-zoom",400,false)
this.mnXuF.setSize(30,30)
this.mnXuF.setImage("intuisphere.png",new Rect(0,0,48,48))
this.mnXuF.draw=function()
{
WA_drawImage(this.canvasId(),this.img_src(),0,0,this.rect().width,this.rect().height,this.img_clip())
}
BDRBZ+=this.mnXuF.toHtml() 
BDRBZ+="</div>";
return BDRBZ;
}
this.ZgHwQ=function()
{
if(this.LGpBq())
{
this.HNdEp.registerDynamicCanvas();
this.RAgaQ.registerDynamicCanvas();
for(var n=0;n<this.pNeTT.length;n++)
{
var hVRAc=this.pNeTT[n]
hVRAc.registerDynamicCanvas();
}
}
if(this.wjkAw())
{
this.ZKKdI_preview_obj.ZgHwQ()
this.TPqdl.registerDynamicCanvas();
this.MZdXl.registerDynamicCanvas();
this.QZTkq.registerDynamicCanvas();
this.mnXuF.registerDynamicCanvas();
this.mnXuF.setVisible(false)
}
if(this.ulbhh)
this.ulbhh.registerDynamicCanvas();
this.tSIBe()
}
this.EoinG=function()
{
return(this.YwAaH)?true:false;
}
this.oPTWp=function()
{
return(this.cDPSC>0)
}
this.YGkli=function()
{
return(this.cDPSC<this.CWmKp-1)
}
this.tiZdQ=function()
{
return(this.QOjeU>0);
}
this.eoQPv=function()
{
return(this.QOjeU<this.QcToA.def.length-1);
}
this.OmVJB=function()
{
if(this.LGpBq())
{
var OcZAJ=this.ZeieK() 
var dNVjm=this.sxern_container.width
var uAOQk=this.sxern_container.height
var r0=OcZAJ.rect
var r0_rect=doaIW(r0,dNVjm,uAOQk)
r0_rect.x+=this.sxern_container.x
r0_rect.y+=this.sxern_container.y
var r1_rect=r0_rect.clone() 
var ISnKr=r0_rect.clone()
var IfgGL=this.VTOIu.length 
var cQrVi=5
var GYmEO_size_min=this.rVFwx+cQrVi*2
var GYmEO_size_max=(IfgGL*this.rVFwx)
if(OcZAJ.nav_but_orient==1)
{
r1_rect.y+=GYmEO_size_min;
r1_rect.height-=GYmEO_size_min;
ISnKr.x=ISnKr.x+(ISnKr.width-GYmEO_size_max)/2;
ISnKr.width=GYmEO_size_max
ISnKr.y+=cQrVi;
ISnKr.height=this.rVFwx;
}
if(OcZAJ.nav_but_orient==5)
{
r1_rect.width-=GYmEO_size_min;
ISnKr.y=ISnKr.y+(ISnKr.height-GYmEO_size_max)/2;
ISnKr.height=GYmEO_size_max
ISnKr.x+=r1_rect.width+cQrVi;
ISnKr.width=this.rVFwx;
}
if(OcZAJ.nav_but_orient==7)
{
r1_rect.height-=GYmEO_size_min;
ISnKr.x=ISnKr.x+(ISnKr.width-GYmEO_size_max)/2;
ISnKr.width=GYmEO_size_max
ISnKr.y+=r1_rect.height+cQrVi;
ISnKr.height=this.rVFwx;
}
if(OcZAJ.nav_but_orient==3)
{
r1_rect.width-=GYmEO_size_min;
r1_rect.x+=GYmEO_size_min;
ISnKr.y=ISnKr.y+(ISnKr.height-GYmEO_size_max)/2;
ISnKr.height=GYmEO_size_max
ISnKr.x+=cQrVi;
ISnKr.width=this.rVFwx;
}
this.sxern_selector_slider=r1_rect
this.sxern_selector_toolbar=ISnKr 
var scAjB=this.sxern_selector_slider;
this.HNdEp.setRect(scAjB.x,scAjB.y,scAjB.width,scAjB.height)
html_SetRect(this.TqQqW,r1_rect) 
var DWsYG=this.sxern_selector_toolbar
this.RAgaQ.setRect(DWsYG.x,DWsYG.y,DWsYG.width,DWsYG.height)
var lx_button=this.rVFwx
var ly_button=lx_button
var iIRYP_but0=ISnKr.x
var MBiem_but0=ISnKr.y
for(var n=0;n<this.pNeTT.length;n++)
{
var hVRAc=this.pNeTT[n]
var iIRYP_but=iIRYP_but0
var tSVkv=MBiem_but0
if(this.toCYq)
{
iIRYP_but+=n*lx_button;
}
else
{
tSVkv+=n*ly_button;
}
hVRAc.setRect(iIRYP_but,tSVkv,lx_button,ly_button)
html_SetGeometry(hVRAc.divId()+"-href",iIRYP_but,tSVkv,lx_button,ly_button)
}
var JJimY=document.getElementById(this.TqQqW)
if(JJimY)
{
JJimY.innerHTML=this.rmYmK();
}
this.fuBCI()
}
}
this.lJNRo=function()
{
if((this.xJaMf==1)&&(this.LGpBq()==true)) return true;
if((this.xJaMf==0)&&(this.nsamJ.has_full_page_config)) return true;
return false;
}
this.kZjTA=function()
{
if(this.xJaMf==1) return true;
if(this.xJaMf==2) return true;
return false;
}
this.VejZU=function()
{
return this.jQgOl;
}
this.ZeieK=function()
{
return this.SOaBL;
}
this.oknUN=function()
{
return this.bPigi;
}
this.LGpBq=function()
{
if(this.ZeieK()) return true;
return false;
}
this.wjkAw=function()
{
if(this.oknUN()) return true;
return false;
}
this.fuBCI=function()
{
if(this.LGpBq()==false)return
var TBJnq=this.pNeTT_by_action["<"]
TBJnq.setVisible(this.oPTWp())
var MVWtJ=this.pNeTT_by_action[">"]
MVWtJ.setVisible(this.YGkli())
}
this.NhuOF=function()
{
var OYBxA=this.oknUN();
var dNVjm=this.sxern_container.width
var uAOQk=this.sxern_container.height
var scAjB=OYBxA.rect
var ZiYiw=doaIW(scAjB,dNVjm,uAOQk)
if(this.xJaMf==2)
{
ZiYiw=new Rect(0,0,dNVjm,uAOQk)
}
ZiYiw.x+=this.sxern_container.x
ZiYiw.y+=this.sxern_container.y 


if(this.xJaMf!=0)
if((this.xJaMf==2)||((scAjB.x=="0%")&&(scAjB.y=="0%")&&(scAjB.lx=="100%")&&(scAjB.ly=="100%")))
{
var dec=8;
ZiYiw.x+=dec
ZiYiw.y+=dec
ZiYiw.width-=2*dec
ZiYiw.height-=2*dec 
}
var gMnbm=ZiYiw.clone()
this.sxern_preview=gMnbm 
html_SetRect(this.RLcWP,this.sxern_preview)
this.Efvkb()
this.sNkKr()
}
this.qQsjK=function()
{
if(this.EoinG()) return;
if(this.wjkAw()==false)return;
var jswCl_transition=Tween.regularEaseOut
var fWnvR=0.3
if((!this.VJYCR)||(this.VJYCR.isRunning()==false))
{
if(this.VJYCR)this.VJYCR.stop()
this.VJYCR=new TTdSL(this.MZdXl,jswCl_transition,0,100,fWnvR)
this.VJYCR.onMotionFinished=this.unaNp
this.VJYCR.m_count=0
this.VJYCR.start()
}
if((!this.ilQlN)||(this.ilQlN.isRunning()==false))
{
if(this.ilQlN)this.ilQlN.stop()
this.ilQlN=new TTdSL(this.QZTkq,jswCl_transition,0,100,fWnvR)
this.ilQlN.onMotionFinished=this.unaNp
this.ilQlN.m_count=0
this.ilQlN.start()
}
}
this.unaNp=function()
{
if(this.m_count>=3)
{
return;
}
this.yoyo()
this.m_count++}
this.Efvkb=function()
{
if(this.SGwOb()==false)return;
if(this.wjkAw()==false)return
if(isMobileBrowser())return
var oCpNI=30
var WtCoi=this;
var hxuqi=WtCoi.gjJNX
var n_pos=WtCoi.SNAit;
if((n_pos!=-1)&&(WtCoi.MERNh==false)&&(WtCoi.uTxHx!=true))
{
var bDQmX=true;
if(n_pos==0)
{
if(WtCoi.tiZdQ()==false)bDQmX=false;
WtCoi.mnXuF.setImage("intuisphere.png",new Rect(97,49,46,47))
}
else
if(n_pos==1)
{
if(WtCoi.kZjTA())
{
WtCoi.mnXuF.setImage("intuisphere.png",new Rect(48,0,48,48))
}
else
if(WtCoi.lJNRo())
{
WtCoi.mnXuF.setImage("intuisphere.png",new Rect(0,0,48,48))
}
else
{
bDQmX=false;
}
}
else
if(n_pos==2)
{
if(WtCoi.eoQPv()==false)bDQmX=false;
WtCoi.mnXuF.setImage("intuisphere.png",new Rect(0,49,46,47))
}
WtCoi.mnXuF.setPosition(hxuqi.x,hxuqi.y,oCpNI,oCpNI);
WtCoi.mnXuF.setVisible(bDQmX)
}
else
{
WtCoi.mnXuF.setVisible(false)
}
}
this.sNkKr=function()
{
if(this.wjkAw()==false)return
if((this.EoinG()==false)&&(this.rIDbx.width>0))
{
var WxJaP=40
var x_arrow0=(this.sxern_preview.width-this.rIDbx.width)/2
var x_arrow1=(x_arrow0+this.rIDbx.width-WxJaP)
var y_arrow0=(this.sxern_preview.height-this.rIDbx.height)/2+(this.rIDbx.height-WxJaP)/2 
this.MZdXl.setRect(x_arrow0,y_arrow0,WxJaP,WxJaP)
this.QZTkq.setRect(x_arrow1,y_arrow0,WxJaP,WxJaP)
this.MZdXl.setVisible(this.tiZdQ())
this.QZTkq.setVisible(this.eoQPv())
}
else
{
this.MZdXl.setVisible(false)
this.QZTkq.setVisible(false)
}
this.MZdXl.setOpacity(0)
this.QZTkq.setOpacity(0)
}
this.tSIBe=function()
{
if(this.wjkAw())
{
this.NhuOF()
var kkSBo=this.QOjeU 
WA_photoAlbumActionThumb(this.hXGIb,kkSBo,true)
this.NhuOF()
}
this.OmVJB()
if(this.ulbhh)
{
this.ulbhh.setRect(0,0,this.sxern_container.width,this.sxern_container.height);
}
if(this.YIngu)
{
html_SetGeometry(this.YIngu,0,0,this.sxern_container.width,this.sxern_container.height)
}
}
this.EZPsa=function()
{
if(this.wjkAw())
{
WA_photoAlbumActionThumb(this.hXGIb,this.QOjeU,true)
}
}
this.dafGt=function()
{
if(this.wjkAw())
{
WA_photoAlbumActionThumb(this.hXGIb,this.QOjeU,false)
}
}
this.uYAGC=function(TTVQZ)
{
Kxfpw(this.xJaMf>0)
var BDRBZ=""
if(this.LGpBq())
{
BDRBZ+=this.vQNlf();
}
if(this.wjkAw())
{
BDRBZ+=this.iKILp();
};
if((this.xJaMf==1)||(this.xJaMf==2))
{
if(this.nsamJ.bg_fullpage_img.length>0)
{
this.YIngu=this.xfREY()+"-graphic-fullpage-bg";
BDRBZ+="<div id='"+this.YIngu+"' style=\"";
BDRBZ+="position:absolute;z-index:0;";
if(this.nsamJ.bg_fullpage_img_type==0)
{
BDRBZ+="background-image:url('"+this.nsamJ.bg_fullpage_img+"');";
BDRBZ+="background-repeat: repeat;";
}
BDRBZ+="\" ";
BDRBZ+=">";
if(this.nsamJ.bg_fullpage_img_type==1)
{
BDRBZ+="<img src='"+this.nsamJ.bg_fullpage_img+"' width=100% height=100% border=0 >";
}
BDRBZ+="</div>";
}
else
{
var xJUNw=this.nsamJ.bg_fullpage_grad
this.ulbhh=new WA_GraphicElement(this.xfREY()+"-graphic-global-bg",0,false)
this.ulbhh.xJUNw=xJUNw
this.ulbhh.draw=function()
{
var xJUNw=this.xJUNw
var xJUNw_bg=false
if(xJUNw.has_gradient)
{
var dNVjm=this.rect().width
var uAOQk=this.rect().height
var xg1=xJUNw.pt1.x*dNVjm/100
var yg1=xJUNw.pt1.y*uAOQk/100
var xg2=xJUNw.pt2.x*dNVjm/100
var yg2=xJUNw.pt2.y*uAOQk/100
xJUNw_bg=cweFa(xg1,yg1,xg2,yg2,xJUNw.col1,xJUNw.col2)
}
else
{
xJUNw_bg=xJUNw.col1
}
WA_bg(this.canvasId(),this.rect().width,this.rect().height,0,0,'',[xJUNw_bg],false,0,1)
}
BDRBZ+=this.ulbhh.toHtml();
}
}
var WaUSo=document.getElementById(TTVQZ);
WaUSo.innerHTML=BDRBZ
WaUSo.style.display="block" 
{
WA_registerAlbum(hXGIb)
}
if(this.VejZU()==false)
{
this.qQsjK()
}
}
this.UbhJS=function()
{
var kQnGH="wa-dialog-container"
if(this.lJNRo()==false) return;
if(this.xJaMf==0)
if(this.nsamJ.plugin_fullscreen_url.length>0)
{
window.open(this.nsamJ.plugin_fullscreen_url)
return;
}
this.SNAit=-1;
this.Efvkb()
var QcToA=this.QcToA
var sxern=new Rect(0,0,getWindowSize().width,getWindowSize().height)
var WtCoi=new GODBt(hXGIb,QcToA)
WtCoi.QOjeU=this.QOjeU
if(this.xJaMf==0)
{
WtCoi.xJaMf=1
}
else
if(this.xJaMf==1)
{
WtCoi.xJaMf=2
}
QcToA.album_object=WtCoi;
WtCoi.sxern_container.copy(sxern)
WtCoi.SOaBL=QcToA.layout.selector_fullpage
if(WtCoi.xJaMf==2)
{
WtCoi.SOaBL=false
}
WtCoi.bPigi=QcToA.layout.preview_fullpage
wa_global_photo_album.fullpage_object=WtCoi
WtCoi.uYAGC(kQnGH)
return WtCoi
}
this.IHWSq=function()
{
if(this.kZjTA()==false) return;
this.coThl()
var kQnGH="wa-dialog-container"
var QcToA=this.QcToA
QcToA.album_object=QcToA.YEJNS;
wa_global_photo_album.fullpage_object=false 
if(this.xJaMf==1)
{
Kxfpw(false)
var WaUSo=document.getElementById(kQnGH);
WaUSo.innerHTML=""
WaUSo.style.display="none" 

WA_exec_delayedCallback(this,this.dafGt)
return QcToA.YEJNS
}
if(this.xJaMf==2)
{
QcToA.album_object.QOjeU=this.QOjeU
return QcToA.album_object.UbhJS()
}
}
this.coThl=function()
{
if(this.EoinG())
{
this.jQgOl=false
clearTimeout(this.YwAaH)
this.YwAaH=false;
}
}
this.onFullScreenKeydown=function(k)
{
if(k==27)
{
this.IHWSq()
return false;
}
uqNBQ(this.hXGIb,[k])
return false;
}
}
function vkgAk(e)
{
var delta=0;
if(!e) e=window.event;
if(e.wheelDelta){
delta=e.wheelDelta/120;
if(window.opera) delta=-delta;
}else if(e.detail){
delta=-e.detail/3;
}
if(navigator.userAgent.match(/opera/i)) delta=-delta;
var b_default=true;
if(wa_global_photo_album.fullpage_object)
{
var WtCoi=wa_global_photo_album.fullpage_object
var hXGIb=WtCoi.hXGIb
var RlXIs=WtCoi.ZKKdI_preview_obj
if(RlXIs.tbiXf)
{
var jTmpf=html_getLayer(RlXIs.OtHCa)
if(jTmpf)
{
var scrollVal=-(3*delta)
if(isMSIE())scrollVal*=3
jTmpf.scrollTop+=scrollVal
}
}
else
{
if(delta>0) oAVCN(hXGIb);
if(delta<0) mNAhY(hXGIb);
}
}
if(b_default)
if(e.preventDefault)
e.preventDefault();
e.returnValue=!b_default;
}
function Kxfpw(xRUPg)
{
if(xRUPg==false)
{
var YjIfp=window;
if(YjIfp.removeEventListener)
YjIfp.removeEventListener('DOMMouseScroll',vkgAk,false);
YjIfp.onmousewheel=document.onmousewheel=null;
}
else
{
var YjIfp=window;
if(YjIfp.addEventListener)
YjIfp.addEventListener('DOMMouseScroll',vkgAk,false);
YjIfp.onmousewheel=document.onmousewheel=vkgAk;
}
}
function cweFa(hPpgb,omAiC,mhhth,JBYcF,XwlcF,vvAuJ)
{
var lRwKP=""
lRwKP+="(";
lRwKP+=hPpgb+";"+omAiC+";"+mhhth+";"+JBYcF+";";
lRwKP+=XwlcF+";";
lRwKP+=vvAuJ;
lRwKP+=")";
return lRwKP;
}
function WA_photoAlbumAction(hXGIb,kkSBo)
{
var WtCoi=VOIkZ(hXGIb)
var hVRAc=WtCoi.pNeTT[kkSBo]
var n_action=hVRAc.n_action
if((n_action=="<")||(n_action=="up"))
{
WtCoi.cDPSC=Math.max(0,WtCoi.cDPSC-1)
JXgOV(hXGIb)
}
if((n_action==">")||(n_action=="down"))
{
WtCoi.cDPSC=Math.min(WtCoi.CWmKp-1,WtCoi.cDPSC+1)
JXgOV(hXGIb)
}
if(n_action=="diapo")
{
bPCEb(hXGIb)
}
if(n_action=="+")
{
WtCoi.UbhJS()
}
}
function WA_photoAlbumIncrease(hXGIb,kkSBo)
{
var WtCoi=VOIkZ(hXGIb)
WtCoi.QOjeU=kkSBo
WtCoi.UbhJS()
}
function bPCEb(hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi.EoinG()==false)
{
var iCwxY=0;
var VjTRW=WtCoi;
while(VjTRW.lJNRo())
{
VjTRW=VjTRW.UbhJS()
iCwxY++}
if(iCwxY>0)
{
VjTRW.EtOLn_decrease_view_when_diaporama_stop=iCwxY;
WA_goNextDiaporama(hXGIb)
VjTRW.sNkKr()
return;
}
}
if(WtCoi.EoinG())
{
hsOHx(hXGIb)
}
else
{
WA_goNextDiaporama(hXGIb)
}
if(WtCoi.LGpBq())
{
var hVRAc=WtCoi.pNeTT_by_action["diapo"]
hVRAc.draw()
}
}
function hsOHx(hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi.EoinG())
{
WtCoi.coThl()
if(WtCoi.EtOLn_decrease_view_when_diaporama_stop)
{
var VjTRW=WtCoi;
for(var n=0;n<WtCoi.EtOLn_decrease_view_when_diaporama_stop;n++)
{
VjTRW=VjTRW.IHWSq() 
}
return;
}
}
if(WtCoi.LGpBq())
{
var hVRAc=WtCoi.pNeTT_by_action["diapo"]
hVRAc.draw()
}
}
function WA_goNextDiaporama(hXGIb)
{
var GpxlB=sOsKl(hXGIb)
var twOHD=FjbMi(hXGIb)
var WtCoi=VOIkZ(hXGIb)
var kkSBo=(WtCoi.QOjeU+1)%twOHD.length;
if(GpxlB.diaporama.random)
{
kkSBo=Math.round((twOHD.length-1)*Math.random());
}
WA_photoAlbumActionThumb(hXGIb,kkSBo)
WtCoi.YwAaH=wa_timeout("WA_goNextDiaporama('"+hXGIb+"')",GpxlB.diaporama.time*1000)
}
function LaAPf(hXGIb,kkSBo)
{
var WtCoi=VOIkZ(hXGIb)
if(kkSBo<0)
{
WtCoi.qQsjK()
return false;
}
if(kkSBo>WtCoi.TJVTC-1)
{
WtCoi.qQsjK()
return false;
}
WA_photoAlbumActionThumb(hXGIb,kkSBo)
return true;
}
function mNAhY(hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi.EoinG()) return false;
return LaAPf(hXGIb,WtCoi.QOjeU+1)
}
function oAVCN(hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi.EoinG()) return false;
return LaAPf(hXGIb,WtCoi.QOjeU-1)
}
function WA_clickAlbumPreview(hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
if(WtCoi.VejZU()) return;
if(WtCoi.EoinG())
{
hsOHx(hXGIb)
}
var kkSBo_pos=WtCoi.SNAit
if(kkSBo_pos!=-1)
{
if(kkSBo_pos==2)mNAhY(hXGIb)
if(kkSBo_pos==1)
{
if(WtCoi.kZjTA())
{
WtCoi.IHWSq()
}
else
if(WtCoi.lJNRo())
{
WtCoi.UbhJS()
}
}
if(kkSBo_pos==0)oAVCN(hXGIb)
}
}
function WA_mouseoutAlbumPreview(e,hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
WtCoi.mnXuF.setVisible(false)
WtCoi.SNAit=-1;
}
function WA_mousemoveAlbumPreview(e,hXGIb)
{
var posx=0;
var posy=0;
if(!e)  e=window.event;
if(e.pageX||e.pageY){
posx=e.pageX;
posy=e.pageY;
}
else if(e.clientX||e.clientY){
posx=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
posy=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;
}
var WtCoi=VOIkZ(hXGIb)
var YjIfp_bg=document.getElementById(WtCoi.mnXuF.divId())
var pt=html_findPos(YjIfp_bg.offsetParent)
var x=posx-pt.x+1;
var y=posy-pt.y+1;
var n_pos=-1
var GhtVe=false;
var gUIaW=0;
var tSOOU=30;
if(WtCoi.uTxHx!=true)
if(WtCoi.EoinG()==false)
{
if((x>0)&&(x<WtCoi.sxern_preview.width))
if((y>0)&&(y<WtCoi.sxern_preview.height))
{
n_pos=1;
if(x<WtCoi.sxern_preview.width*0.3)n_pos=0;
if(x>WtCoi.sxern_preview.width*(1-0.3))n_pos=2;
}
if((x<gUIaW)||(x>WtCoi.sxern_preview.width-gUIaW-tSOOU))GhtVe=true;
if((y<gUIaW)||(y>WtCoi.sxern_preview.height-gUIaW-tSOOU))GhtVe=true;
}
WtCoi.gjJNX=new Point(x,y);
WtCoi.SNAit=n_pos;
WtCoi.MERNh=GhtVe;
WtCoi.Efvkb();
}
function JXgOV(hXGIb)
{
var WtCoi=VOIkZ(hXGIb)
var uGsij=document.getElementById(WtCoi.TqQqW)
if(!uGsij)return;
var kwZjx_name;
var kLKjA=0;
var size_thumb=WtCoi.tFfdf_thumb;
var luwHs=WtCoi.luwHs;
var LHXDm=0;
var DLToK=(size_thumb+2*WtCoi.tFfdf_border_thumbnail+luwHs);
var GEkCJ=WtCoi.qHxEk*WtCoi.JToYm;
if(WtCoi.hPJtO)
{
LHXDm=WtCoi.cDPSC*WtCoi.qHxEk*DLToK;
}
else
{
LHXDm=WtCoi.cDPSC*WtCoi.JToYm*DLToK;
}
if(WtCoi.hPJtO)
{
kwZjx_name="scrollLeft";
kLKjA=uGsij.scrollLeft;
}
else
{
kwZjx_name="scrollTop";
kLKjA=uGsij.scrollTop;
}
if(kLKjA==LHXDm)
{
return;
}
if(WtCoi.m_tween_slider)
{
WtCoi.m_tween_slider.stop();
}
var fWnvR=0.7;
WtCoi.m_tween_slider=new Tween(uGsij,kwZjx_name,Tween.strongEaseOut,kLKjA,LHXDm,fWnvR);
WtCoi.m_tween_slider.onMotionFinished=wworL;
WtCoi.m_tween_slider.WtCoi=WtCoi;
WtCoi.m_tween_slider.start();
}
function wworL()
{
var WtCoi=this.WtCoi;
WtCoi.fuBCI();
}
function cAFcB(hXGIb)
{
return wa_global_photo_album[hXGIb];
}
function VOIkZ(hXGIb)
{
return wa_global_photo_album[hXGIb].album_object;
}
function FjbMi(hXGIb)
{
return wa_global_photo_album[hXGIb].def;
}
function oZvec(hXGIb)
{
return wa_global_photo_album[hXGIb].src_folder;
}
function sOsKl(hXGIb)
{
return wa_global_photo_album[hXGIb].layout;
}
function CJKox(FIglg)
{
var hXGIb=FIglg[0];
WA_addHandler(hXGIb,"mousewheel",mfLHO);
WA_addHandler(hXGIb,"keydown",uqNBQ);
var kQnGH="photo-album-main-"+hXGIb;
var QcToA=cAFcB(hXGIb);
var sxern=new Rect();
sxern.copy(QcToA.size_container);
var WtCoi=new GODBt(hXGIb,QcToA);
QcToA.album_object=WtCoi;
QcToA.YEJNS=WtCoi;
WtCoi.sxern_container.copy(sxern);
WtCoi.SOaBL=QcToA.layout.selector;
WtCoi.bPigi=QcToA.layout.preview;
WtCoi.uYAGC(kQnGH);

var WtCoi=VOIkZ(hXGIb);
var BgiCJ=document.wa_global_query_info;
if(BgiCJ)
{
if(hXGIb==BgiCJ.m_unid)
{
WtCoi.QOjeU=BgiCJ.m_index_item;
WtCoi.UbhJS();
return;
}
}
if(WtCoi.VejZU())
{
bPCEb(hXGIb);
return;
}
}
function WA_registerAlbum(hXGIb)
{
VOIkZ(hXGIb).ZgHwQ();
}
function uqNBQ(hXGIb,FIglg)
{
var kUkNK=FIglg[0]
if(kUkNK==37) return oAVCN(hXGIb);
if(kUkNK==39) return mNAhY(hXGIb);
return true;
}
function mfLHO(hXGIb,cULxf)
{
var YWiSs=cULxf[0];
var WtCoi=VOIkZ(hXGIb);
if(WtCoi.ZKKdI_preview_obj)
{
var RlXIs=WtCoi.ZKKdI_preview_obj;
if(RlXIs.tbiXf)
{
var jTmpf=html_getLayer(RlXIs.OtHCa);
jTmpf.scrollTop+=-(3*YWiSs);
return true;
}
}
if(YWiSs>0)return oAVCN(hXGIb);
if(YWiSs<0)return mNAhY(hXGIb);
return true;
}
function WA_PhotoAlbum_resizeUI()
{
if(wa_global_photo_album.fullpage_object)
{
var WtCoi=wa_global_photo_album.fullpage_object;
if(wa_global_photo_album.ZgXsK)
{
clearTimeout(wa_global_photo_album.ZgXsK);;
}
var sxern=new Rect(0,0,getWindowSize().width,getWindowSize().height);
WtCoi.sxern_container.copy(sxern);
WtCoi.tSIBe();
wa_global_photo_album.ZgXsK=wa_timeout("WA_PhotoAlbum_delayed_resizeUI()",1000);
}
}
function WA_PhotoAlbum_delayed_resizeUI()
{
if(wa_global_photo_album.fullpage_object)
{
wa_global_photo_album.ZgXsK=false;
var WtCoi=wa_global_photo_album.fullpage_object;
WtCoi.EZPsa();
}
}
function WA_loadPhotoAlbums()
{
for(var kUkNK in wa_global_photo_album)
{
var QcToA=wa_global_photo_album[kUkNK]
var NCFRk=Translator.m_lang_for_filename
if(NCFRk.length>0)NCFRk="_"+NCFRk;
WA_loadScript(QcToA.src_folder+'/photo-album-definition'+NCFRk+'.js?v='+QcToA.id_modif,CJKox,[kUkNK]);
}
}

-->
