<!--

function irHtw(FIglg)
{
var hXGIb=FIglg[0]
var BpOEd=wa_global_market.markets[hXGIb]
var hhgKS=new FoxTr(BpOEd)
BpOEd.obj=hhgKS
hhgKS.uYAGC()
var BgiCJ=document.wa_global_query_info
if(BgiCJ)
{
var LFmQt="wa-id-"+hXGIb;
if(LFmQt==BgiCJ.m_unid)
{
WA_showMarketProduct(hXGIb,BgiCJ.m_index_item)
return;
}
}
}
function WA_loadMarket()
{
for(var kUkNK in wa_global_market.markets)
{
var hhgKS=wa_global_market.markets[kUkNK]
if(hhgKS)
{
var NCFRk=Translator.m_lang_for_filename
if(NCFRk.length>0)NCFRk="_"+NCFRk;
WA_loadScript(hhgKS.src_folder+'/market-definition'+NCFRk+'.js?v='+hhgKS.id_modif,irHtw,[kUkNK]);
}
}
WA_refreshNumberMarketItemsInCart()
}
function WA_basicFormatPrice(v)
{
v=Math.round(v*100)/100
var result="";
var bqgnK=".";
var s=v+"";
s=s.replace(/,/g,".")
var n=s.indexOf(".");
if(n>-1)
{
s=s+"00";
s=s.substring(0,n+3);
}
else
{
s+=bqgnK+"00"
}
s=s.replace(/\./g,CONST_WA_GLOBAL_SETTINGS.currency_decimal_symbol)
result=s;
return result;
}
function WA_formatPrice(v)
{
var plNEr=CONST_WA_GLOBAL_SETTINGS.currency_mnemonic 
var result=WA_basicFormatPrice(v);
if((CONST_WA_GLOBAL_SETTINGS.currency_code=="GBP")||(CONST_WA_GLOBAL_SETTINGS.currency_code=="USD"))
{
result=plNEr+result;
}
else
if(CONST_WA_GLOBAL_SETTINGS.currency_code=="BRL")
{
result=plNEr+" "+result;
}
else
if(CONST_WA_GLOBAL_SETTINGS.currency_code=="F CFA")
{

if(Math.floor(v)==v)
{
result=""+v;
}
result=result+" "+plNEr;
}
else
{
result=result+" "+plNEr;
}
return result;
}
function OfMFL(c,ax,ay,bx,by,dashLength){
var dx=ax-bx;
var dy=ay-by;
var angle=Math.atan2(dy,dx)/(Math.PI/180)+90;
if(angle>180) angle-=360;
c.moveTo(ax,ay);
for(var i=0;i*dashLength<Math.sqrt(dx*dx+dy*dy);i++){
var cx=ax-(i*dashLength)*Math.sin(angle*(Math.PI/180));
var cy=ay+(i*dashLength)*Math.cos(angle*(Math.PI/180));
if(i%2==0){c.lineTo(cx,cy);
}else{
c.moveTo(cx,cy);
}
}
}
function KgFKX(hhgKS,usdSF,hMVQm,hXGIb)
{
this.jSDQB=function()
{
var BDRBZ=""
var KTmhU=false;
var tTZLU=this.market.info.folder;

var ZHIdT="WA_showMarketProduct('"+tTZLU+"',"+hMVQm+")"
KTmhU=new WA_GraphicElement(this.hXGIb+"-sep",60,false)
KTmhU.vpJBE=this.vpJBE
KTmhU.draw=function()
{
var vpJBE=this.vpJBE
var sHKHI=vpJBE.prod_global_separator_pt1
var NvJxj=vpJBE.prod_global_separator_pt2
var uGsij=document.getElementById(this.canvasId())
var FJkJs=uGsij.getContext('2d');
FJkJs.strokeStyle=vpJBE.prod_global_separator_col
OfMFL(FJkJs,sHKHI.x-0.5,sHKHI.y+0.5,NvJxj.x-0.5,NvJxj.y+0.5,2)
FJkJs.stroke()
}
KTmhU.setOnClick(ZHIdT);
var hFPBi=this.vpJBE.r_prod_inner.clone()
hFPBi.translate(this.LoPhw.x,this.LoPhw.y)
KTmhU.setRect(hFPBi.x,hFPBi.y,hFPBi.width+1,hFPBi.height+1)
BDRBZ+=KTmhU.toHtml()
this.BwEar.push(KTmhU) 

KTmhU=new WA_GraphicElement(this.hXGIb+"-zone0",10,false)
KTmhU.vpJBE=this.vpJBE
KTmhU.draw=function()
{
var vpJBE=this.vpJBE
WA_bg(this.canvasId(),this.rect().width,this.rect().height,vpJBE.prod_global_corner,1,vpJBE.prod_global_border_col,[vpJBE.prod_global_gradient],this.shadow())
}
var hFPBi=this.vpJBE.r_prod_inner.clone()
hFPBi.translate(this.LoPhw.x,this.LoPhw.y)
KTmhU.setRect(hFPBi.x,hFPBi.y,hFPBi.width+1,hFPBi.height+1)
BDRBZ+=KTmhU.toHtml()
this.BwEar.push(KTmhU)
if(this.vpJBE.lay_rect_desc.isValid())
{


KTmhU=new WA_GraphicElement(this.hXGIb+"-zone1",25,false)
KTmhU.vpJBE=this.vpJBE
KTmhU.draw=function()
{
var vpJBE=this.vpJBE
WA_bg(this.canvasId(),this.rect().width,this.rect().height,vpJBE.prod_desc_corner,1,vpJBE.prod_desc_border_col,[vpJBE.prod_desc_gradient],this.shadow())
}
hFPBi=this.vpJBE.lay_rect_desc.clone()
hFPBi.translate(this.LoPhw.x,this.LoPhw.y)
KTmhU.setRect(hFPBi.x,hFPBi.y,hFPBi.width+1,hFPBi.height+1)
BDRBZ+=KTmhU.toHtml()
this.BwEar.push(KTmhU) 
hFPBi=this.vpJBE.lay_rect_desc_inner.clone()
hFPBi.translate(this.LoPhw.x,this.LoPhw.y)
BDRBZ+="<div style=\"position:absolute;z-index:50;";
BDRBZ+="left:"+hFPBi.x+"px;top:"+hFPBi.y+"px;";
BDRBZ+="cursor:pointer;";
BDRBZ+="width:"+hFPBi.width+"px;"
BDRBZ+="height:"+hFPBi.height+"px;";
BDRBZ+="font-family:"+this.vpJBE.prod_desc_font_family+";"
BDRBZ+="font-size:"+this.vpJBE.prod_desc_font_size+"px;"
BDRBZ+="color:"+this.vpJBE.prod_desc_col+";"
BDRBZ+="margin:3px;"
BDRBZ+="padding:0px;"
BDRBZ+="\" ";
BDRBZ+=">";
BDRBZ+="<div style=\"";
BDRBZ+="font-weight:bold;"
BDRBZ+="\">";
BDRBZ+=this.usdSF.title
BDRBZ+="</div>";
BDRBZ+="<div style=\"";
BDRBZ+="\">";
BDRBZ+=this.usdSF.sub_title
BDRBZ+="</div>";
BDRBZ+="</div>";
}
if(this.vpJBE.lay_rect_price.isValid())
{

KTmhU=new WA_GraphicElement(this.hXGIb+"-zone2",25,false)
KTmhU.vpJBE=this.vpJBE
KTmhU.draw=function()
{
var vpJBE=this.vpJBE
WA_bg(this.canvasId(),this.rect().width,this.rect().height,vpJBE.prod_price_corner,1,vpJBE.prod_price_border_col,[vpJBE.prod_price_gradient],this.shadow())
}
hFPBi=this.vpJBE.lay_rect_price.clone()
hFPBi.translate(this.LoPhw.x,this.LoPhw.y) 
KTmhU.setRect(hFPBi.x+1,hFPBi.y+1,hFPBi.width,hFPBi.height)
BDRBZ+=KTmhU.toHtml()
this.BwEar.push(KTmhU)
BDRBZ+="<div style=\"position:absolute;z-index:50;";
BDRBZ+="left:"+hFPBi.x+"px;top:"+hFPBi.y+"px;";
BDRBZ+="width:"+hFPBi.width+"px;";
BDRBZ+="height:"+hFPBi.height+"px;";
BDRBZ+="line-height:"+hFPBi.height+"px;";
BDRBZ+="font-family:"+this.vpJBE.prod_desc_font_family+";"
BDRBZ+="font-size:"+this.vpJBE.prod_price_font_size+"px;"
BDRBZ+="color:"+this.vpJBE.prod_price_col+";"
BDRBZ+="text-align:center;"
BDRBZ+="\">";
if(this.usdSF.unavail)
{
BDRBZ+="/" 
}
else
{
BDRBZ+=WA_formatPrice(this.usdSF.price)
}
BDRBZ+="</div>";
}
if(this.vpJBE.lay_rect_img.isValid())
{

KTmhU=new WA_GraphicElement(this.hXGIb+"-zone3",25,this.vpJBE.img_has_shadow)
KTmhU.vpJBE=this.vpJBE
KTmhU.usdSF=this.usdSF
KTmhU.draw=function()
{
var vpJBE=this.vpJBE
var usdSF=this.usdSF
if(usdSF.img_thumb.length>0)
{
if(this.shadow())
{
WA_bg(this.canvasId(),this.tFfdf_thumb.width,this.tFfdf_thumb.height,0,0,'',["#000000"],this.shadow(),0,1.0,false)
}
}
else
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,0,0,'',["rgba(60,60,60,0.2)"],false)
}
}
hFPBi=this.vpJBE.lay_rect_img.clone()
hFPBi.translate(this.LoPhw.x,this.LoPhw.y)
if(this.usdSF.img_thumb.length>0)
{
var MExGB=new Size(hFPBi.width+1,hFPBi.height+1)
KTmhU.tFfdf_thumb=this.usdSF.size_thumb.clone()
if(this.vpJBE.crop_thumb)
{
KTmhU.tFfdf_thumb=MExGB
}
else
{
KTmhU.tFfdf_thumb.scale(MExGB,true)
}
var GbFro=Math.round((hFPBi.width-KTmhU.tFfdf_thumb.width)/2);
var jCaML=Math.round((hFPBi.height-KTmhU.tFfdf_thumb.height)/2);
hFPBi.translate(GbFro,jCaML)
KTmhU.setRect(hFPBi.x,hFPBi.y,KTmhU.tFfdf_thumb.width,KTmhU.tFfdf_thumb.height)
}
else
{
KTmhU.setRect(hFPBi.x,hFPBi.y,hFPBi.width+1,hFPBi.height+1)
}
if(this.usdSF.img_thumb.length>0)
{
BDRBZ+="<div style=\"position:absolute;z-index:100;";
BDRBZ+="left:"+hFPBi.x+"px;top:"+hFPBi.y+"px;\" >";
BDRBZ+="<a href=\"javascript:"+ZHIdT+"\" >";
BDRBZ+="<img border=0 src='"+this.usdSF.img_thumb+"' width='"+KTmhU.tFfdf_thumb.width+"px' height='"+KTmhU.tFfdf_thumb.height+"px'>"
BDRBZ+="</a>"
BDRBZ+="</div>"
}
BDRBZ+=KTmhU.toHtml()
this.BwEar.push(KTmhU)
}
return BDRBZ;
}
this.ZgHwQ=function()
{
for(var i=0;i<this.BwEar.length;i++)
{
var KTmhU=this.BwEar[i]
KTmhU.registerDynamicCanvas()
}
}
this.hXGIb=hXGIb;
this.id=hXGIb;
this.index=hMVQm
this.usdSF=usdSF;
this.market=hhgKS;
this.vpJBE=hhgKS.vpJBE
this.BwEar=new Array()
}
function FoxTr(XlGIL)
{
this.uYAGC=function()
{
var dPjQi="market-main-"+this.hXGIb
var cjVYo=html_getLayer(dPjQi)
var jAqIA=this.wVqtH.products
var DAFUm=0;
var PuPSm=0;
var BDRBZ=""
var slrbg=0;
var fMVYQ=0;
var vkmGH=this.vpJBE.r_prod 
for(var i=0;i<jAqIA.length;i++)
{
var usdSF=jAqIA[i]
var uuJAQ=new KgFKX(this,usdSF,i,this.hXGIb+"prod"+i)
usdSF.obj=uuJAQ
uuJAQ.LoPhw=new Point(DAFUm,PuPSm)
BDRBZ+=uuJAQ.jSDQB()
fMVYQ++;
if(fMVYQ==this.vpJBE.cols)
{
fMVYQ=0;
slrbg++;
PuPSm+=vkmGH.height
DAFUm=0;
}
else
{
DAFUm+=vkmGH.width
}
}
cjVYo.innerHTML=BDRBZ
WA_exec_callback_opera_compliant(this,this.qYVYX)
}
this.qYVYX=function()
{
var jAqIA=this.wVqtH.products
for(var i=0;i<jAqIA.length;i++)
{
var usdSF=jAqIA[i]
usdSF.obj.ZgHwQ()
}
}
this.struct=XlGIL;
this.XlGIL=XlGIL;
this.hXGIb=XlGIL.id;
this.id=XlGIL.id;
this.wVqtH=XlGIL.info
this.info=XlGIL.info
this.vpJBE=XlGIL.info.design
}
function WA_loadScriptDlgMarket(PkgAu,hXGIb,kkSBo)
{
if(document.wa_dlg_market_js_loaded==true)
{
ECVov([PkgAu,hXGIb,kkSBo])
return;
}
WA_Dialog.progress();
WA_loadScript('wa_dlg_emarket.js?v='+urlAntiCacheForPreview()+wa_global_market.id_modif_dlg_js,ECVov,[PkgAu,hXGIb,kkSBo]);
}
function WA_showMarketCart()
{
WA_loadScriptDlgMarket("show_cart")
}
function WA_showMarketProduct(hXGIb,kkSBo)
{
WA_loadScriptDlgMarket("show_prod",hXGIb,kkSBo)
}
function ECVov(FIglg)
{
document.wa_dlg_market_js_loaded=true;
var PkgAu=FIglg[0];
if(PkgAu=="show_cart") WA_displayDialogMarketCart()
if(PkgAu=="show_prod") WA_displayDialogMarketProduct(FIglg[1],FIglg[2])
}
function WA_getNumberMarketItemsInCart()
{
var WtCoi=parseInt(WA_GetCookie("crbst-card-nb_items"))
if(isNaN(WtCoi)) return 0;
return WtCoi;
}
function gvVjY(PkgAu,kgaha)
{
var cjVYo=html_getLayer(PkgAu)
if(cjVYo)
{
if(!kgaha)kgaha=Translator.tr("My card\u0020(%) article(s)");
var WaUSo=kgaha
WaUSo=WaUSo.replace(/%/g,WA_getNumberMarketItemsInCart())
cjVYo.innerHTML=WaUSo
}
}
function WA_refreshNumberMarketItemsInCart()
{
for(var PkgAu in document.wa_global_button_market_declaration)
{
var kgaha=document.wa_global_button_market_declaration[PkgAu]
if(PkgAu.indexOf("market-cart-link")==0)
{
gvVjY(PkgAu,kgaha)
}
else
{
var mTDVf=html_getLayer(PkgAu+"-div0"+"-text")
if(!mTDVf)mTDVf=PkgAu+"-div0"
var OulUc=html_getLayer(PkgAu+"-div1"+"-text")
if(!OulUc)OulUc=PkgAu+"-div1"
gvVjY(mTDVf,kgaha)
gvVjY(OulUc,kgaha)
}
}
}

-->
