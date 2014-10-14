<!--

function Delegate(){}
Delegate.create=function(o,f){
var WGOJK=new Array();
var GYmEO=arguments.length;
for(var i=2;i<GYmEO;i++) WGOJK[i-2]=arguments[i];
return function(){
var QhRec=[].concat(arguments,WGOJK);
f.apply(o,QhRec);
}
}
Tween=function(obj,prop,func,begin,finish,duration,suffixe){
this.init(obj,prop,func,begin,finish,duration,suffixe)
}
var t=Tween.prototype;
t.obj=new Object();
t.prop='';
t.func=function(t,b,c,d){return c*t/d+b;};
t.begin=0;
t.change=0;
t.prevTime=0;
t.prevPos=0;
t.looping=false;
t.fWnvR=0;
t.wveTv=0;
t.jxkbQ=0;
t.fRiQV=0;
t.HHewY=0;
t.BhSgb=0;
t.QQXWa=false;
t.name='';
t.suffixe='';
t.RBddO=new Array();
t.setTime=function(t){
this.prevTime=this.wveTv;
if(t>this.getDuration()){
if(this.looping){
this.rewind(t-this.fWnvR);
this.update();
this.RsMRl('onMotionLooped',{target:this,type:'onMotionLooped'});
}else{
this.wveTv=this.fWnvR;
this.update();
this.stop();
this.RsMRl('onMotionFinished',{target:this,type:'onMotionFinished'});
}
}else if(t<0){
this.rewind();
this.update();
}else{
this.wveTv=t;
this.update();
}
}
t.isRunning=function(){
return this.QQXWa;
}
t.getTime=function(){
return this.wveTv;
}
t.setDuration=function(d){
this.fWnvR=(d==null||d<=0)?100000:d;
}
t.getDuration=function(){
return this.fWnvR;
}
t.setPosition=function(p){
this.prevPos=this.jxkbQ;
var a=this.suffixe!=''?this.suffixe:'';
this.obj[this.prop]=Math.round(p)+a;
this.jxkbQ=p;
this.RsMRl('onMotionChanged',{target:this,type:'onMotionChanged'});
}
t.getPosition=function(t){
if(t==undefined) t=this.wveTv;
return this.func(t,this.begin,this.change,this.fWnvR);
};
t.setFinish=function(f){
this.change=f-this.begin;
};
t.geFinish=function(){
return this.begin+this.change;
};
t.init=function(obj,prop,func,begin,finish,duration,suffixe){
if(!arguments.length) return;
this.RBddO=new Array();
this.addListener(this);
if(suffixe) this.suffixe=suffixe;
this.obj=obj;
this.prop=prop;
this.begin=begin;
this.jxkbQ=begin;
this.setDuration(duration);
if(func!=null&&func!=''){
this.func=func;
}
this.setFinish(finish);
}
t.start=function(){
this.rewind();
this.startEnterFrame();
this.RsMRl('onMotionStarted',{target:this,type:'onMotionStarted'});
}
t.rewind=function(t){
this.stop();
this.wveTv=(t==undefined)?0:t;
this.fixTime();
this.update();
}
t.fforward=function(){
this.wveTv=this.fWnvR;
this.fixTime();
this.update();
}
t.update=function(){
this.setPosition(this.getPosition(this.wveTv));
}
t.startEnterFrame=function(){
this.stopEnterFrame();
this.QQXWa=true;
this.onEnterFrame();
}
t.onEnterFrame=function(){
if(this.QQXWa){
this.nextFrame();
wa_timeout(Delegate.create(this,this.onEnterFrame),0);
}
}
t.nextFrame=function(){
this.setTime((this.getTimer()-this.HHewY)/1000);
}
t.stop=function(){
this.stopEnterFrame();
this.RsMRl('onMotionStopped',{target:this,type:'onMotionStopped'});
}
t.stopEnterFrame=function(){
this.QQXWa=false;
}
t.continueTo=function(finish,duration){
this.begin=this.jxkbQ;
this.setFinish(finish);
if(this.fWnvR!=undefined)
this.setDuration(duration);
this.start();
}
t.resume=function(){
this.fixTime();
this.startEnterFrame();
this.RsMRl('onMotionResumed',{target:this,type:'onMotionResumed'});
}
t.yoyo=function(){
this.continueTo(this.begin,this.wveTv);
}
t.addListener=function(o){
this.removeListener(o);
return this.RBddO.push(o);
}
t.removeListener=function(o){
var a=this.RBddO;
var i=a.length;
while(i--){
if(a[i]==o){
a.splice(i,1);
return true;
}
}
return false;
}
t.RsMRl=function(){
var arr=new Array();
for(var i=0;i<arguments.length;i++){
arr.push(arguments[i])
}
var e=arr.shift();
var a=this.RBddO;
var l=a.length;
for(var i=0;i<l;i++){
if(a[i][e])
a[i][e].apply(a[i],arr);
}
}
t.fixTime=function(){
this.HHewY=this.getTimer()-this.wveTv*1000;
}
t.getTimer=function(){
return new Date().getTime()-this.wveTv;
}
Tween.backEaseIn=function(t,b,c,d,a,p){
if(s==undefined) var s=1.70158;
return c*(t/=d)*t*((s+1)*t-s)+b;
}
Tween.backEaseOut=function(t,b,c,d,a,p){
if(s==undefined) var s=1.70158;
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
}
Tween.backEaseInOut=function(t,b,c,d,a,p){
if(s==undefined) var s=1.70158;
if((t/=d/2)<1) return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
}
Tween.elasticEaseIn=function(t,b,c,d,a,p){
if(t==0) return b;
if((t/=d)==1) return b+c;
if(!p) p=d*.3;
if(!a||a<Math.abs(c)){
a=c;var s=p/4;
}
else
var s=p/(2*Math.PI)*Math.asin(c/a);
return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
}
Tween.elasticEaseOut=function(t,b,c,d,a,p){
if(t==0) return b;if((t/=d)==1) return b+c;if(!p) p=d*.3;
if(!a||a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);
}
Tween.elasticEaseInOut=function(t,b,c,d,a,p){
if(t==0) return b;if((t/=d/2)==2) return b+c;if(!p) var p=d*(.3*1.5);
if(!a||a<Math.abs(c)){var a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
if(t<1) return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
}
Tween.bounceEaseOut=function(t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;
}else if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;
}else{
return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;
}
}
Tween.bounceEaseIn=function(t,b,c,d){
return c-Tween.bounceEaseOut(d-t,0,c,d)+b;
}
Tween.bounceEaseInOut=function(t,b,c,d){
if(t<d/2) return Tween.bounceEaseIn(t*2,0,c,d)*.5+b;
else return Tween.bounceEaseOut(t*2-d,0,c,d)*.5+c*.5+b;
}
Tween.strongEaseInOut=function(t,b,c,d){
return c*(t/=d)*t*t*t*t+b;
}
Tween.regularEaseIn=function(t,b,c,d){
return c*(t/=d)*t+b;
}
Tween.regularEaseOut=function(t,b,c,d){
return-c*(t/=d)*(t-2)+b;
}
Tween.regularEaseInOut=function(t,b,c,d){
if((t/=d/2)<1) return c/2*t*t+b;
return-c/2*((--t)*(t-2)-1)+b;
}
Tween.strongEaseIn=function(t,b,c,d){
return c*(t/=d)*t*t*t*t+b;
}
Tween.strongEaseOut=function(t,b,c,d){
return c*((t=t/d-1)*t*t*t*t+1)+b;
}
Tween.strongEaseInOut=function(t,b,c,d){
if((t/=d/2)<1) return c/2*t*t*t*t*t+b;
return c/2*((t-=2)*t*t*t*t+2)+b;
}
OpacityTween.prototype=new Tween();
OpacityTween.prototype.constructor=Tween;
OpacityTween.superclass=Tween.prototype;
function OpacityTween(obj,func,RpbMR,irNrs,fWnvR){
this.targetObject=obj;
this.init(new Object(),'a',func,RpbMR,irNrs,fWnvR);
this.onMotionChanged=function(evt){
var v=evt.target.jxkbQ;
var t=this.targetObject;
v=Math.round(v*100)/100
t.style['opacity']=v/100;
t.style['-moz-opacity']=v/100;
html_SetOpacity(t,v/100);
}
}
function html_canvas(hXGIb,dNVjm,uAOQk)
{
return "<canvas id='"+hXGIb+"' style='position:absolute;left:0px;top:0px;'  width='"+dNVjm+"' height='"+uAOQk+"'></canvas>";
}
function WA_canvas(hXGIb,dNVjm,uAOQk)
{
document.write(html_canvas(hXGIb,dNVjm,uAOQk))
}
function BPZkO(FJkJs,x0,y0,lx0,ly0)
{
var x=x0+lx0/2;var y=y0+ly0/2;var lx=lx0/2;var ly=ly0/2;var radius=lx0/2;var yRadius=ly0/2;
FJkJs.beginPath();
var theta,xrCtrl,yrCtrl,angleMid,px,py,cx,cy;
theta=Math.PI/4;xrCtrl=radius/Math.cos(theta/2);yrCtrl=yRadius/Math.cos(theta/2);var angle=0;
FJkJs.moveTo(x+radius,y);
for(var i=0;i<8;i++){
angle+=theta;angleMid=angle-(theta/2);cx=x+Math.cos(angleMid)*xrCtrl;cy=y+Math.sin(angleMid)*yrCtrl;px=x+Math.cos(angle)*radius;py=y+Math.sin(angle)*yRadius;
FJkJs.quadraticCurveTo(cx,cy,px,py);
}
}
function TCqoN(c,x,y,lx,ly,arc,clowckwise)
{
c.beginPath()
OVkPC(c,x,y,lx,ly,arc,clowckwise)
c.closePath();
}
function OVkPC(c,x,y,lx,ly,arc,clowckwise)
{
if(clowckwise)
{
c.moveTo(x+arc,y);c.lineTo(x+lx-arc,y);c.quadraticCurveTo(x+lx,y,x+lx,y+arc);c.lineTo(x+lx,y+ly-arc);c.quadraticCurveTo(x+lx,y+ly,x+lx-arc,y+ly);c.lineTo(x+arc,y+ly);c.quadraticCurveTo(x,y+ly,x,y+ly-arc);c.lineTo(x,y+arc);c.quadraticCurveTo(x,y,x+arc,y);
return;
}
c.moveTo(x,y+arc);c.lineTo(x,y+ly-arc);c.quadraticCurveTo(x,y+ly,x+arc,y+ly);c.lineTo(x+lx-arc,y+ly);c.quadraticCurveTo(x+lx,y+ly,x+lx,y+ly-arc);c.lineTo(x+lx,y+arc);c.quadraticCurveTo(x+lx,y,x+lx-arc,y);c.lineTo(x+arc,y);c.quadraticCurveTo(x,y,x,y+arc);
}
function isWebKit()
{
if(navigator.userAgent.match(/webkit/i)) return true;
return false;
}
function isMSIE()
{
return BrowserDetect.browser=="Explorer" 
}
function isWindowsOS()
{
if(BrowserDetect.OS.match(/windows/i)) return true;
return false;
}
function isMSIE8()
{
if((BrowserDetect.browser=="Explorer")&&(BrowserDetect.version==8))
{
return true;
}
return false;
}
function isMSIE_lower_than_ie9()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode==9)
{
return false;
}
}
return true;
}
return false;
}
function ABhrg()
{
if(isMSIE_lower_than_ie9())
{
return false;
}
if(isChrome()&&isWindowsOS())
{
return false;
}
return true;
}
function isMobileWithoutFlash()
{
return isIPhone();
}
function isMobileBrowser()
{
return isIPhone();
}
function isChrome()
{
if(navigator.userAgent.match(/Chrome/i))
return true;
return false;
}
function isIPhone()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
return true;
return false;
}
function XlsZu(lx,ly,parent,id_suffixe)
{
var rOcVg=document.createElement('canvas');rOcVg.width=lx;rOcVg.height=ly;
return rOcVg;
}
function oFPXx(Ypuji)
{
var bckJG=(-Ypuji+45);
return new Point(Math.cos(bckJG*(2*Math.PI)/360),Math.sin(bckJG*(2*Math.PI)/360))
}
function OggmG(c,Ypuji)
{
var offset=oFPXx(Ypuji) 
c.shadowColor="#000000";
c.shadowOffsetX=Math.round(2*offset.x);
c.shadowOffsetY=Math.round(2*offset.y);
c.shadowBlur=4;
}
function IQwPe(c)
{
c.shadowColor="rgba(0,0,0,0)";
c.shadowOffsetX=0;
c.shadowOffsetY=0;
c.shadowBlur=0;
}
function WA_over_img_html(CorYX,YbFdH,pGfRY)
{
if(!CorYX.src)
{
var kOXar=CorYX.getElementsByTagName("IMG")
if(kOXar.length==1)CorYX=kOXar[0]
}
if(CorYX.src1==undefined)
{
CorYX.src1=CorYX.src;
CorYX.src2=YbFdH;
}
if(pGfRY)
{
CorYX.src=CorYX.src2;
}
else
{
CorYX.src=CorYX.src1;
}
}
function WA_over_img(id,pGfRY)
{
var el=document.getElementById(id+"-canvas") 

var CorYX=(pGfRY)?el.wa_s_img[1]:el.wa_s_img[0]
WA_img(id,el.wa_lx,el.wa_ly,el.wa_arc,el.wa_bord_siz,el.wa_bord_col,[CorYX,CorYX],el.wa_shadow,el.wa_rot,el.wa_reflex,pGfRY)
}
function EfZhS(hXGIb,lx,ly,arc,side)
{
this.id=hXGIb;
this.lx=lx;
this.ly=ly;
this.arc=arc;
var nSide=side;
this.side=nSide;
this.VKXrP=0.2;
var sizeReflex=ly*this.VKXrP;
this.decX=0
this.decY=0
this.sX=0;
this.sY=ly-sizeReflex;
this.sLx=lx;
this.sLy=sizeReflex;
this.gradX1=0
this.gradY1=this.sY
this.gradX2=0
this.gradY2=ly 

if(nSide==2)
{
this.decY=1 
}
if(nSide==1)
{
sizeReflex=lx*this.VKXrP;
this.sX=lx-sizeReflex;
this.sY=0;
this.sLx=sizeReflex;
this.sLy=ly;
this.gradX1=this.sX
this.gradY1=0
this.gradX2=lx
this.gradY2=0
this.decX=1
}
if(nSide==0)
{
sizeReflex=ly*this.VKXrP;
this.sX=0;
this.sY=0;
this.sLx=lx;
this.sLy=sizeReflex;
this.gradX1=0
this.gradY1=sizeReflex
this.gradX2=0
this.gradY2=0
this.decY=-1
}
if(nSide==3)
{
sizeReflex=lx*this.VKXrP;
this.sX=0;
this.sY=0;
this.sLx=sizeReflex;
this.sLy=ly;
this.gradX1=sizeReflex
this.gradY1=0
this.gradX2=0
this.gradY2=0
this.decX=-1
}
this.qsGZM=function(canv2)
{
if(isIPhone()) return;
if(/opera/i.test(navigator.userAgent)) return;
if(navigator.userAgent.match(/Firefox/i))
{
var div=document.getElementById(this.id)
if(div.style.MozTransform===undefined) return;
}
var lKdQw=document.getElementById(this.id+"-reflex")
var KiccP=lKdQw.getContext('2d');
var MEWQc=0;
var CegCx=0;
if(this.side==2)
{
MEWQc=this.lx;
CegCx=-this.ly*(1-this.VKXrP);
}
else
if(this.side==0)
{
MEWQc=this.lx;
}
else
if(this.side==3)
{
MEWQc=this.VKXrP*this.lx;
}
else
if(this.side==1)
{
MEWQc=this.lx;
}
KiccP.translate(MEWQc,CegCx)
KiccP.scale(-1,1)
KiccP.beginPath() 
var dec=0;
TCqoN(KiccP,dec,dec,this.lx-2*dec,this.ly-2*dec,this.arc)
KiccP.clip() 

KiccP.drawImage(canv2,this.sX,this.sY,this.sLx,this.sLy,this.sX,this.sY,this.sLx,this.sLy);
KiccP.globalCompositeOperation="destination-out";
var gradient=KiccP.createLinearGradient(this.gradX1,this.gradY1,this.gradX2,this.gradY2);
var jFqgu=0.40;
gradient.addColorStop(0,"rgba(255, 255, 255, 1)");
gradient.addColorStop(1,"rgba(255, 255, 255, "+(1-jFqgu)+")");
KiccP.fillStyle=gradient;
KiccP.beginPath()
KiccP.rect(this.sX-this.decX,this.sY-this.decY,this.sLx,this.sLy);
KiccP.fill();
KiccP.globalCompositeOperation="source-over";
KiccP.scale(-1,1)
KiccP.translate(-MEWQc,-CegCx) 
}
}
function extractNum(st)
{
var len=st.length
if((len>0)&&(st.substring(len-2,len)=="px"))
{
return wa_evaluate(st.substring(0,len-2))
}
return 0;
}
function cZYem(c2,lx,ly,fokhk,bord_col,arc,arc2)
{
if(fokhk>0)
{
c2.beginPath()
c2.fillStyle=bord_col;
c2.beginPath()
TCqoN(c2,0,0,lx,ly,arc)
OVkPC(c2,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk,arc2,true)
c2.fill()
}
}
function fWNDI()
{
this.tx=0
this.ty=0
this.rotation=0
}
function UJdbX(id,lx,ly,rot,c2,canv2,shadow,matrix)
{
}
function WA_img(id,lx,ly,arc,fokhk,bord_col,s_img,shadow,rot,RhEcf,b_over)
{
var rYFDu=id+"-canvas"
var el=document.getElementById(rYFDu)
var c=el.getContext('2d');
var kGoee=false;
if((RhEcf!=undefined)&&(RhEcf!=-1))
{
kGoee=new EfZhS(rYFDu,lx,ly,arc,RhEcf)
}
var cpVSO=0;
if(shadow)cpVSO=6
if(el.wa_lx==undefined)
{
el.wa_lx=lx
el.wa_ly=ly
el.wa_arc=arc
el.wa_bord_siz=fokhk
el.wa_bord_col=bord_col
el.wa_s_img=s_img
el.wa_shadow=shadow
el.wa_rot=rot
el.wa_reflex=RhEcf
c.translate(cpVSO,cpVSO)
}
var WtCoi_img=document.getElementById(id+"-cache")
WtCoi_img.onload=function()
{
c.clearRect(0,0,lx+2*cpVSO,ly+2*cpVSO)
var arc2=arc-fokhk;
if(arc2<0)arc2=0;
this.width=lx-2*fokhk
this.height=ly-2*fokhk
if(isMSIE_lower_than_ie9()) 
{
if(shadow) KYhDb(c,0,0,lx,ly,arc,false,rot)
var PpqJE=c.createPattern(this,'no-repeat');
c.fillStyle=PpqJE;
c.beginPath()
TCqoN(c,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk,arc2)
c.translate(fokhk,fokhk)
c.fill()
c.translate(-fokhk,-fokhk)
cZYem(c,lx,ly,fokhk,bord_col,arc,arc2)
}
else
{
var canv2=XlsZu(lx,ly,el,"bis2");
var c2=canv2.getContext('2d');
var rgToO=new  fWNDI()
UJdbX(id,lx,ly,rot,c2,canv2,shadow,rgToO)
c.clearRect(-cpVSO,-cpVSO,lx+2*cpVSO,ly+2*cpVSO)
cZYem(c2,lx,ly,fokhk,bord_col,arc,arc2)
c2.beginPath()
TCqoN(c2,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk,arc2)
c2.clip()
c2.drawImage(this,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk);
c2.rotate(-rgToO.rotation)
c2.translate(-rgToO.tx,-rgToO.ty) 
if(shadow) OggmG(c,rot)
c.drawImage(canv2,0,0);
IQwPe(c) 

c2.translate(rgToO.tx,rgToO.ty)
c2.rotate(rgToO.rotation)
if(kGoee)
{
kGoee.qsGZM(canv2)
}
}
}
WtCoi_img.src=s_img[0];
}
function HHXfS(jTmpf,Ypuji,wIEYX,ceLwr)
{
jTmpf.style.left=wIEYX+"px"
jTmpf.style.top=ceLwr+"px"
jTmpf.style.webkitTransformOrigin="0 0"
jTmpf.style.webkitTransform="rotate("+Ypuji+"deg)";
}
function JeMGe(c,type,lx,ly,corner)
{
if(type==1)
BPZkO(c,0,0,lx,ly)
else
TCqoN(c,0,0,lx,ly,corner)
}
function qHBBu(el,c,type,lx,ly,corner,bg,gElAR,rot)
{
var ioGIQ=ABhrg();
if(ioGIQ==false)
{
c.fillStyle=bg;
JeMGe(c,type,lx,ly,corner)
c.fill()
}
else
{
var canv2=XlsZu(lx,ly,el,"bis");
var c2=canv2.getContext('2d');
c2.fillStyle=bg;
JeMGe(c2,type,lx,ly,corner)
c2.closePath();
c2.fill()
if(gElAR) OggmG(c,rot)
c.drawImage(canv2,0,0);
IQwPe(c)
}
}
function XaNcZ(c,type,lx,ly,NxbJP,bg,MZsEt,BDRBZ_glow)
{
if(MZsEt)
{
var x1=MZsEt[0];var y1=MZsEt[1];var lx1=MZsEt[2];var ly1=MZsEt[3];var rLAZM=MZsEt[4];
var SHnjc=c.createLinearGradient(x1,y1,x1,y1+ly1);
SHnjc.addColorStop(0,"rgba(255,255,255,0.7)");SHnjc.addColorStop(1,"rgba(255,255,255,0.1)");
c.fillStyle=SHnjc;
if(type==1) BPZkO(c,x1,y1,lx1,ly1)
else
TCqoN(c,x1,y1,lx1,ly1,rLAZM)
c.fill()
}
if(BDRBZ_glow)
{
var x2=BDRBZ_glow[0];var y2=BDRBZ_glow[1];var lx2=BDRBZ_glow[2];var ly2=BDRBZ_glow[3];
var JgdZL=BDRBZ_glow[4];
var fMVYQ_glow=new RGBColor(BDRBZ_glow[5]);
fMVYQ_glow.a=0;
var col1=BDRBZ_glow[5];
var col2=fMVYQ_glow.toRGB();
var FLTQd=c.createLinearGradient(x2,y2,x2,y2+ly2);
FLTQd.addColorStop(0,col2);
FLTQd.addColorStop(0.2,col2);
FLTQd.addColorStop(1,col1);
c.fillStyle=FLTQd;
if(type==1) BPZkO(c,x2,y2,lx2,ly2)
else
TCqoN(c,x2,y2,lx2,ly2,JgdZL)
c.fill()
}
}
function aQGEf(tKcxe,hXGIb,jswCl,dNVjm,uAOQk,NxbJP,nNuwe,MZsEt,BDRBZ_glow,gElAR,Ypuji)
{
tKcxe.hXGIb=hXGIb;tKcxe.jswCl=jswCl;
tKcxe.dNVjm=dNVjm;tKcxe.uAOQk=uAOQk;
tKcxe.NxbJP=NxbJP;tKcxe.nNuwe=nNuwe,tKcxe.MZsEt=MZsEt;
tKcxe.BDRBZ_glow=BDRBZ_glow;tKcxe.gElAR=gElAR;tKcxe.Ypuji=Ypuji;
}
function WA_but_over(hXGIb,rnxSP,fMVYQ_glow)
{
var uGsij=document.getElementById(hXGIb) 
if(uGsij&&uGsij.QjABi)
with(uGsij.QjABi)
{
var BDRBZ_glow_over;
if(BDRBZ_glow&&fMVYQ_glow)
{
BDRBZ_glow_over=new Array();
for(var SfQOY=0;SfQOY<BDRBZ_glow.length;SfQOY++)BDRBZ_glow_over[SfQOY]=BDRBZ_glow[SfQOY];
BDRBZ_glow_over[5]=fMVYQ_glow;
}
WA_but(hXGIb,jswCl,dNVjm,uAOQk,NxbJP,rnxSP,MZsEt,BDRBZ_glow_over,gElAR,Ypuji);
}
var uWAKI=document.getElementById(hXGIb+"-div0")
if(uWAKI)html_SetVisibility(uWAKI,false);
var djDVh=document.getElementById(hXGIb+"-div1")
if(djDVh)html_SetVisibility(djDVh,true);
}
function WA_but_out(hXGIb)
{
var uGsij=document.getElementById(hXGIb)
with(uGsij.QjABi)
{
WA_but(hXGIb,jswCl,dNVjm,uAOQk,NxbJP,nNuwe,MZsEt,BDRBZ_glow,gElAR,Ypuji);
}
var uWAKI=document.getElementById(hXGIb+"-div0")
if(uWAKI)html_SetVisibility(uWAKI,true);
var djDVh=document.getElementById(hXGIb+"-div1")
if(djDVh)html_SetVisibility(djDVh,false);
}
function WA_but(id,type,lx,ly,corner,bg,top_light,s_glow,gElAR,rot)
{
var el=document.getElementById(id)
if(el.QjABi==undefined)
{
el.QjABi=new Array();
aQGEf(el.QjABi,id,type,lx,ly,corner,bg,top_light,s_glow,gElAR,rot);
}
var c=el.getContext('2d');
var cpVSO=0;
if(gElAR)cpVSO=6 

c.fillStyle="#000000";
c.fillRect(-0,-0,lx+2*cpVSO,ly+2*cpVSO) 
c.clearRect(-10,-10,lx+2*cpVSO+10,ly+2*cpVSO+10) 
var bg2=bg
if(bg2.substring(0,1)=="(")
{
bg2=bg2.substring(1)
bg2=bg2.substring(0,bg2.length-1)
var img=new Image();
img.onload=function()
{
if(ABhrg()==false)
{
c.translate(cpVSO,cpVSO)
img.width=lx
img.height=ly 
if((isChrome()&&isWindowsOS())==false)
{
if(gElAR) KYhDb(c,0,0,lx,ly,corner,(type==1),rot)
}
{
var ptrn=c.createPattern(img,'no-repeat');
c.fillStyle=ptrn;
c.beginPath()
JeMGe(c,type,lx,ly,corner)
c.fill()
}
XaNcZ(c,type,lx,ly,corner,bg,top_light,s_glow)
c.translate(-cpVSO,-cpVSO)
}
else
{
var canv2=XlsZu(lx,ly,el,"bis");
var c2=canv2.getContext('2d');
c2.beginPath()
JeMGe(c2,type,lx,ly,corner)
c2.closePath() 
c2.clip()
c2.drawImage(img,0,0,lx,ly);
XaNcZ(c2,type,lx,ly,corner,bg,top_light,s_glow)
if(gElAR) OggmG(c,rot) 

c.clearRect(-10,-10,lx+2*cpVSO+10,ly+2*cpVSO+10)
c.drawImage(canv2,cpVSO,cpVSO);
IQwPe(c)
}
}
img.src=bg2;
return;
}
c.translate(cpVSO,cpVSO)
if(gElAR&&(ABhrg()==false))
{
var ghKBX=new RGBColor(bg);
if(ghKBX.a>0)
{
KYhDb(c,0,0,lx,ly,corner,(type==1),rot)
}
}
qHBBu(el,c,type,lx,ly,corner,bg2,gElAR,rot)
XaNcZ(c,type,lx,ly,corner,bg,top_light,s_glow) 
c.translate(-cpVSO,-cpVSO)
}
function KYhDb(c,x0,y0,lx0,ly0,corner,is_circle,rot)
{
var decShadow=2;
var offset=oFPXx(rot)
c.translate(decShadow*offset.x,decShadow*offset.y)
var dec_init=2;
var x=x0-dec_init;var y=y0-dec_init;var lx=lx0+2*dec_init;var ly=ly0+2*dec_init;var opacity=0.1;
for(var n=0;n<4;n++)
{
c.fillStyle="rgba(0,0,0, "+opacity+")"
c.beginPath()
if(is_circle) BPZkO(c,x,y,lx,ly);else TCqoN(c,x,y,lx,ly,corner);
c.fill()
x+=1;y+=1;lx-=2;ly-=2;opacity+=0.04
c.closePath();
}
c.translate(-decShadow*offset.x,-decShadow*offset.y)
}
function lacHA(id,x,y,lx,ly,arc,fokhk,bord_col,bg,shadow,rot,niEXp,ZBSwI)
{
if(ZBSwI==undefined)ZBSwI=true;
var el=document.getElementById(id)
var c=el.getContext('2d');
if(niEXp==undefined)niEXp=1.0;
var cpVSO=0;
c.shadowOffsetX=0;
c.shadowOffsetY=0;
c.shadowBlur=0;
if(shadow)
{
cpVSO=6;
}
if(ZBSwI) c.clearRect(0,0,el.width,el.height)
c.globalAlpha=niEXp 
var x_rect0=0;
var y_rect0=0;
var bg1=bg[0]
var fill_obj=false;
if(bg1.substring(0,1)=="(")
{
bg1=bg1.substring(1);
bg1=bg1.substring(0,bg1.length-1)
var Ljcob=bg1.split(";");
var x1=parseFloat(Ljcob[0]);
var y1=parseFloat(Ljcob[1]);
var x2=parseFloat(Ljcob[2]);
var y2=parseFloat(Ljcob[3]);
var col1=Ljcob[4];
var col2=Ljcob[5];
var grad=c.createLinearGradient(x1,y1,x2,y2);
grad.addColorStop(0,col1);
grad.addColorStop(1,col2);
fill_obj=grad
}
else
{
if(bg1.length==0)bg1='rgba(0,0,0,0)'
fill_obj=bg1;
}
var arc2=arc-fokhk;
if(arc2<0)arc2=0
var canv2=false;
var c2=c;
{
if(shadow) KYhDb(c,cpVSO,cpVSO,lx,ly,arc,false,rot)
}
if(fokhk>0)
{
c2.fillStyle=bord_col;
TCqoN(c2,x,y,lx,ly,arc)
OVkPC(c2,x+fokhk,y+fokhk,lx-2*fokhk,ly-2*fokhk,arc2,true)
c2.fill()
}


c2.fillStyle=fill_obj 
TCqoN(c2,x+fokhk,y+fokhk,lx-2*fokhk,ly-2*fokhk,arc2)
c2.fill();
}
function JlXUr(iIRYP,MBiem,MYWcX)
{
return new Point(Math.round(iIRYP*Math.cos(MYWcX)-MBiem*Math.sin(MYWcX)),Math.round(iIRYP*Math.sin(MYWcX)+MBiem*Math.cos(MYWcX)))
}
function kEtwH(c,x,y,lx,ly,arc,clowckwise,Ypuji)
{
c.beginPath()
twrYR(c,x,y,lx,ly,arc,clowckwise,Ypuji)
}
function twrYR(c,x,y,lx,ly,arc,clowckwise,Ypuji)
{
if(clowckwise)
{
c.moveTo(x+arc,y);
c.lineTo(x+lx-arc,y);
c.quadraticCurveTo(x+lx,y,x+lx,y+arc);
c.lineTo(x+lx,y+ly-arc);
c.quadraticCurveTo(x+lx,y+ly,x+lx-arc,y+ly);
c.lineTo(x+arc,y+ly);
c.quadraticCurveTo(x,y+ly,x,y+ly-arc);
c.lineTo(x,y+arc);
c.quadraticCurveTo(x,y,x+arc,y);
return;
}
var qkCAg=[[x,y+arc],[x,y+ly-arc],[x,y+ly],[x+arc,y+ly],[x+lx-arc,y+ly],[x+lx,y+ly],[x+lx,y+ly-arc],[x+lx,y+arc],[x+lx,y],[x+lx-arc,y],[x+arc,y],[x,y],[x,y+arc]];
var theta=Ypuji*2*Math.PI/360
for(var n=0;n<qkCAg.length;n++)
{
var pVCPV=qkCAg[n][0]
var JGOZr=qkCAg[n][1]
qkCAg[n][0]=pVCPV*Math.cos(theta)-JGOZr*Math.sin(theta);
qkCAg[n][1]=pVCPV*Math.sin(theta)+JGOZr*Math.cos(theta);
}
var n=0;
c.moveTo(qkCAg[n][0],qkCAg[n++][1]);
c.lineTo(qkCAg[n][0],qkCAg[n++][1]);
c.quadraticCurveTo(qkCAg[n][0],qkCAg[n++][1],qkCAg[n][0],qkCAg[n++][1]);
c.lineTo(qkCAg[n][0],qkCAg[n++][1]);
c.quadraticCurveTo(qkCAg[n][0],qkCAg[n++][1],qkCAg[n][0],qkCAg[n++][1]);
c.lineTo(qkCAg[n][0],qkCAg[n++][1]);
c.quadraticCurveTo(qkCAg[n][0],qkCAg[n++][1],qkCAg[n][0],qkCAg[n++][1]);
c.lineTo(qkCAg[n][0],qkCAg[n++][1]);
c.quadraticCurveTo(qkCAg[n][0],qkCAg[n++][1],qkCAg[n][0],qkCAg[n++][1]);
}
function fhkve(a,b,x,y)
{
return(a*x-y+b)/(Math.sqrt(1+a*a))
}
function oULQw(new_a1,new_b1,oIrxO,multi)
{
var d=0;
for(var i=0;i<oIrxO.length;i++)
{
var hxuqi=oIrxO[i]
var d1=fhkve(new_a1,new_b1,hxuqi.x,hxuqi.y)
if(multi<0)
{
if(d1<0) d=Math.max(d,-d1);
}
else
{
if(d1>0) d=Math.max(d,d1);
}
}
return d;
}
function nXIjM(o1,o2)
{
if(o1<o2) return-1
if(o1>o2) return 1
return 0
}
function YIrbs(c,lx,ly,bg1)
{
var fill_obj=false;
var sHKHI=false;
var NvJxj=false;
var oIrxO=false
if(bg1.substring(0,1)=="(")
{
bg1=bg1.substring(1);
bg1=bg1.substring(0,bg1.length-1)
var Ljcob=bg1.split(";");
var nDkJw=new Point(parseFloat(Ljcob[0]),parseFloat(Ljcob[1]));
var AZZaO=new Point(parseFloat(Ljcob[2]),parseFloat(Ljcob[3]));
sHKHI=nDkJw.clone()
NvJxj=AZZaO.clone()
var col1=Ljcob[4];
var col2=Ljcob[5];
var grad=c.createLinearGradient(sHKHI.x,sHKHI.y,NvJxj.x,NvJxj.y);
if(isMSIE_lower_than_ie9())
{
sHKHI=nDkJw.clone()
NvJxj=AZZaO.clone() 
var SHnjc=0;
var FLTQd=1;
{
oIrxO=[{x:0,y:0},{x:lx,y:0},{x:lx,y:ly},{x:0,y:ly}]
var d1=0;
var d2=0;
var a=(NvJxj.y-sHKHI.y)/(NvJxj.x-sHKHI.x);
var b=sHKHI.y-a*sHKHI.x;
var diff=1;
if(a==Infinity)
{
d1=(sHKHI.y)
d2=(ly-NvJxj.y)
}
else
if(a==0)
{
d1=(sHKHI.x)
d2=(lx-NvJxj.x)
}
else
{
var new_a1=-1/a;
var new_b1=sHKHI.y-new_a1*sHKHI.x;
d1=oULQw(new_a1,new_b1,oIrxO,-1)
var new_b2=NvJxj.y-new_a1*NvJxj.x;
d2=oULQw(new_a1,new_b2,oIrxO,1)
if(new_a1<0)diff=-1;
}
var d=Math.sqrt(Math.pow(NvJxj.x-sHKHI.x,2)+Math.pow(NvJxj.y-sHKHI.y,2))
var total=(d1+d+d2)
SHnjc=d1/total;
FLTQd=(d1+d)/total;
var pt_prod0=new Point(NvJxj.x-sHKHI.x,NvJxj.y-sHKHI.y)
var pt_prod1=new Point(0,100)
var prod=(pt_prod0.x*pt_prod1.y-pt_prod1.x*pt_prod0.y);
if(prod*diff<0)
{
SHnjc=d2/total;
FLTQd=(d2+d)/total;
}
}
grad.addColorStop(SHnjc,col1);
grad.addColorStop(FLTQd,col2);

}
else
{
grad.addColorStop(0,col1);
grad.addColorStop(1,col2);
}
fill_obj=grad
}
else
{
fill_obj=bg1;
}
return fill_obj;
}
function WA_bg3(id,lx,ly,arc,fokhk,bord_col,bg,shadow,rot,LoKkL,wJxwk,niEXp,ZBSwI)
{


var theta=rot*2*Math.PI/360 
if(ZBSwI==undefined)ZBSwI=true;
if(niEXp==undefined)niEXp=1.0;
var el=document.getElementById(id)
if(!el)return
var c=el.getContext('2d');
var cpVSO=(el.width-lx)/2;
if(ZBSwI) c.clearRect(0,0,el.width,el.height)
var x_rect0=cpVSO;
var y_rect0=cpVSO;
var bg1=bg[0]
var fill_obj=false;
var sHKHI=false;
var NvJxj=false;
var oIrxO=false
fill_obj=YIrbs(c,lx,ly,bg1) 
if(niEXp==undefined)niEXp=1.0;
var arc2=arc-fokhk;
if(arc2<0)arc2=0
var canv2=false;
var c2=c;
if(shadow)
{
c2.translate(LoKkL+6,wJxwk+6)
}
else
{
c2.translate(LoKkL,wJxwk)
}
c2.fillStyle=fill_obj;
kEtwH(c2,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk,arc2,false,rot)
c2.fill();
}
function WA_bg(id,lx,ly,arc,fokhk,bord_col,bg,shadow,rot,niEXp,ZBSwI)
{

if(ZBSwI==undefined)ZBSwI=true;
if(niEXp==undefined)niEXp=1.0;
var el=document.getElementById(id)
if(!el)return
var c=el.getContext('2d');
var cpVSO=(el.width-lx)/2;
if(ZBSwI) c.clearRect(0,0,el.width,el.height) 

var fill_obj=YIrbs(c,lx,ly,bg[0])
if(bg.length>1)
{
var bg2=bg[1]
var img=new Image();
img.onload=function()
{
var ptrn=c.createPattern(img,'repeat');
c.fillStyle=ptrn;
c.beginPath()
xOrTC(c,el,lx,ly,arc,fokhk,bord_col,ptrn,shadow,rot,niEXp);
}
img.src=bg2;
}
else
{
xOrTC(c,el,lx,ly,arc,fokhk,bord_col,fill_obj,shadow,rot,niEXp)
}
}
function xOrTC(c,el,lx,ly,arc,fokhk,bord_col,fill_obj,shadow,rot,niEXp)
{
if(niEXp==undefined)niEXp=1.0;
var arc2=arc-fokhk;
if(arc2<0)arc2=0
var cpVSO=(el.width-lx)/2;
var x_rect0=cpVSO;
var y_rect0=cpVSO;
var canv2=false;
var c2=c;
c.globalAlpha=1;

var ioGIQ=ABhrg();


if(ioGIQ==true)
{
canv2=XlsZu(lx,ly);
c2=canv2.getContext('2d');
c2.globalAlpha=niEXp
}
else
{
c2.translate(cpVSO,cpVSO)
if(shadow) KYhDb(c2,0,0,lx,ly,arc,false,rot)
}

{
c2.fillStyle=bord_col;
TCqoN(c2,0,0,lx,ly,arc)
OVkPC(c2,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk,arc2,true)
c2.fill()
}

c2.fillStyle=fill_obj;


TCqoN(c2,fokhk,fokhk,lx-2*fokhk,ly-2*fokhk,arc2)
c2.fill();
if(ioGIQ==true)
{
if(shadow) OggmG(c,rot)
c.globalAlpha=1.0
c.drawImage(canv2,cpVSO,cpVSO);
IQwPe(c)
}
else
{
c2.translate(-cpVSO,-cpVSO)
}
}
function WA_div_offset(id,x,y)
{
if(isMSIE())
{
var el=document.getElementById(id)
if(el.filters)
{
el.style.left=""+x+"px";el.style.top=""+y+"px";
}
}
}


function Size(lx,ly)
{
this.width=lx;this.height=ly;
this.clone=function(){return new Size(this.width,this.height)}
this.greaterThan=function(BDRBZ){return(this.width>BDRBZ.width)&&(this.height>BDRBZ.height)}
this.scale=function(IlpfI,GqSHU)
{
if(!GqSHU)GqSHU=false
var tFfdf=this;
var lSUWY=tFfdf.width
var vKaAU=tFfdf.height
var p1=lSUWY*IlpfI.height;
var p2=IlpfI.width*vKaAU;
var r1=lSUWY/vKaAU;
var r2=vKaAU/lSUWY;
var newSize1=new Size(IlpfI.height*r1,IlpfI.height);
var newSize2=new Size(IlpfI.width,IlpfI.width*r2);
if(p2>p1)
{
if((GqSHU==true)||((newSize1.width<=tFfdf.width)&&(newSize1.height<=tFfdf.height)))
{
tFfdf.width=Math.round(newSize1.width);
tFfdf.height=Math.round(newSize1.height);
}
}
else
{
if((GqSHU==true)||((newSize2.width<=tFfdf.width)&&(newSize2.height<=tFfdf.height)))
{
tFfdf.width=Math.round(newSize2.width);
tFfdf.height=Math.round(newSize2.height);
}
}
this.width=tFfdf.width;
this.height=tFfdf.height;
return true;
}
}
function Point(p_x,p_y){this.x=p_x;this.y=p_y;
this.translate=function(iIRYP,MBiem){this.x+=iIRYP;this.y+=MBiem;}
this.clone=function(){return new Point(this.x,this.y)}
}
function Rect(p_x,p_y,lx,ly)
{
this.x=p_x;this.y=p_y;this.width=lx;this.height=ly;
this.clone=function(){return new Rect(this.x,this.y,this.width,this.height)}
this.equals=function(jTmpf){return(this.x==jTmpf.x)&&(this.y==jTmpf.y)&&(this.width==jTmpf.width)&&(this.height==jTmpf.height);}
this.copy=function(jTmpf){this.x=jTmpf.x;this.y=jTmpf.y;this.width=jTmpf.width;this.height=jTmpf.height;}
this.translate=function(iIRYP,MBiem){this.x+=iIRYP;this.y+=MBiem;}
this.isValid=function(){return(this.width>0)&&(this.height>0);}
}
function html_getLayer(jTmpf)
{
if(typeof(jTmpf)=="string")return document.getElementById(jTmpf);
return jTmpf;
}
function html_SetPosition(jTmpf,iIRYP,MBiem){
jTmpf=html_getLayer(jTmpf);
jTmpf.style.left=iIRYP+"px";jTmpf.style.top=MBiem+"px";
}
function html_SetSize(htBlu,dNVjm,uAOQk){
jTmpf=html_getLayer(htBlu);
jTmpf.style.width=dNVjm+"px";jTmpf.style.height=uAOQk+"px";
}
function html_SetRect(jTmpf,hFPBi){html_SetGeometry(jTmpf,hFPBi.x,hFPBi.y,hFPBi.width,hFPBi.height);}
function html_SetGeometry(jTmpf,iIRYP,MBiem,dNVjm,uAOQk){html_SetPosition(jTmpf,iIRYP,MBiem);html_SetSize(jTmpf,dNVjm,uAOQk);}
function html_SetVisibility(jTmpf,xRUPg){jTmpf=html_getLayer(jTmpf);jTmpf.style.visibility=(xRUPg)?"visible":"hidden";}
function html_SetDisplay(jTmpf,xRUPg){jTmpf=html_getLayer(jTmpf);jTmpf.style.display=(xRUPg)?"block":"none";}
function html_SetCanvasSize(jTmpf,dNVjm,uAOQk){jTmpf=html_getLayer(jTmpf);jTmpf.width=dNVjm;jTmpf.height=uAOQk;}
function html_writeContent(jTmpf,BDRBZ){jTmpf=html_getLayer(jTmpf);jTmpf.innerHTML=BDRBZ;}
function html_SetOpacity(jTmpf,WGOJK)
{
jTmpf=html_getLayer(jTmpf);
jTmpf.style['opacity']=WGOJK;
jTmpf.style['-moz-opacity']=WGOJK;
jTmpf.style.filter=(WGOJK==1)?'':'alpha(opacity='+(WGOJK*100)+')';
}
var FqHGW=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"o",l:["ö","ô"]}
];
function removeAccentsFromString(s)
{
var res=s.toLowerCase();
for(var i=0;i<FqHGW.length;i++)
{
var array2=FqHGW[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,FqHGW[i].acc)
}
}
return res;
}
function trimString(str)
{
return str.replace(/^\s*|\s*$/g,"");
}
function IsNumeric(BGCYw)
{
var ZnUww="0123456789.";var Vgluq=true;var xmtHO;
for(SfQOY=0;SfQOY<BGCYw.length&&Vgluq==true;SfQOY++){xmtHO=BGCYw.charAt(SfQOY);if(ZnUww.indexOf(xmtHO)==-1) Vgluq=false;}
return Vgluq;
}
function getWindowScroll()
{
var x=0;var y=0;
if(typeof(window.pageYOffset)=='number'){
x=window.pageXOffset;y=window.pageYOffset;
}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){
x=document.body.scrollLeft;y=document.body.scrollTop;
}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){
x=document.documentElement.scrollLeft;y=document.documentElement.scrollTop;
}
return new Point(x,y);
}
function getWindowSize()
{
var lx=0;var ly=0;;
if(isMSIE())
{
lx=document.documentElement.clientWidth;ly=document.documentElement.clientHeight;
if((lx==0)&&(ly==0))
{
if(document.body&&(document.body.clientWidth)){
lx=document.body.clientWidth;ly=document.body.clientHeight;
}
}
}
else
if(typeof(window.innerWidth)=='number')
{
lx=window.innerWidth;
if(document.documentElement.clientWidth>0)lx=document.documentElement.clientWidth
ly=window.innerHeight;
if(document.documentElement.clientHeight>0)ly=document.documentElement.clientHeight
}
if(isIPhone())
if(typeof(window.innerWidth)=='number')
{
lx=window.innerWidth;ly=window.innerHeight;
}
return new Size(lx,ly);
}
function getWindowFullSize()
{
var lx=0;var ly=0;;
if(isMSIE())
{
lx=document.documentElement.clientWidth;ly=document.documentElement.clientHeight;
if((lx==0)&&(ly==0))
{
if(document.body&&(document.body.clientWidth)){
lx=document.body.clientWidth;ly=document.body.clientHeight;
}
}
}
else
if(typeof(window.innerWidth)=='number'){
lx=window.innerWidth;
if(document.documentElement.clientWidth>0)lx=document.documentElement.clientWidth
ly=window.innerHeight;
if(document.documentElement.clientHeight>0)ly=document.documentElement.clientHeight
}
return new Size(lx,ly);
}
function urlSuffixe(DdVeO)
{
var ROsgD=DdVeO*60;
var kxNOp=new Date();
var Fjqsh=0;
Fjqsh+=kxNOp.getYear()*12*31*24*60*60;
Fjqsh+=kxNOp.getMonth()*31*24*60*60;
Fjqsh+=kxNOp.getDate()*24*60*60;
Fjqsh+=kxNOp.getHours()*60*60;
Fjqsh+=kxNOp.getMinutes()*60;
Fjqsh+=kxNOp.getSeconds();
if(ROsgD!=0)
{
Fjqsh=Math.floor(Fjqsh/ROsgD)*ROsgD
}
return "-"+Fjqsh;
}
function urlAntiCacheForPreview()
{
if(document.webaca_is_preview) return urlSuffixe(0);
return "";
}
function html_findPos(obj)
{
var WGOJK=RfGUa(obj)
return new Point(WGOJK[0],WGOJK[1])
}
function RfGUa(obj)
{
var curleft=curtop=0;
if(obj.offsetParent)
{
do
{
curleft+=obj.offsetLeft;curtop+=obj.offsetTop;
}while(obj=obj.offsetParent);
}
return [curleft,curtop];
}
function Wa_search_input(sXPjp,dNVjm,uAOQk)
{
uAOQk=Math.min(13,uAOQk-4);
document.write("<input id='"+sXPjp+"' type=search results=0 placeholder='' style='width:"+dNVjm+"px;height:"+uAOQk+"px;'>")
}
function sfktG()
{
var kOXar=document.getElementsByTagName("A");
for(var SfQOY=0;SfQOY<kOXar.length;SfQOY++)
{
var jTmpf=kOXar[SfQOY];
if(jTmpf.onmouseover)jTmpf.onmouseover=null;
if(jTmpf.onmouseout)jTmpf.onmouseout=null;
}
}
function PTAgC()
{
for(var kkSBo in document.wa_global_list_element)
{
var hXGIb=document.wa_global_list_element[kkSBo]
var uGsij=document.getElementById(hXGIb)
uGsij.onclick=function()
{
WA_focus(this)
}
}
}
function WA_declare(hXGIb)
{
if(!document.wa_global_list_element)
{
document.wa_global_list_element=new Array();;
}
document.wa_global_list_element.push(hXGIb)
}
function NJPZc()
{
var rcSYt=window.location.search;
if(rcSYt.substr(0,1)=="?")rcSYt=rcSYt.substr(1);
if(rcSYt.length==0)return;
var VRiAU=new Array();
var YfhYT=rcSYt.split("&");
for(var i=0;i<YfhYT.length;i++)
{
var BcqXq=YfhYT[i].split("=");VRiAU[BcqXq[0]]=BcqXq[1];
}
var BDRBZ_info=VRiAU["crbst_info"];
if(!BDRBZ_info)return;
var BgiCJ=new Array();
BgiCJ.m_unid=BDRBZ_info;
BgiCJ.m_index_item=-1;
var YJUIH_info=BDRBZ_info.indexOf("-");
if(YJUIH_info!=-1)
{
BgiCJ.m_unid="wa-id-"+BDRBZ_info.substring(0,YJUIH_info);
BgiCJ.m_index_item=parseInt(BDRBZ_info.substring(YJUIH_info+1));
}
document.wa_global_query_info=BgiCJ;
}
function IS_onload_WA()
{

if(isMSIE8())
{
wa_timeout("IS_onload_ui()",0)
}
else
{
IS_onload_ui()
}
if(isIPhone())
{
sfktG()
}
else
{
PTAgC()
}
NJPZc();

RasWW()
}
function RasWW()
{
var djNIW=0;
var lXRrW=document.webaca_banner_height;
if(document.webaca_page_is_centered)
{
var kfXjW=getWindowSize().width
var TrxgG=document.webaca_width_page
if(kfXjW>TrxgG)djNIW=(kfXjW-TrxgG)/2;
}
document.body.style.backgroundPosition=djNIW+"px "+lXRrW+"px";
}


function WA_loadMessages()
{
for(var k in CONST_WA_TR)
{
var key=CONST_WA_TR[k]
Translator.m_tr[key[0]]=key[1]
}
for(var n=0;n<CONST_WA_COUNTRIES.codes.length;n++)
{
var PkgAu=CONST_WA_COUNTRIES.codes[n]
var kgaha=CONST_WA_COUNTRIES.labels[n]
Translator.m_countries[PkgAu]=kgaha
}
}
function Translator()
{
}
Translator.m_tr=new Array();
Translator.m_countries=new Array();
Translator.tr=function(k)
{
try
{
var v=Translator.m_tr[k]
if((v==undefined)||(v.length==0))return "@"+k;
v=v.replace(/\n/g,"<br>")
return v
}
catch(e){}
return k;
}
Translator.country=function(k)
{
try
{
var v=Translator.m_countries[k]
if((v==undefined)||(v.length==0))return "@"+k;
return v
}
catch(e){}
return k;
}
function WA_GraphicElement(hXGIb,vCuGb,gElAR)
{
this.hXGIb=hXGIb;
this.vCuGb=vCuGb
this.gElAR=gElAR;
this.hXGIb_div=this.hXGIb+"-div"
this.hXGIb_canvas=this.hXGIb+"-canvas"
this.sxern=new Rect(0,0,0,0)
this.aExVY=false;
this.ZqSUu=false;
this.cpVSO=6;
this.CorYX_src=false;
this.CorYX_clip=false;
this.CorYX_rot=false;
this.NEaBX="";
this.shadow=function()
{
return this.gElAR;
}
this.marginShadow=function()
{
return this.cpVSO;
}
this.rect=function()
{
return this.sxern;
}
this.canvasId=function()
{
return this.hXGIb_canvas;
}
this.divId=function()
{
return this.hXGIb_div;
}
this.opacity=function()
{
return this.UGbpf;
}
this.img_clip=function()
{
return this.CorYX_clip;
}
this.img_src=function()
{
return this.CorYX_src;
}
this.toHtml=function()
{
var BDRBZ=""
BDRBZ+="<div id='"+this.hXGIb_div+"' style=\"";
BDRBZ+="position:absolute;";
if(this.NEaBX.length>0)
{
BDRBZ+="cursor:pointer;";
}
if(this.rect.x>0)BDRBZ+="left:"+this.rect.x+"px;";
if(this.rect.y>0)BDRBZ+="top:"+this.rect.y+"px;";
if(this.rect.width>0)BDRBZ+="width:"+this.rect.width+"px;";
if(this.rect.height>0)BDRBZ+="height:"+this.rect.height+"px;";
if(vCuGb)
BDRBZ+="z-index:"+vCuGb+";";
BDRBZ+="\" ";
if(this.NEaBX.length>0)
{
BDRBZ+="onclick=\""+this.NEaBX+"\" "
}
BDRBZ+=">";
if((this.rect.width>0)&&this.shadow())
{
BDRBZ+=html_canvas(this.hXGIb_canvas,this.rect.width+2*this.cpVSO,this.rect.height+2*this.cpVSO)+"</div>";
}
else
{
BDRBZ+=html_canvas(this.hXGIb_canvas,0,0)+"</div>";
}
return BDRBZ
}
this.setImage=function(BvFKH,NWNuM,Ypuji)
{
if(Ypuji==undefined)Ypuji=0;
if((BvFKH==this.CorYX_src)&&(this.CorYX_clip&&this.CorYX_clip.equals(NWNuM))&&(this.CorYX_rot==Ypuji))
{
return;
}
this.CorYX_rot=Ypuji;
this.CorYX_src=BvFKH;
this.CorYX_clip=NWNuM;
this.Qoeoo()
}
this.registerDynamicCanvas=function()
{
registerDynamicCanvas(this.hXGIb_canvas);
this.ZqSUu=true;
this.setRect(this.sxern.x,this.sxern.y,this.sxern.width,this.sxern.height)
}
this.Qoeoo=function()
{
if((this.sxern.width>0)&&(this.sxern.height>0))
{
this.draw()
}
this.aExVY=true
};
this.draw=function(){};
this.setPosition=function(iIRYP,MBiem)
{
this.sxern.x=iIRYP;this.sxern.y=MBiem;
if(this.ZqSUu==false)return
html_SetPosition(this.hXGIb_div,this.sxern.x,this.sxern.y)
if(this.aExVY==false)
{
this.Qoeoo()
}
}
this.setOnClick=function(BDRBZ)
{
this.NEaBX=BDRBZ
}
this.width=function(){return this.sxern.width;}
this.height=function(){return this.sxern.height;}
this.setSize=function(dNVjm,uAOQk)
{
this.sxern.width=dNVjm;this.sxern.height=uAOQk;
var SvBkh=dNVjm
var Gvrdu=uAOQk
if(this.gElAR)
{
SvBkh+=2*this.cpVSO
Gvrdu+=2*this.cpVSO
}
if(this.ZqSUu==false)return
html_SetSize(this.hXGIb_div,SvBkh,Gvrdu)
html_SetCanvasSize(this.hXGIb_canvas,dNVjm,uAOQk)
this.Qoeoo()
}
this.setRect=function(iIRYP,MBiem,dNVjm,uAOQk)
{
this.sxern.x=iIRYP;this.sxern.y=MBiem;this.sxern.width=dNVjm;this.sxern.height=uAOQk;
var SvBkh=dNVjm
var Gvrdu=uAOQk
var mhhth=iIRYP
var JBYcF=MBiem
if(this.gElAR)
{
SvBkh+=2*this.cpVSO
Gvrdu+=2*this.cpVSO
mhhth-=this.cpVSO
JBYcF-=this.cpVSO
}
if(this.ZqSUu==false)return 
html_SetGeometry(this.hXGIb_div,mhhth,JBYcF,SvBkh,Gvrdu);
html_SetCanvasSize(this.hXGIb_canvas,SvBkh,Gvrdu)
try{this.Qoeoo()}catch(e){
alert(e.message)
}
}
this.setVisible=function(xRUPg)
{
if(this.ZqSUu==false)return
html_SetVisibility(this.hXGIb_div,xRUPg)
}
this.setOpacity=function(WGOJK)
{
this.UGbpf=WGOJK 
if(this.ZqSUu==false)return
this.Qoeoo()
}
}

function is_onresize()
{
WA_Dialog.resizeUI()
try
{
if(WA_PhotoAlbum_resizeUI)WA_PhotoAlbum_resizeUI()
}
catch(e){}
RasWW()
}
function is_onscroll()
{
centerFullPageContainer();
}
function registerDynamicCanvas(id)
{
if(isMSIE_lower_than_ie9())
G_vmlCanvasManager.initElement(document.getElementById(id));
}
function WA_openDialogAction(kkSBo)
{
var uaOVI=WA_Dialog.oXPoV;
if(kkSBo==-1){uaOVI.closeWin();return;}
var twOHD=uaOVI.EufAS(kkSBo);
if(twOHD[5])
{
twOHD[4].call(twOHD[6],twOHD[5])
}
else
{
twOHD[4](twOHD[5]);
}
}
function WA_Dialog(xRUPg_close_button)
{
this.FZPJL=0;
this.vxoQD=0;
this.IlpfI_win_width=600;
this.RoGJK=400;
this.YbSia=new Array();
this.ntetx="wa-dialog-but-";
this.fJblP=this.ntetx+"div-";
this.HkjJu=this.ntetx+"canvas-";
this.BUTTON_HEIGHT=22;
this.eHjoT=CONST_WA_GLOBAL_COLOR_THEME;
this.xRUPg_close_button=xRUPg_close_button;
this.hvuEg=6;
this.XMVqE=function()
{
if(this.xRUPg_close_button==undefined)this.xRUPg_close_button=true;
this.qhLKS();
}
this.resetButtons=function()
{
this.qhLKS();
}
this.idealHeight=function()
{
return this.jgLSv
}
this.displayWindowWithAutoResize=function(IsEBI,GuhWC)
{
this.YUsUP=false
this.jgLSv=IsEBI
this.shPRI=GuhWC 
this.resetButtons();
GuhWC.call(this)
var l=document.getElementById('wa-dialog-content');
if(this.YUsUP==false)
if(l.scrollHeight>200)
{
this.YUsUP=true
this.jgLSv=l.scrollHeight+150
this.resetButtons();
GuhWC.call(this)
}
}
this.initializeWindow=function(IlpfI_lx,IlpfI_ly)
{
if(WA_Dialog.oXPoV)WA_Dialog.oXPoV.closeWin()
WA_Dialog.oXPoV=this;
this.IlpfI_win_width=IlpfI_lx;
this.RoGJK=IlpfI_ly;
this.pxhjV()
}
this.progress=function()
{
this.initializeWindow(300,100)
this.writeContent("<div width=100% align=center><img src='wa_loading.gif'></div>")
}
this.YqXRs=function(mess)
{


this.initializeWindow(450,130)
var s=""
s+="<table border=0 style='width:100%;'><tr>";
s+="<td align=center style='"+this.cssText1()+"'>"
s+=mess
s+="</td></tr></table>"
this.writeContent(s)
}
this.addButton=function(kgaha,lddvC,WtCoi,FIglg)
{
var hMVQm=this.YbSia.length
if(this.xRUPg_close_button==true)
{
hMVQm--;
}
var dNVjm=Math.max((kgaha.length*8)*1.2+30,80)
var tFfdf=new Size(dNVjm,this.BUTTON_HEIGHT);
this.EPcPH("action_"+hMVQm,hMVQm,kgaha,lddvC,tFfdf,WtCoi,FIglg)
}
this.qhLKS=function()
{
this.YbSia=new Array();
if(this.xRUPg_close_button)
{

var tFfdf=new Size(50,20);
this.EPcPH("close",-1,"X",null,tFfdf)
}
}
this.EPcPH=function(DDoJe,hMVQm,kgaha,lddvC,tFfdf,WtCoi,FIglg)
{
var twOHD=[DDoJe,tFfdf,hMVQm,kgaha,lddvC,WtCoi,FIglg];
this.YbSia.push(twOHD);
}
this.writeContent=function(s)
{
var l=document.getElementById('wa-dialog-content');
l.innerHTML=s
}
this.EufAS=function(DDoJe)
{
for(var kkSBo=0;kkSBo<this.YbSia.length;kkSBo++)
{
var twOHD=this.YbSia[kkSBo];
if((twOHD[0]==DDoJe)||(twOHD[2]+""==DDoJe+""))
return twOHD;
}
return undefined;
}
this.DkYJu=function(DDoJe)
{
var twOHD=this.EufAS(DDoJe);
return twOHD[1]
}
this.getColorTheme=function(kkSBo)
{
return this.eHjoT[kkSBo];
}
this.aPIOY=function(XYecW)
{
var twOHD=this.EufAS(XYecW);
var DDoJe=twOHD[0];
var hMVQm=twOHD[2];
var fMVYQ_text=this.eHjoT[4]
var fMVYQ_bg=this.eHjoT[5]
var fMVYQ_glow=this.eHjoT[7]
if(hMVQm==-1)
{
fMVYQ_text=this.eHjoT[10]
fMVYQ_bg=this.eHjoT[8]
fMVYQ_glow=this.eHjoT[11]
}
var kQnGH=this.fJblP+DDoJe;
var TPRsa=this.HkjJu+DDoJe;
var tFfdf=this.DkYJu(XYecW)
var PvLla=0;
var s=""
s+="<a href='javascript:WA_openDialogAction("+XYecW+")' ";
var fMVYQ=new RGBColor(fMVYQ_bg);
var fMVYQ_hsl=fMVYQ.toHsl();
fMVYQ.fromHsl(fMVYQ_hsl[0],fMVYQ_hsl[1],fMVYQ_hsl[2]+0.2)
fMVYQ_bg=fMVYQ.toRGB();
var uqLXE_glow=new RGBColor(fMVYQ_glow);
var uqLXE_glow_hsl=uqLXE_glow.toHsl();
uqLXE_glow.fromHsl(uqLXE_glow_hsl[0],uqLXE_glow_hsl[1],uqLXE_glow_hsl[2]+0.2)
fMVYQ_glow=uqLXE_glow.toRGB();
s+="onmouseover=\"WA_but_over('"+TPRsa+"','"+fMVYQ_bg+"','"+fMVYQ_glow+"')"+"\" ";
s+="onmouseout=\""+"WA_but_out('"+TPRsa+"')"+"\" ";
s+="style='text-decoration:none;'>";
s+="<div id='"+this.fJblP+DDoJe+"' style='position:absolute;cursor:pointer;left:0px;top:0px;height:"+tFfdf.height+"px;width:"+tFfdf.width+"px;' >";
s+="<div style='position:absolute;left:"+(-PvLla)+"px;top:"+(-PvLla)+"px;height:"+tFfdf.height+"px;'>" 
s+=html_canvas(this.HkjJu+DDoJe,(tFfdf.width+PvLla*2),(tFfdf.height+PvLla*2));
s+="</div>"
s+="<div align=center style='position:absolute;left:0px;top:"+(0)+"px;vertical-align:middle;width:100%;height:"+(tFfdf.height)+"px;line-height:"+(tFfdf.height)+"px;font-family:arial;font-size:13px;font-weight:bold;color:"+fMVYQ_text+"'>"
s+=twOHD[3];
s+="</div>"
s+="</div>"
s+="</a>"
return s;
}
this.sHebA=function(DDoJe)
{
var twOHD=this.EufAS(DDoJe);
var hMVQm=twOHD[2];
var fMVYQ_bg=this.eHjoT[5]
var fMVYQ_glow=this.eHjoT[7]
var fMVYQ_text=this.eHjoT[3]
if(hMVQm==-1)
{
fMVYQ_bg=this.eHjoT[8]
fMVYQ_glow=this.eHjoT[11]
fMVYQ_text=this.eHjoT[10]
}
var PkgAu=this.HkjJu+DDoJe;
registerDynamicCanvas(PkgAu);
var tFfdf=this.DkYJu(DDoJe);
var NxbJP=tFfdf.height*0.25;
var mumCu=true;
NxbJP=0;
mumCu=false;
var eolHr=0;
var evphf=(tFfdf.width-2);
var pcAGK=tFfdf.height*0.45;

var Ljcob_top=[1,1,evphf,pcAGK,eolHr];
var urtcq=tFfdf.width-2;
var LvKOl=tFfdf.height*0.45;
var XwlcF=fMVYQ_glow;
var vvAuJ=fMVYQ_glow;
var PVprv=0;

var Ljcob_bottom=[(tFfdf.width-urtcq)/2,tFfdf.height-LvKOl-1,urtcq,LvKOl,PVprv,XwlcF,vvAuJ];
WA_but(PkgAu,0,tFfdf.width,tFfdf.height,NxbJP,fMVYQ_bg,Ljcob_top,Ljcob_bottom,mumCu,0)
}
this.rTbPi=function(DDoJe)
{
var twOHD=this.EufAS(DDoJe)
if(twOHD)
{
var PkgAu=this.fJblP+twOHD[0];
return document.getElementById(PkgAu);
}
return undefined
}
this.pxhjV=function()
{
var l=document.getElementById('wa-dialog-container');
l.style.display="block" 

var s="";
var lDMUa=document.webaca_banner_height
s+="<div  style='position:absolute;left:0px;top:"+lDMUa+"px;width:100%;height:100%;background-color:#000000;filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5;'></div>"
s+="<div id='wa-dialog-main' style='position:absolute;left:0px;top:"+lDMUa+"px;width:100px;height:100px;' >"
s+="<div style='position:absolute;left:0px;top:0px;width:100px;height:100px;' >";
s+=html_canvas('wa-dialog1',100,100);
s+="</div>"
for(var SfQOY in this.YbSia)
{
s+=this.aPIOY(this.YbSia[SfQOY][2]);
}
s+="<div id='wa-dialog-content' style='position:absolute;left:0px;top:0px;width:100px;" 
s+="overflow:auto;' ></div>"
s+="</div>"
l.innerHTML=s 
WA_exec_callback_opera_compliant(this,this.qFPZf)
}
this.qFPZf=function()
{
registerDynamicCanvas('wa-dialog1');
for(var SfQOY in this.YbSia)
{
this.sHebA(this.YbSia[SfQOY][0])
}
this.qYVYX()
if(this.qQlEg())
{
document.body.scrollLeft=0
document.body.scrollTop=0
}
}
this.intern_closeWin=function()
{
var l=document.getElementById('wa-dialog-container');
l.style.display="none"
WA_Dialog.oXPoV=false
}
this.closeWin=function()
{
this.intern_closeWin()
}
this.cssText1=function()
{
return "font-family:Arial;font-size:15px;color:"+this.eHjoT[3]+";";
}
this.onCustomKeypress=function(kUkNK)
{
if((this.YbSia.length==1)&&(kUkNK==13))
{
this.closeWin()
return true;
}
return false;
}
this.onkeypress=function(kUkNK)
{
return this.onCustomKeypress(kUkNK)
}
this.onkeydown=function(kUkNK)
{
if(kUkNK==27)
{
this.closeWin()
return true;
}
return this.onCustomKeypress(kUkNK) 
}
this.customUpdate=function(){}
this.qQlEg=function()
{
return isIPhone();
}
this.qYVYX=function()
{
var RBpuC=document.webaca_width_page;
var GJEjU=document.webaca_height_page;
var oHLTk=getWindowSize().width
var SvJgf=getWindowSize().height
var duKOc=getWindowFullSize().width
var haCIj=getWindowFullSize().height
var fBaBa=550;
var tDckT=400;
oHLTk=Math.max(oHLTk,fBaBa);
SvJgf=Math.max(SvJgf,tDckT);
if(this.qQlEg())
{
oHLTk=600;
SvJgf=700;
}
this.FZPJL=Math.min(oHLTk*0.9,this.IlpfI_win_width)
this.vxoQD=Math.min(SvJgf*0.9,this.RoGJK)
var ecQPC=document.getElementById('wa-dialog1');
ecQPC.width=this.FZPJL+10
ecQPC.height=this.vxoQD+10
var iIRYP=getWindowScroll().x+(oHLTk-ecQPC.width)/2
var MBiem=getWindowScroll().y+(SvJgf-ecQPC.height)/2
iIRYP=(oHLTk-ecQPC.width)/2
MBiem=(SvJgf-ecQPC.height)/2
iIRYP=Math.max(0,iIRYP)
MBiem=Math.max(0,MBiem)
if(this.qQlEg())
{
iIRYP=0
MBiem=0;
}
var NDKIM=document.getElementById('wa-dialog-main');
html_SetGeometry('wa-dialog-main',iIRYP,MBiem,ecQPC.width,ecQPC.height);
var xJUNw_bg="(0;0;0;"+this.vxoQD*0.25+";"+this.eHjoT[1]+";"+this.eHjoT[2]+")";
var XrVxt=4;
WA_bg('wa-dialog1',this.FZPJL,this.vxoQD,XrVxt,3,this.eHjoT[0],[xJUNw_bg],true,0)
var TJKow=10;
var bTIZN_close=this.rTbPi(-1)
if(bTIZN_close)
{
var ocdoA=this.DkYJu(-1) 
var marginClose=3
html_SetPosition(bTIZN_close,this.FZPJL-ocdoA.width-marginClose+this.hvuEg-1,marginClose+this.hvuEg-1)
}
var IfgGL=this.YbSia.length;
if(this.xRUPg_close_button==true)
{
IfgGL--;
}
var jpKBj=10;
var rrFAK=0;
for(var SfQOY=0;SfQOY<IfgGL;SfQOY++)
{
if(SfQOY>0) rrFAK+=jpKBj;
var tFfdf_but=this.DkYJu(SfQOY);
rrFAK+=tFfdf_but.width;
}
var QNQKa=(this.FZPJL-rrFAK)/2
for(var SfQOY=0;SfQOY<IfgGL;SfQOY++)
{
if(SfQOY>0) QNQKa+=jpKBj;
var bTIZN_div=this.rTbPi(SfQOY);
var tFfdf_but=this.DkYJu(SfQOY);
html_SetPosition(bTIZN_div,QNQKa+this.hvuEg,+this.hvuEg+this.vxoQD-tFfdf_but.height-2*TJKow)
QNQKa+=tFfdf_but.width;
}
var YsdTL=45;
var ATLIv=this.BUTTON_HEIGHT+2*TJKow;
if(IfgGL==0)
{
ATLIv=0;
}
var PgsSD=(this.vxoQD-YsdTL-ATLIv)-TJKow
var WaUSo=document.getElementById('wa-dialog-content');
var uaOVI_content=Math.round(this.FZPJL-2*TJKow)
var PHGtx=Math.round(PgsSD)
this.m_content_lx=uaOVI_content
this.m_content_ly=PHGtx
html_SetGeometry('wa-dialog-content',Math.round(5+(this.FZPJL-uaOVI_content)/2),Math.round(5+YsdTL+(PgsSD-PHGtx)/2),uaOVI_content,PHGtx);
this.customUpdate() 
var FuFbC=document.getElementById('wa-dialog-container');
var OOGKx=haCIj
OOGKx=Math.max(OOGKx,SvJgf) 
var SluQL=duKOc
SluQL=Math.max(SluQL,oHLTk)
if(this.qQlEg())
{
SluQL=Math.max(SluQL,RBpuC)
OOGKx=Math.max(OOGKx,GJEjU)
}
html_SetSize('wa-dialog-container',SluQL,OOGKx);
centerFullPageContainer();
}
this.XMVqE();
}
function centerFullPageContainer()
{
var lrJAP=WA_Dialog.getCurrent() 


var RBpuC=document.webaca_width_page;
var GJEjU=document.webaca_height_page;
var FuFbC=document.getElementById('wa-dialog-container');
if(/opera/i.test(navigator.userAgent))
{
if((FuFbC.style.display=="none")||(FuFbC.style.display=="")) return;
return;
}
var duKOc=getWindowSize().width 
var haCIj=getWindowSize().height
var MBiem_bg=getWindowScroll().y;
var CRODk=lrJAP&&lrJAP.qQlEg();
if(CRODk)
{
MBiem_bg=0
}
MBiem_bg=Math.min(MBiem_bg,GJEjU-haCIj+1)
MBiem_bg=Math.max(MBiem_bg,0)
var wVPTD=getWindowScroll().x;
if(CRODk)
{
wVPTD=0
}
wVPTD=Math.min(wVPTD,RBpuC-duKOc+1)
wVPTD=Math.max(wVPTD,0)
html_SetPosition('wa-dialog-container',wVPTD,MBiem_bg,duKOc,haCIj);
}
function isOperaBrowser()
{
return(/opera/i.test(navigator.userAgent))
}
function WA_exec_callback_opera_compliant(WtCoi,YarDl)
{
if(/opera/i.test(navigator.userAgent))
WA_exec_delayedCallback(WtCoi,YarDl)
else
YarDl.call(WtCoi)
}
function WA_exec_delayedCallback(WtCoi,YarDl)
{
wa_timeout(Delegate.create(WtCoi,YarDl),0);
}
WA_Dialog.getCurrent=function()
{
return WA_Dialog.oXPoV;
}
WA_Dialog.oXPoV=false;
WA_Dialog.resizeUI=function()
{
if(WA_Dialog.oXPoV)
{
var lrJAP=WA_Dialog.oXPoV
if(lrJAP.qQlEg()==false)
{
lrJAP.qYVYX()
}
}
}
WA_Dialog.alert=function(s)
{
var w=new WA_Dialog();
w.YqXRs(s)
}
WA_Dialog.progress=function()
{
var w=new WA_Dialog(false);
w.progress()
}

function getXMLHttpRequest(fct_callback,FIglg)
{
var http_request=false;
if(window.XMLHttpRequest){
http_request=new XMLHttpRequest();
if(http_request.overrideMimeType){
}
}else if(window.ActiveXObject){
try{http_request=new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){
try{http_request=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
}
if(!http_request)
{
alert('Cannot create XMLHTTP instance');
return false;
}
http_request.lddvC_callback=fct_callback
http_request.FIglg=FIglg
http_request.onreadystatechange=function()
{
var req=this 
if(req.readyState==4)
{
this.lddvC_callback(true,this,this.FIglg) 

}
};
return http_request;
}
function makePOSTRequest(url,parameters,callback,YLEpS)
{
var http_request=getXMLHttpRequest(callback,YLEpS);
http_request.open('POST',url,true);
http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
http_request.setRequestHeader("Content-length",parameters.length);
http_request.setRequestHeader("Connection","close");
http_request.send(parameters);
}
function intern_WA_responseForm(hnJZX,DLCaW,FIglg)
{
var result=DLCaW.responseText
var n=result.indexOf("BEGIN_IS_PHP=1")
if(n==-1)
{
WA_Dialog.alert(Translator.tr("Error:No php on server"));
}
else
{
n=result.indexOf("mail_sended=1")
if(n>-1)
{
var XtXYC=FIglg[0] 
WA_Dialog.alert(Translator.tr("Success:Mail sended"));
var form=document.getElementById(XtXYC);
form.reset()
}
else
{
var pubfG="error_string="
n=result.indexOf(pubfG)
if(n>-1)
{
result=result.substring(n+pubfG.length)
n=result.indexOf("END_IS_PHP")
if(n>-1)
{
result=result.substring(0,n)
}
WA_Dialog.alert(result);
}
else
{
WA_Dialog.alert("*error send mail!");
}
}
}
}
function WA_form_action(id_form,action,b_email_is_valid)
{
var form=document.getElementById(id_form);
var poststr=""
for(var i=0;i<form.elements.length;i++)
{
var el=form.elements[i];
el.style.backgroundColor="#ffffff"
if((trimString(el.value).length==0)&&(el.name.indexOf("_mandatory")>-1))
{
el.style.backgroundColor="#ff0000";el.focus();return;
}
var qmSQF=el.value
qmSQF=encodeURI(qmSQF)
qmSQF=qmSQF.replace(/&/g,escape("&")) 
poststr+=el.name.replace("_mandatory","")+"="+qmSQF+"&"
}
if(b_email_is_valid==false)
{
WA_Dialog.alert(Translator.tr("Email have to be filled in order to the form works correctly"));return;
}
if(document.webaca_is_preview)
{
WA_Dialog.alert(Translator.tr("Operation not allowed in preview mode"));return;
}
WA_Dialog.progress();
makePOSTRequest(action,poststr,intern_WA_responseForm,[id_form]);
}
function WA_form_submit(EPaPY)
{
var ffPxv=document.getElementById(EPaPY);
ffPxv.submit() 
}
function QqQIA(hXGIb,FIglg)
{
var kUkNK=FIglg[0]
if(kUkNK==13)
{
var EPaPY=hXGIb+"-form";
var ffPxv=document.getElementById(EPaPY);
for(var i=0;i<ffPxv.elements.length;i++)
{
var uGsij=ffPxv.elements[i];
if((uGsij.type=="textarea")&&(uGsij.hasFocus))
{
return true;
}
}
WA_form_submit(EPaPY);
return false;
}
return true;
}
function WA_addFormDeclaration(hXGIb,Uwmmr)
{
var EPaPY=hXGIb+"-form";
var ffPxv=document.getElementById(EPaPY);
for(var i=0;i<ffPxv.elements.length;i++)
{
var uGsij=ffPxv.elements[i];
if(/^text/.test(uGsij.type))
{
uGsij.hasFocus=false;
uGsij.onfocus=function(){this.hasFocus=true;};
uGsij.onblur=function(){this.hasFocus=false;};
}
}
return WA_addHandler(hXGIb,"keypress",QqQIA)
}
function WA_form_bg(id,lx,ly,arc,fokhk,bord_col,bg,shadow,Ypuji,CJIhu)
{
WA_bg(id,lx,ly,arc,fokhk,bord_col,bg,shadow,Ypuji,1.0,true) 
var jbgbh=CJIhu.x;
var NLmIX=0;
var Hleie=CJIhu.cells
for(var n=0;n<Hleie.length;n++)
{
var NtuDl=Hleie[n]
var arc2=0
lacHA(id,jbgbh,NLmIX+NtuDl.y,CJIhu.w,NtuDl.h,arc2,1,CJIhu.border,[''],false,0,1.0,false)
lacHA(id,jbgbh,NLmIX+NtuDl.y,NtuDl.w,NtuDl.h,arc2,1,"rgba(0,0,0,0)",[CJIhu.bg],false,0,1.0,false)
}
}
function WA_form_reset(id_form)
{
var form=document.getElementById(id_form);
form.reset() 
}
var BrowserDetect={
init:function(){
this.browser=this.searchString(this.dataBrowser);
if(this.browser==undefined)
{
if(navigator.appName.search(/explorer/i)!=-1) this.browser="Explorer";
}
if(this.browser==undefined)
{
this.browser="An unknown browser";
}
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var dataString=data[i].string;var dataProp=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(dataString){
if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(dataProp)
return data[i].identity;
}
},searchVersion:function(dataString){
var index=dataString.indexOf(this.versionSearchString);
if(index==-1) return;
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},
dataBrowser:[
{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},
{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}
],dataOS:[
{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}
]
};
BrowserDetect.init();
function RGBColor(RYuWN)
{
this.ok=false;this.a=1.0;
if(RYuWN.charAt(0)=='#'){RYuWN=RYuWN.substr(1);}
RYuWN=RYuWN.replace(/ /g,'');
RYuWN=RYuWN.toLowerCase();
var iSXmF=[
{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,2}\.*\d{0,2})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3]),parseFloat(""+bits[4]) ];}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])];}},{re:/^(\w{2})(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16),Math.round(parseInt(bits[4],16)*100/255)/100 ];}},{re:/^(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16) ];}}
];
for(var i=0;i<iSXmF.length;i++){
var WcthD=iSXmF[i].re;
var temuI=iSXmF[i]._process;
var PDrMd=WcthD.exec(RYuWN);
if(PDrMd){
var IlNgt=temuI(PDrMd);
this.r=IlNgt[0];this.g=IlNgt[1];this.b=IlNgt[2];this.a=IlNgt[3];
this.ok=true;
}
}
this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.a=(this.a>1||isNaN(this.a))?1:((this.a<0)?0:this.a);
this.toRGB=function()
{
if(this.a==1)return 'rgb('+this.r+', '+this.g+', '+this.b+')';
return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
}
this.toRGB_opaque=function()
{
return 'rgb('+this.r+', '+this.g+', '+this.b+')';
}
this.toHsl=function(){
var r=this.r;var g=this.g;var b=this.b;r/=255,g/=255,b/=255;
var max=Math.max(r,g,b),min=Math.min(r,g,b);
var h,s,l=(max+min)/2;
if(max==min){h=s=0;
}else{
var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);
switch(max){
case r:h=(g-b)/d+(g<b?6:0);break;
case g:h=(b-r)/d+2;break;
case b:h=(r-g)/d+4;break;
}
h/=6;
}
return [h,s,l];
}
this.ngKtE=function(p,q,t)
{
if(t<0) t+=1;if(t>1) t-=1;if(t<1/6) return p+(q-p)*6*t;if(t<1/2) return q;if(t<2/3) return p+(q-p)*(2/3-t)*6;
return p;
};
this.fromHsl=function(h,s,l){
if(l>1.0)l=1.0
var r,g,b;
if(s==0){r=g=b=l;
}else{
var q=l<0.5?l*(1+s):l+s-l*s;
var p=2*l-q;
r=this.ngKtE(p,q,h+1/3);g=this.ngKtE(p,q,h);b=this.ngKtE(p,q,h-1/3);
}
r=r*255;g=g*255;b=b*255;
r=Math.round(r);g=Math.round(g);b=Math.round(b);
if(r<0)r=-r;if(g<0)g=-g;if(b<0)b=-b
this.r=r;this.g=g;this.b=b;
};
}
function xsUOK(jswCl_event,FIglg)
{
if(document.wa_global_handlers!=undefined)
{
var hXGIb=WA_focused_element()
if(hXGIb)
{
var lddvC=document.wa_global_handlers[hXGIb+"-"+jswCl_event] 
if(lddvC) return lddvC([hXGIb],FIglg)
}
}
return true;
}
function jKmfG(e)
{
if(window.event){return e.keyCode;}
else 
if(e.which) return  e.which;
return-1;
}
function WA_onkeypress(e)
{
var kUkNK=jKmfG(e);
if(WA_Dialog.oXPoV)
{
if(WA_Dialog.oXPoV.onkeypress(kUkNK))
{
return false;
}
}
var sXSTo=xsUOK("keypress",[kUkNK]);
return sXSTo
}
function WA_ondblclick(e)
{
return xsUOK("dblclic",[""]);
}
function WA_onkeydown(e)
{
var kUkNK=jKmfG(e)
if(WA_Dialog.oXPoV)
{
if(WA_Dialog.oXPoV.onkeydown(kUkNK))
{
return false;
}
}
if(kUkNK==13) return true;

if(wa_global_photo_album&&wa_global_photo_album.fullpage_object)
{
var WtCoi=wa_global_photo_album.fullpage_object
return WtCoi.onFullScreenKeydown(kUkNK) 
}
return xsUOK("keydown",[kUkNK]);
}
function WA_genericMouseWheelHandler(e)
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
var b_default=false;
if(delta)
{
if(document.wa_global_handlers!=undefined)
{
var hXGIb=this.id
var lddvC=document.wa_global_handlers[hXGIb+"-mousewheel"]
if(lddvC)
{
if(lddvC([hXGIb],[delta]))
{
b_default=true;
}
}
}
}
if(b_default)
if(e.preventDefault)
e.preventDefault();
e.returnValue=!b_default;
}
function WA_addHandler(hXGIb,jswCl_event,YarDl)
{
if(document.wa_global_handlers==undefined) document.wa_global_handlers=new Array()
if(jswCl_event=="mousewheel")
{
var YjIfp=document.getElementById(hXGIb);
if(YjIfp.addEventListener)
YjIfp.addEventListener('DOMMouseScroll',WA_genericMouseWheelHandler,false);
YjIfp.onmousewheel=WA_genericMouseWheelHandler
}
document.wa_global_handlers[hXGIb+"-"+jswCl_event]=YarDl
}
function WA_loadPhotoAlbum(hXGIb,nPjEJ,tFfdf,hXGIb_modif)
{
if(typeof(wa_global_photo_album[hXGIb])=="undefined")
{
var o=new Array();
o.src_folder=nPjEJ
o.size_container=tFfdf
o.id_modif=hXGIb_modif
wa_global_photo_album[hXGIb]=o;
}
}
function WA_focused_element()
{
return document.wa_global_focused_element
}
function WA_focus(WtCoi)
{
document.wa_global_focused_element=WtCoi.id
}
function WA_loadScript(url,callback,params)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){callback(params,false);}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
callback(params,true);
}
}
}else
{
e.onload=function(){
if(/opera/i.test(navigator.userAgent))
wa_timeout(callback,0,params,true);
else
callback(params,true);
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function WA_blog_declare(hXGIb_blog,hXGIb_button,Bbojj)
{
if(!document.wa_global_blogs_elements)document.wa_global_blogs_elements=new Array()
if(!document.wa_global_blogs_buttons)document.wa_global_blogs_buttons=new Array()
if(!document.wa_global_blogs_elements[hXGIb_button])document.wa_global_blogs_elements[hXGIb_button]=new Array()
document.wa_global_blogs_elements[hXGIb_button].id_blog=hXGIb_blog
document.wa_global_blogs_elements[hXGIb_button].has_email=Bbojj
}
function WA_addSearchHandler(hXGIb)
{
return WA_addHandler(hXGIb,"keypress",LrmoS)
}
function LrmoS(hXGIb,FIglg)
{
var kUkNK=FIglg[0]
if(kUkNK==13)
{
var hXGIb_input=hXGIb+"-search-input";
WA_onSearch(hXGIb_input)
return false;
}
return true;
}
function WA_declareSearchIndex(ZXrqn,VKguI)
{
document.const_wa_search_js=ZXrqn
document.const_wa_search_index_js=VKguI
}
function WA_onSearch(hXGIb_input)
{
var tYTQK=document.getElementById(hXGIb_input);
if(document.wa_search_js_loaded==true)
{
WA_openSearchDialog(tYTQK,document.const_wa_search_index_js)
}
else
{
WA_Dialog.progress();
FnkCI(tYTQK)
}
}
function RRASh(FIglg)
{
document.wa_search_js_loaded=true
WA_openSearchDialog(FIglg[0],document.const_wa_search_index_js)
}
function FnkCI(tYTQK_field)
{
WA_loadScript(document.const_wa_search_js,RRASh,[tYTQK_field])
}
function QGZqb(offset){
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function WA_GetCookie(name)
{
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while(i<clen)
{
var j=i+alen;
if(document.cookie.substring(i,j)==arg)
return QGZqb(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0) break;
}
return "";
}
function WA_SetCookie(name,value){
var argv=WA_SetCookie.arguments;
var argc=WA_SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}
function WA_bg_menu(hXGIb)
{
var vpJBE=document.wa_global_menu_declaration[hXGIb]
WA_bg(hXGIb,vpJBE.root_lx,vpJBE.root_ly,vpJBE.root_corner,vpJBE.root_border,vpJBE.root_col_border,[vpJBE.root_bg],false,0)
var uGsij=document.getElementById(vpJBE.id)
if(!uGsij)return;
var c=uGsij.getContext('2d');
c.lineWidth=1
c.strokeStyle=vpJBE.root_col_separator
var jxkbQ=0.5;

var tcLVk=vpJBE.root_sizes.length
if(vpJBE.root_extend==false)
{
tcLVk--;
}
var jKPmQ=3;
for(var i=0;i<tcLVk;i++)
{
var tFfdf=vpJBE.root_sizes[i] 

c.beginPath();
if(vpJBE.root_vertical==false)
{
jxkbQ+=(tFfdf-1)
c.moveTo(jxkbQ,jKPmQ)
c.lineTo(jxkbQ,vpJBE.root_ly-jKPmQ)
}
else
{
jxkbQ+=(tFfdf)
c.moveTo(jKPmQ,jxkbQ-1,0)
c.lineTo(vpJBE.root_lx-jKPmQ,jxkbQ-1)
}
c.closePath();
c.stroke()
}
}
function WA_declare_menu(hXGIb,vpJBE)
{
if(!document.wa_global_menu_declaration)document.wa_global_menu_declaration=new Array();
vpJBE.id=hXGIb
document.wa_global_menu_declaration[hXGIb]=vpJBE
WA_bg_menu(hXGIb)
}
function WA_declareMarket(hXGIb,dlUuS,hXGIb_modif)
{
if(typeof(wa_global_market.markets[dlUuS])=="undefined")
{
var o=new Array();
o.src_folder=dlUuS
o.id_modif=hXGIb_modif 

o.id=hXGIb
wa_global_market.markets[dlUuS]=o;
}
}
function WA_button_market_declare(hXGIb,kgaha)
{
if(!document.wa_global_button_market_declaration)document.wa_global_button_market_declaration=new Array();
document.wa_global_button_market_declaration[hXGIb]=kgaha
}
function tiGdv(c,img,iIRYP,MBiem,dNVjm,uAOQk,NWNuM,niEXp,ZBSwI)
{
c.globalAlpha=niEXp
if(ZBSwI) c.clearRect(0,0,dNVjm,uAOQk) 
if(niEXp==0)return;
if(NWNuM)
{
c.drawImage(img,NWNuM.x,NWNuM.y,NWNuM.width,NWNuM.height,iIRYP,MBiem,dNVjm,uAOQk)
}
else
{
c.drawImage(img,iIRYP,MBiem,dNVjm,uAOQk)
}
}
function WA_drawImage(id,BvFKH,iIRYP,MBiem,dNVjm,uAOQk,NWNuM,niEXp,ZBSwI)
{
if(ZBSwI==undefined)ZBSwI=true;
if(niEXp==undefined)niEXp=1.0;
var el=document.getElementById(id)
if(!el)return
var c=el.getContext('2d');
c.shadowOffsetX=0;c.shadowOffsetY=0;c.shadowBlur=0;
if(c.old_src==BvFKH)
{
tiGdv(c,c.EnoCc,iIRYP,MBiem,dNVjm,uAOQk,NWNuM,niEXp,ZBSwI)
return;
}
var img=new Image();
img.TgcxN=el.TgcxN
img.onload=function()
{
c.old_src=BvFKH
c.EnoCc=this;
tiGdv(c,this,iIRYP,MBiem,dNVjm,uAOQk,NWNuM,niEXp,ZBSwI)
}
img.src=BvFKH;
}

-->
