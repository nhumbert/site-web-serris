<!--

var evVBR=0;
var vcSmk=1;
var gBUhM=2;
var hKtEQ=0;
var bZAHq=1;
var NXLAt=2;
var NBpju=0;
var YnuvA=1;
var NBwqx=false;
var CAwoM=[["Alabama","AL"],["Alaska","AL"],["Arizona","AZ"],["Arkansas","AR"],["California","CA"],["Colorado","CO"],["Connecticut","CT"],["District of columbia","DC"],["Delaware","DE"],["Florida","FL"],["Georgia","GA"],["Hawaii","HI"],["Idaho","ID"],["Illinois","IL"],["Indiana","IN"],["Iowa","IA"],["Kansas","KS"],["Kentucky","KY"],["Louisiana","LA"],["Maine","ME"],["Maryland","MD"],["Massachusetts","MA"],["Michigan","MI"],["Minnesota","MN"],["Mississippi","MS"],["Missouri","MO"],["Montana","MT"],["Nebraska","NE"],["Nevada","NV"],["New Hampshire","NH"],["New Jersey","NJ"],["New Mexico","NM"],["New York","NY"],["North Carolina","NC"],["North Dakota","ND"],["Ohio","OH"],["Oklahoma","OK"],["Oregon","OR"],["Pennsylvania","PA"],["Rhode Island","RI"],["South Carolina","SC"],["South Dakota","SD"],["Tennessee","TN"],["Texas","TX"],["Utah","UT"],["Vermont","VT"],["Virginia","VA"],["Washington","WA"],["West Virginia","WV"],["Wisconsin","WI"],["Wyoming","WY"]];
var obosV=[["Alberta","AL"],["British Columbia","BC"],["Manitoba","MB"],["New Brunswick","NB"],["Newfoundland and Labrador","NF"],["Northwest Territories","NT"],["Nova Scotia","NS"],["Nunavut","NU"],["Ontario","ON"],["Prince Edward Isl.","PE"],["Quebec","QC"],["Saskatchewan","SK"],["Yukon Territory","YU"]];
var pCaEB=[["Acre","AC"],["Alagoas","AL"],["Amapá","AP"],["Amazonas","AM"],["Bahia","BA"],["Ceará","CE"],["Espírito Santo","ES"],["Goiás","GO"],["Maranhão","MA"],["Mato Grosso","MT"],["Mato Grosso do Sul","MS"],["Minas Gerais","MG"],["Pará","PA"],["Paraíba","PB"],["Paraná","PR"],["Pernambouc","PE"],["Piauí","PI"],["Rio de Janeiro","RJ"],["Rio Grande do Norte","RN"],["Rio Grande do Sul","RS"],["Rondônia","RO"],["Roraima","RR"],["Santa Catarina","SC"],["São Paulo","SP"],["Sergipe","SE"],["Tocantins","TO"],["District fédéral","DF"]];
function MD5(string){
function RotateLeft(lValue,iShiftBits){
return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));
}
function AddUnsigned(lX,lY){
var lX4,lY4,lX8,lY8,lResult;
lX8=(lX&0x80000000);
lY8=(lY&0x80000000);
lX4=(lX&0x40000000);
lY4=(lY&0x40000000);
lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);
if(lX4&lY4){
return(lResult^0x80000000^lX8^lY8);
}
if(lX4|lY4){
if(lResult&0x40000000){
return(lResult^0xC0000000^lX8^lY8);
}else{
return(lResult^0x40000000^lX8^lY8);
}
}else{
return(lResult^lX8^lY8);
}
}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function GG(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function HH(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function II(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function ConvertToWordArray(string){
var lWordCount;
var lMessageLength=string.length;
var lNumberOfWords_temp1=lMessageLength+8;
var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;
var lNumberOfWords=(lNumberOfWords_temp2+1)*16;
var lWordArray=Array(lNumberOfWords-1);
var lBytePosition=0;
var lByteCount=0;
while(lByteCount<lMessageLength){
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));
lByteCount++;
}
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);
lWordArray[lNumberOfWords-2]=lMessageLength<<3;
lWordArray[lNumberOfWords-1]=lMessageLength>>>29;
return lWordArray;
};
function WordToHex(lValue){
var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
for(lCount=0;lCount<=3;lCount++){
lByte=(lValue>>>(lCount*8))&255;
WordToHexValue_temp="0"+lByte.toString(16);
WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
}
return WordToHexValue;
};
function Utf8Encode(string){
string=string.replace(/\r\n/g,"\n");
var utftext="";
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext+=String.fromCharCode(c);
}
else if((c>127)&&(c<2048)){
utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128);
}
else{
utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128);
}
}
return utftext;
};
var x=Array();
var k,AA,BB,CC,DD,a,b,c,d;
var S11=7,S12=12,S13=17,S14=22;
var S21=5,S22=9,S23=14,S24=20;
var S31=4,S32=11,S33=16,S34=23;
var S41=6,S42=10,S43=15,S44=21;
string=Utf8Encode(string);
x=ConvertToWordArray(string);
a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;
for(k=0;k<x.length;k+=16){
AA=a;BB=b;CC=c;DD=d;
a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);
d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);
c=FF(c,d,a,b,x[k+2],S13,0x242070DB);
b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);
a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);
d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);
c=FF(c,d,a,b,x[k+6],S13,0xA8304613);
b=FF(b,c,d,a,x[k+7],S14,0xFD469501);
a=FF(a,b,c,d,x[k+8],S11,0x698098D8);
d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);
c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);
d=GG(d,a,b,c,x[k+6],S22,0xC040B340);
c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);
a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);
d=GG(d,a,b,c,x[k+10],S22,0x2441453);
c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);
a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);
d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);
b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);
a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);
c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);
b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);
d=HH(d,a,b,c,x[k+8],S32,0x8771F681);
c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);
d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);
c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);
b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);
c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);
b=HH(b,c,d,a,x[k+6],S34,0x4881D05);
a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);
d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);
a=II(a,b,c,d,x[k+0],S41,0xF4292244);
d=II(d,a,b,c,x[k+7],S42,0x432AFF97);
c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
b=II(b,c,d,a,x[k+5],S44,0xFC93A039);
a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);
c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
b=II(b,c,d,a,x[k+1],S44,0x85845DD1);
a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);
d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
c=II(c,d,a,b,x[k+6],S43,0xA3014314);
b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
a=II(a,b,c,d,x[k+4],S41,0xF7537E82);
d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);
b=II(b,c,d,a,x[k+9],S44,0xEB86D391);
a=AddUnsigned(a,AA);
b=AddUnsigned(b,BB);
c=AddUnsigned(c,CC);
d=AddUnsigned(d,DD);
}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
return temp.toLowerCase();
}
function WA_marketRemoveItem(kkSBo)
{
GsZmP().XRAPo(kkSBo)
var uaOVI=WA_Dialog.getCurrent();
uaOVI.MPdOh()
}
function GsZmP()
{
if(document.wa_global_settings_market==undefined)document.wa_global_settings_market=new aHYrk()
return document.wa_global_settings_market;
}
function CvDYE()
{
this.nJBCV=function()
{
return this.ACKjb+"-"+this.FvOCe_index
}
this.heVrf=function(usdSF,hMVQm)
{
var iNMKO="crbst_market_";
this.FvOCe=usdSF.obj.market.info.folder.substring(iNMKO.length);
this.FvOCe_index=usdSF.obj.index;
this.FvOCe_modif=usdSF.obj.market.info.critical_id_modif
this.ACKjb=usdSF.obj.market.info.folder
this.heQgW=1;
this.VPxcX=usdSF.title;
this.EftCk=usdSF.price;
this.Mhlqj=usdSF.weight;
this.sgLtT=usdSF.code_product;
}
this.eBJvp=function(usdSF,hMVQm)
{
this.VPxcX=usdSF.title;
this.EftCk=usdSF.price;
this.Mhlqj=usdSF.weight;
this.sgLtT=usdSF.code_product;
}
this.hwCmL=function()
{
var s="";
s+=this.nJBCV();
if(this.m_opt_vals)
for(var i=0;i<this.m_opt_vals.length;i++)
{
var qmSQF=this.m_opt_vals[i]
if(qmSQF!=-1) s+="/"+qmSQF;
}
return s;
}
this.JZtQs=function()
{
var val="";
val+="j="+this.FvOCe+",";
val+="i="+this.FvOCe_index+",";
val+="m="+this.FvOCe_modif+",";
val+="q="+this.heQgW+",";
if(this.m_opt_vals)
{
for(var i=0;i<this.m_opt_vals.length;i++)
{
val+="o"+i+"=";
var uPrWh=this.m_opt_vals[i]
if(uPrWh>-1)
val+=uPrWh
else
val+=""
val+=","
}
}
return val;
}
this.mdhTs=function(map,k)
{
var v=map[k];
if(v=="undefined") return "";
return v;
}
this.eWbiv=function(map)
{
this.FvOCe=this.mdhTs(map,"j");
if(this.FvOCe=="") return false;
this.FvOCe_index=this.mdhTs(map,"i");
this.FvOCe_modif=this.mdhTs(map,"m");
this.heQgW=parseInt(map["q"]);
this.m_opt_vals=new Array();
for(var i=0;i<3;i++)
{
var SatSF_val=parseInt(map["o"+i]);
if(isNaN(SatSF_val))SatSF_val=-1;
this.m_opt_vals.push(SatSF_val);
}
return true;
}
this.NNLwv=function(s,sep_group,sep_val)
{
if(sep_group==null)sep_group=",";
if(sep_val==null)sep_val="=";
var m_array=new Array();
var tab=s.split(sep_group);
for(var i=0;i<tab.length;i++)
{
var tab3=tab[i].split(sep_val);
if(tab3.length==2)m_array[tab3[0]]=tab3[1];
}
return m_array;
}
this.BPMHE=function(BDRBZ)
{
var Ljcob=this.NNLwv(BDRBZ);
return this.eWbiv(Ljcob);
}
this.dKgff=function()
{
return AjcHI(this.usdSF,this.m_opt_vals);
}
}
function rANdE(LHkbZ)
{
var BDRBZ="";
if(LHkbZ=="custom")
{
LHkbZ="credit_card";
}
if(LHkbZ.indexOf("custom_script_")>-1)
{
var s_custom=LHkbZ;
s_custom=s_custom.replace(/custom_script_/g,"");
var xeKYH=wa_evaluate(s_custom);
var TLNCD=CONST_WA_GLOBAL_SETTINGS.custom_script_labels[xeKYH];
var kgRXd="label_market_type_payment_"+TLNCD;
var FeRGD=Translator.tr(kgRXd);
if((FeRGD!=kgRXd)&&(FeRGD!="@"+kgRXd))
{
BDRBZ=""+FeRGD;
}
else
{
BDRBZ=""+TLNCD;
}
}
else
{
BDRBZ="label_market_type_payment_"+LHkbZ;
var FeRGD=Translator.tr(BDRBZ);
if(BDRBZ!=FeRGD)
{
BDRBZ=FeRGD;
}
}
return BDRBZ;
}
function wBbfI(cULxf,hnJZX)
{
var BKaVO=cULxf[0];
var WtCoi=cULxf[1];
var lddvC=cULxf[2];
if(BKaVO.length==0)
{
lddvC.call(WtCoi);
return;
}
var js=BKaVO.pop();
WA_loadScript(js.src,wBbfI,[BKaVO,WtCoi,lddvC]);
}
function WA_arrayContains(kOXar,BDRBZ)
{
for(var n=0;n<kOXar.length;n++){if(kOXar[n]==BDRBZ)return true;};
return false;
}
function ETrDa(kOXar)
{
var Ljcob=new Array();
for(var n=0;n<kOXar.length;n++)
{
var Gjaet=kOXar[n];
if(Gjaet=="address") Ljcob=Ljcob.concat(["address_1","address_2","city","zip"]);
else Ljcob.push(Gjaet);
}
return Ljcob;
}
function gdphp()
{
this.EqQet=function()
{
if(this.smOms.length==0)return CONST_WA_GLOBAL_SETTINGS.default_selected_country;
return this.smOms;
}
this.UWGUH=function()
{
this.GiCmP();
}
this.NNLwv=function(s)
{
var wHtve=new Array();
var tab=s.split(",");
for(var i=0;i<tab.length;i++)
{
var tab3=tab[i].split("=");
if(tab3.length==2)wHtve[tab3[0]]=tab3[1];
}
return wHtve;
}
this.HHUKO=function(jswCl)
{
if(jswCl==undefined) return ""
return(jswCl==NBpju)?"deliv-":"bill-"
}
this.LQkjr=function(sXPjp,jswCl,WPuPe)
{
if(!WPuPe)WPuPe=""
var soEJf=this.HHUKO(jswCl)
if(sXPjp=="country")
{
if(jswCl==NBpju) return this.smOms
if(jswCl==YnuvA) sXPjp="countryCode"
}
if(sXPjp=="state")
{
sXPjp="stateCode"
}
var qmSQF=this.XOhBJ[soEJf+sXPjp]
if(!qmSQF) return WPuPe
qmSQF=qmSQF.replace(/\"/g,"'")
return qmSQF
}
this.rrcPY=function(qmSQF)
{
if(qmSQF==undefined)return ""
return qmSQF
}
this.KdXxa=function(key,val)
{
if((val==null)||(val==undefined)) val="";
WA_SetCookie("crbst-card-"+key,val)
}
this.GmjIl=function(key)
{
var WtCoi=WA_GetCookie("crbst-card-"+key)
if(WtCoi=="null")WtCoi="";
return ""+WtCoi
}
this.ojOCT=function()
{
this.XOhBJ=new Array()
var BDRBZ=this.GmjIl("order-infos")
var Ljcob=this.NNLwv(BDRBZ)
for(var k1 in Ljcob)
{
var qmSQF=Ljcob[k1]
if((k1.indexOf("deliv-")==0)||(k1.indexOf("bill-")==0))
this.XOhBJ[k1]=unescape(qmSQF)
}
this.smOms=this.rrcPY(Ljcob["countryCode"])
if(this.ddUSI.length==0)
{
this.ddUSI=this.rrcPY(Ljcob["typePayment"])
}
this.NGuDb=(this.rrcPY(Ljcob["differentBillingAddressChecked"])=="true")
this.dnBHq=(this.rrcPY(Ljcob["salesConditionChecked"])=="true")
}
this.GiCmP=function()
{
var BDRBZ=""
for(var k1 in this.XOhBJ)
{
var qmSQF=this.XOhBJ[k1]
BDRBZ+=k1+"="+escape(qmSQF)+","
}
var FeRGD=""
FeRGD+="countryCode="+escape(this.smOms)+","
FeRGD+="typePayment="+escape(this.ddUSI)+","
FeRGD+="differentBillingAddressChecked="+(this.NGuDb)+","
FeRGD+="salesConditionChecked="+(this.dnBHq)+","
BDRBZ+=FeRGD 
this.KdXxa("order-infos",BDRBZ)
}
this.ExmSQ=function(tYTQK)
{
if(trimString(tYTQK.value).length==0)
{
tYTQK.style.backgroundColor="#ff0000"
tYTQK.focus()
return false;;
}
tYTQK.style.backgroundColor=""
return true;
}
this.BxsSa=function(jswCl)
{
var MFGkm=ETrDa(CONST_WA_GLOBAL_SETTINGS.list_form_fields)
var FPeoS=ETrDa(CONST_WA_GLOBAL_SETTINGS.list_mandatory_form_fields) 
var NRgpX=this.XOhBJ;
var soEJf=this.HHUKO(jswCl) 
var ffPxv=document.getElementById("wa-market-form")
for(var n=0;n<MFGkm.length;n++)
{
var DxxrQ=MFGkm[n]
var kwZjx=ffPxv[DxxrQ]
if(kwZjx!=undefined)
{
var qmSQF=trimString(kwZjx.value)
if(DxxrQ!="address_2")
if(WA_arrayContains(FPeoS,DxxrQ))
{
if(this.ExmSQ(kwZjx)==false)return false;
}
NRgpX[soEJf+DxxrQ]=qmSQF
}
}
var mnIuv=document.getElementById("wa-select-state");
var afquS=document.getElementById("wa-market-state");
if(mnIuv&&(afquS.style.display!="none"))
{
if(this.ExmSQ(mnIuv)==false)return false;
NRgpX[soEJf+"stateCode"]=mnIuv.value
}
else
{
NRgpX[soEJf+"stateCode"]=""
}
if(jswCl==YnuvA)
{
var sUxSH=document.getElementById("wa-select-form-country");
if(sUxSH)
{
NRgpX[soEJf+"countryCode"]=sUxSH.value
}
}
this.GiCmP()
return true;
}
this.tFMPu=""
this.smOms=""
this.ddUSI=""
this.NGuDb=false;
this.dnBHq=false
this.ojOCT()
}
function aHYrk()
{
this.xIlrd=new Array();
this.WtCoi_callback=false;
this.YarDl=false;
this.NCKRq=false;
this.nUbVP=new gdphp()
this.OsJkn=CONST_WA_GLOBAL_SETTINGS.use_native_paypal_cart;
this.SdaKQ=function(WtCoi,lddvC)
{
this.WtCoi_callback=WtCoi;
this.YarDl=lddvC;
var wbJdM=this.GmjIl("data");
this.kwwUb(wbJdM);
var BKaVO=new Array();
var kOXar=this.xIlrd;
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
var NCFRk=Translator.m_lang_for_filename;
if(NCFRk.length>0)NCFRk="_"+NCFRk;
var hXGIb=wVqtH.FvOCe;
var n=hXGIb.indexOf("_");
if(n>-1)hXGIb=hXGIb.substring(n+1);
var TYBvX="wa-id-"+hXGIb;
wVqtH.kehLM="wa-id-"+hXGIb;
var ACKjb="crbst_market_"+wVqtH.FvOCe;
wVqtH.ACKjb=ACKjb;
var SIqER=wa_global_market.markets[ACKjb];
if(this.NCKRq==false)
if(!SIqER)
{
WA_declareMarket(TYBvX,ACKjb,wVqtH.FvOCe_modif);
var BvFKH=ACKjb+"/"+'market-definition'+NCFRk+'.js?v='+wVqtH.FvOCe_modif;
BKaVO.push({id:hXGIb,src:BvFKH});
}
}
wBbfI([BKaVO,this,this.ceviC],true);
}
this.ewjta=function()
{
this.KdXxa("data","")
this.nUbVP.KdXxa("order-infos","")
this.nUbVP.ojOCT()
this.kwwUb("")
}
this.ceviC=function()
{
this.NCKRq=true;
var kOXar=this.xIlrd;
var PCHFx=new Array();
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
var BpOEd=wa_global_market.markets[wVqtH.ACKjb]
if(BpOEd.info)
{
var jAqIA=BpOEd.info.products 
var hMVQm=wVqtH.FvOCe_index
var usdSF=jAqIA[hMVQm]
wVqtH.usdSF=usdSF
wVqtH.eBJvp(wVqtH.usdSF,hMVQm)
if((usdSF.unavail==false)&&(wVqtH.FvOCe_modif==BpOEd.info.critical_id_modif))
{
PCHFx.push(wVqtH)
}
}
else
{
}
}
this.xIlrd=PCHFx
this.eodgW() 
this.YarDl.call(this.WtCoi_callback)
}
this.kwwUb=function(BwOLd)
{
var kOXar=new Array();
var list_string_products=BwOLd.split(";")
for(var i=0;i<list_string_products.length;i++)
{
var s_data=list_string_products[i];
if(s_data&&(s_data.length>0))
{
var wVqtH=new CvDYE();
if(wVqtH.BPMHE(s_data))
{
kOXar.push(wVqtH);
}
}
}
this.xIlrd=kOXar;
var FrkRb=this.AMPpK()
if(WA_getNumberMarketItemsInCart()!=FrkRb)
{
this.jwxNH()
this.nSJLB()
}
}
this.saOJt=function()
{
var plNEr=''
try{plNEr=CONST_WA_GLOBAL_SETTINGS.currency_mnemonic}catch(e){}
return plNEr
}
this.XRAPo=function(kkSBo)
{
var list2=new Array();
var kOXar=this.xIlrd
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
if(i!=kkSBo)
{
list2.push(wVqtH);
}
}
this.xIlrd=list2;
this.eodgW()
}
this.addProductToShoppingCard=function(usdSF,optionsValues)
{
if(this.JqcCR()==false)
{
WA_Dialog.alert(Translator.tr("You can't use shopping card Your browser doesnt accept cookies !"));
return false;
}
var uuJAQ=usdSF.obj
var kOXar=this.HpoCw();
var n=kOXar.length
var TWuNx=new CvDYE()
TWuNx.heVrf(usdSF,n);
TWuNx.m_opt_vals=optionsValues
var b_match=false;
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
if(wVqtH.hwCmL()==TWuNx.hwCmL())
{
b_match=true;
wVqtH.heQgW++;
}
}
if(b_match==false)
{
var wbJdM=this.GmjIl("data")
var nvTjr=TWuNx.JZtQs()
var NcmwS=wbJdM.length+nvTjr.length 
if(NcmwS>4000)
{
WA_Dialog.alert(Translator.tr("Cookies cart contains max data !"));
return false;
}
kOXar.push(TWuNx);
}
return true
}
this.YmMnE=function()
{
var kOXar=this.xIlrd
var wbJdM="";
for(var i=0;i<kOXar.length;i++)
{
var info=kOXar[i];
wbJdM+=info.JZtQs()+";";
}
return wbJdM;
}
this.AMPpK=function()
{
var EtOLn=0;
var kOXar=this.xIlrd;
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
EtOLn+=wVqtH.heQgW
}
return EtOLn;
}
this.jwxNH=function()
{
this.KdXxa("nb_items",this.AMPpK())
}
this.eodgW=function()
{
var kOXar=this.xIlrd
var wbJdM=this.YmMnE()
this.KdXxa("data",wbJdM)
this.jwxNH()
this.nSJLB();
}
this.nSJLB=function()
{
WA_refreshNumberMarketItemsInCart()
}
this.HpoCw=function()
{
return this.xIlrd;
}
this.JqcCR=function()
{
this.KdXxa("watestcookies","test")
return(this.GmjIl("watestcookies")=="test");
}
this.KdXxa=function(key,val)
{
if((val==null)||(val==undefined)) val="";
WA_SetCookie("crbst-card-"+key,val)
}
this.GmjIl=function(key)
{
var WtCoi=WA_GetCookie("crbst-card-"+key)
if(WtCoi=="null")WtCoi="";
return ""+WtCoi
}
this.uaqtn=function(v)
{
return WA_formatPrice(v)
}
this.amveR=function(v)
{
return WA_basicFormatPrice(v)+" "+CONST_WA_GLOBAL_SETTINGS.currency_code;
}
this.lxQwb=function(JOlMf)
{
return Math.round(JOlMf*100)/100
}
this.vkjil=function()
{
var JOlMf=this.JbLZs()
var wIaZm=0;
var kOXar=CONST_WA_GLOBAL_SETTINGS.list_promo_codes
for(var i=0;i<kOXar.length;i++)
{
var SnBRx=kOXar[i];
if(MD5(trimString(this.nUbVP.tFMPu.toUpperCase()))==SnBRx.c)
{
if(SnBRx.v.indexOf("%")>-1)
{
var wIaZm=parseFloat(SnBRx.v)/100;
return JOlMf*wIaZm;
}
else
{
return parseFloat(SnBRx.v);
}
break;
}
}
return 0;
}
this.JfgTF=function(MUiGf)
{
var BkVSK=0;
var IbPHj=CONST_WA_GLOBAL_SETTINGS.shipping_type
if(IbPHj==evVBR)return BkVSK;
var saSpa=CONST_WA_GLOBAL_SETTINGS.shipping_intervals
for(var i=0;i<saSpa.length;i++)
{
var LFVNL=saSpa[i];
if(LFVNL.v<MUiGf)BkVSK=LFVNL.p
}
return BkVSK;
}
this.jxcdh=function(nMRKc,MUiGf)
{
var Ljcob=CONST_WA_GLOBAL_SETTINGS.wHtve_list_extra_shipping_by_country_code
if(Ljcob==undefined)
{
Ljcob=new Array()
CONST_WA_GLOBAL_SETTINGS.wHtve_list_extra_shipping_by_country_code=Ljcob;
var ZQpoq=CONST_WA_GLOBAL_SETTINGS.list_extra_shipping_by_country_code
for(var kkSBo in ZQpoq)
{
var jTmpf=ZQpoq[kkSBo];
var LxmrX=jTmpf.c
for(var thnVu in LxmrX)
{
var GPOKF=LxmrX[thnVu];Ljcob[GPOKF]=jTmpf.p;
}
}
}
var saSpa=Ljcob[nMRKc]
if(saSpa==undefined) return 0;
var extra_val=0;
for(var i=0;i<saSpa.length;i++)
{
var LFVNL=saSpa[i];
if(LFVNL.v<MUiGf)extra_val=LFVNL.p
}
if(isNaN(extra_val)) extra_val=0;
return extra_val;
}
this.ksbTx=function(nMRKc)
{
var Ljcob=CONST_WA_GLOBAL_SETTINGS.wHtve_list_tva_by_country_code
if(Ljcob==undefined)
{
Ljcob=new Array()
CONST_WA_GLOBAL_SETTINGS.wHtve_list_tva_by_country_code=Ljcob;
var ZQpoq=CONST_WA_GLOBAL_SETTINGS.list_tva_by_country_code
for(var kkSBo in ZQpoq)
{
var jTmpf=ZQpoq[kkSBo];
var LxmrX=jTmpf.c;
for(var thnVu in LxmrX)
{
var GPOKF=LxmrX[thnVu];Ljcob[GPOKF]=jTmpf.p;
}
}
}
return Ljcob[nMRKc];
}
this.cFKPL=function()
{
var IbPHj=CONST_WA_GLOBAL_SETTINGS.shipping_type
var kOXar=this.HpoCw()
var fCHwD=0;
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
if(IbPHj==vcSmk)
{
fCHwD+=(wVqtH.heQgW*wVqtH.dKgff());
}
if(IbPHj==gBUhM)
{
fCHwD+=(wVqtH.heQgW*wVqtH.Mhlqj);
}
}
if(IbPHj==vcSmk)
{
fCHwD-=this.vkjil()
}
var smOms=this.nUbVP.smOms;
var DJmOL=0;
DJmOL+=this.JfgTF(fCHwD);
DJmOL+=this.jxcdh(smOms,fCHwD);
return this.lxQwb(DJmOL);
}
this.udkMS=function()
{
return CONST_WA_GLOBAL_SETTINGS.tva_type==bZAHq
}
this.INSpo=function()
{
return CONST_WA_GLOBAL_SETTINGS.tva_type==NXLAt
}
this.REvpN=function()
{
return CONST_WA_GLOBAL_SETTINGS.tva_type==hKtEQ
}
this.qPidm=function()
{
if(this.REvpN())return 0;
var tax=0;
var country_code=this.nUbVP.smOms;
if(country_code.length>0)
{
tax=this.ksbTx(country_code);
if(isNaN(tax))tax=0;
}
return tax;
}
this.pXjUm=function(JOlMf)
{
if(this.udkMS())
{
var n0=this.qPidm()/100;
return JOlMf*(n0/(1+n0));
}
if(this.INSpo())
{
return JOlMf*this.qPidm()/100;
}
return JOlMf;
}
this.JbLZs=function()
{
var kOXar=this.HpoCw()
var price=0;
for(var i=0;i<kOXar.length;i++)
{
var wVqtH=kOXar[i];
price+=(wVqtH.dKgff()*wVqtH.heQgW);
}
return price;
}
this.Jtlgm=function()
{
if(this.REvpN())return 0;
var fWHPn=0;
var EvjGJ=0;
fWHPn+=this.JbLZs(),
fWHPn-=this.vkjil();
fWHPn+=this.cFKPL();
EvjGJ=this.lxQwb(this.pXjUm(fWHPn));
return EvjGJ;
}
this.OWptX=function()
{
var JOlMf=0;
JOlMf+=this.JbLZs()
if(this.INSpo())JOlMf+=this.Jtlgm()
JOlMf+=this.cFKPL()
JOlMf-=this.vkjil()
return this.lxQwb(JOlMf);
}
}
function rkseh(fEmsJ,rpQZp)
{
if(fEmsJ.lab<rpQZp.lab) return-1;
if(fEmsJ.lab>rpQZp.lab) return 1;
return 0
}
function WA_marketWatchQuantity()
{
var uaOVI=WA_Dialog.getCurrent()
uaOVI.ufGLp()
}
function WA_displayDialogMarketCart()
{
var uaOVI=new WA_Dialog();
uaOVI.HQGBr=false;
uaOVI.sKilX=function()
{
this.RdQNP()
this.HQGBr=setInterval("WA_marketWatchQuantity()",400)
}
uaOVI.RdQNP=function()
{
if(this.HQGBr)clearInterval(this.HQGBr)
}
uaOVI.ufGLp=function()
{
var DZYPW=GsZmP();
var ViIdK=DZYPW.HpoCw();
for(var n=0;n<ViIdK.length;n++)
{
var wVqtH=ViIdK[n]
var dVBDT=document.getElementById("wa-cart-quantity-"+n)
var vSRqf=dVBDT.value
var RVEgR=parseInt(vSRqf)
if(isNaN(RVEgR))RVEgR=0;
if((vSRqf!='')&&(RVEgR+""!=vSRqf))
{
dVBDT.value=""+RVEgR
}
if(RVEgR!=wVqtH.heQgW)
{
wVqtH.heQgW=RVEgR
DZYPW.eodgW()
this.DBFwR()
}
}
var dqLFl=document.getElementById("wa-promo-code")
if(dqLFl)
{
if(dqLFl.value!=DZYPW.nUbVP.tFMPu)
{
DZYPW.nUbVP.tFMPu=dqLFl.value
this.DBFwR()
}
}
}
uaOVI.onCustomKeypress=function(kUkNK)
{
if(kUkNK==13)
{
wa_timeout(Delegate.create(this,this.ZCYXf),0);
}
return false;
}
uaOVI.closeWin=function()
{
this.RdQNP()
this.intern_closeWin()
}
uaOVI.DBFwR=function()
{
var DZYPW=GsZmP();
var ViIdK=DZYPW.HpoCw();
if(ViIdK.length==0) return;
for(var n=0;n<ViIdK.length;n++)
{
var wVqtH=ViIdK[n]
var MJUFq=document.getElementById("wa-cart-total-"+n)
var JOlMf=wVqtH.dKgff() 
var bMFCJ=wVqtH.heQgW*JOlMf
var BDRBZ="<span style='"
BDRBZ+=(bMFCJ>0)?"color:"+WA_GLOBAL_COLOR_THEME.color_text+";font-weight:normal;":"color:#ff0000;font-weight:bold;"
BDRBZ+="'>"
BDRBZ+=DZYPW.uaqtn(bMFCJ)
BDRBZ+="</span>"
MJUFq.innerHTML=BDRBZ
}
var UeIeS=DZYPW.JbLZs()
var rdcsh=DZYPW.Jtlgm()
var gPFiF=DZYPW.cFKPL()
var FIrsl=DZYPW.OWptX()
var hSxJs=DZYPW.vkjil()
var lwbQJ=""
var MJUFq=document.getElementById("wa-cart-amount-total")
lwbQJ+=Translator.tr("Sub total")+" : "+DZYPW.uaqtn(UeIeS)
lwbQJ+="<br>"
if(gPFiF>0)
{
lwbQJ+="<span>"+Translator.tr("Shipping amount")+" : "+DZYPW.uaqtn(gPFiF)+"</span>";
lwbQJ+="<br>"
}
if(DZYPW.udkMS()||DZYPW.INSpo())
{
if(DZYPW.udkMS())
{
lwbQJ+="<div style='width:100%;text-align:left;'>"
lwbQJ+=Translator.tr("Tax included");
}
if(DZYPW.INSpo())
{
lwbQJ+="<div>"
lwbQJ+=Translator.tr("Extra Tax");
}
lwbQJ+=" : ";
lwbQJ+=DZYPW.uaqtn(rdcsh)+"</div>";
}
if(hSxJs>0)
{
lwbQJ+="<span>"+Translator.tr("Promotion")+" : - "+DZYPW.uaqtn(hSxJs)+"</span><br>";
}
lwbQJ+="<span><b>"+Translator.tr("Total")+" : "+DZYPW.uaqtn(FIrsl)+"</b></span>";
MJUFq.innerHTML=lwbQJ
}
uaOVI.PZwUP=function()
{
WA_displayDialogMarketCart()
}
uaOVI.HwKKe=function()
{
this.closeWin()
}
uaOVI.ZCYXf=function()
{
var DZYPW=GsZmP();
if(WA_getNumberMarketItemsInCart()==0)return;
var IaTBH=document.getElementById("wa-market-select-country")
if(IaTBH)
{
DZYPW.nUbVP.smOms=IaTBH.value
}
if(DZYPW.nUbVP.smOms=="")
{
var IaTBH=document.getElementById("wa-market-select-country")
if(IaTBH)
{
IaTBH.focus()
IaTBH.style.backgroundColor="#ff0000"
return;
}
}
if(CONST_WA_GLOBAL_SETTINGS.link_sale_condition)
{
if(DZYPW.nUbVP.dnBHq!=true)
{
var PBPMd=document.getElementById("wa-sales-condition")
if(PBPMd)
{
PBPMd.focus()
var aRulA=document.getElementById("wa-sales-condition-label")
aRulA.style.backgroundColor="#ff0000"
return;
}
}
}
var QkUCt=CONST_WA_GLOBAL_SETTINGS.list_type_payment
if(QkUCt.length==1)
{
DZYPW.nUbVP.ddUSI=QkUCt[0]
}
var IaTBH=document.getElementById("wa-market-select-payment")
if(IaTBH)
{
DZYPW.nUbVP.ddUSI=IaTBH.value
if(DZYPW.nUbVP.ddUSI=="")
{
IaTBH.focus()
IaTBH.style.backgroundColor="#ff0000"
return;
}
}
CxcCD()
}
uaOVI.MPdOh=function()
{
WA_exec_callback_opera_compliant(this,this.vsJvc)
}
uaOVI.vsJvc=function()
{
var DZYPW=GsZmP();

var sUxSH=document.getElementById("wa-market-select-country")
if(sUxSH)
{
DZYPW.nUbVP.smOms=sUxSH.value
}
DZYPW.nUbVP.UWGUH()
var qUIQv=html_getLayer("market-cart-content")
var NBNXe=html_getLayer("wa-market-payment-form") 
var BDRBZ=""
var ViIdK=DZYPW.HpoCw();
html_SetVisibility(NBNXe,(ViIdK.length>0))
if(ViIdK.length==0)
{
BDRBZ+="<span style='font-family:Arial;font-size:16px;'>"
BDRBZ+=Translator.tr("No articles in Card !")
BDRBZ+="</span>"
}
else
{
var EJjFd="border:1px solid "+WA_GLOBAL_COLOR_THEME.color0+";font-weight:normal;"
var nKOTG=new RGBColor(WA_GLOBAL_COLOR_THEME.color0);
var bsAQJ=nKOTG.toHsl();
nKOTG.fromHsl(bsAQJ[0],bsAQJ[1],bsAQJ[2]+0.2)
var rkZJC="border:1px solid "+WA_GLOBAL_COLOR_THEME.color0+";font-weight:normal;color:"+WA_GLOBAL_COLOR_THEME.color_text+";background-color:"+nKOTG.toRGB()+";"
var bwsHQ="border:1px solid "+WA_GLOBAL_COLOR_THEME.color0+";color:#ff0000;font-weight:bold;"
var OFrfq="color:#222222;font-size:12px;"
BDRBZ+="<table style='font-family:Arial;font-weight:normal;border:2px solid "+WA_GLOBAL_COLOR_THEME.color0+";border-collapse:collapse;width:100%;margin:auto;background-color:"+WA_GLOBAL_COLOR_THEME.color2+";'>"
BDRBZ+="<thead style='font-size:13px;border:1px solid;'>"
BDRBZ+="<tr>"
BDRBZ+="<th  colspan=2 style='"+rkZJC+"'></th>"
BDRBZ+="<th style='"+rkZJC+"'  width=70px><b>"+Translator.tr("Price")+"</b></th>"
BDRBZ+="<th style='"+rkZJC+"'  width=70px><b>"+Translator.tr("Quantity")+"</b></th>"
BDRBZ+="<th style='"+rkZJC+"'  width=70px><b>"+Translator.tr("Total")+"</b></th>"
BDRBZ+="<th style='"+rkZJC+"'  width=90px></th>"
BDRBZ+="</tr>"
var CqOOH=new RGBColor(WA_GLOBAL_COLOR_THEME.color2);
var DGEmM=CqOOH.toHsl();
CqOOH.fromHsl(DGEmM[0],DGEmM[1],DGEmM[2]-0.1) 
for(var n=0;n<ViIdK.length;n++)
{
var hqOns="";
if(n%2==0)
{
hqOns="background-color:"+CqOOH.toRGB()+";"
}
var RtaMg=EJjFd+hqOns;
var wVqtH=ViIdK[n]
BDRBZ+="<tr>"
BDRBZ+="<th style='"+RtaMg+"' >" 
var BpOEd=wa_global_market.markets[wVqtH.ACKjb]
var KpfWc=new Size(30,30)
var DVRTP=KpfWc
if(BpOEd.info.design.crop_thumb==false)
{
DVRTP=wVqtH.usdSF.size_thumb.clone()
DVRTP.scale(KpfWc)
}
else
{
}
if(wVqtH.usdSF.img_thumb.length>0)
BDRBZ+="<img border=0 src='"+wVqtH.usdSF.img_thumb+"' width="+DVRTP.width+"px height="+DVRTP.height+"px>"
BDRBZ+="</th>" 
BDRBZ+="<th style='"+RtaMg+"text-align:left;padding:5px;' >"
BDRBZ+="<b>"+wVqtH.VPxcX+"</b>"
if(wVqtH.sgLtT.length>0)
{
BDRBZ+="<span style='"+OFrfq+"'>";
BDRBZ+=" ["+wVqtH.sgLtT+"]";
BDRBZ+="</span>";
}
if(wVqtH.m_opt_vals)
{
BDRBZ+="<br>"
BDRBZ+="<span style='"+OFrfq+"'>";
for(var i_opt=0;i_opt<wVqtH.usdSF.options.length;i_opt++)
{
var SatSF=wVqtH.usdSF.options[i_opt]
if(SatSF)
{
var bNurM=wVqtH.m_opt_vals[i_opt];
var VaYtb=SatSF.title;
if(VaYtb.length>0)
{
BDRBZ+=VaYtb;
BDRBZ+=":"
}
BDRBZ+=SatSF.vals[bNurM];
BDRBZ+=" "
}
}
BDRBZ+="</span>";
}
BDRBZ+="</th>"
var JOlMf=wVqtH.dKgff()
BDRBZ+="<th style='"+RtaMg+"' >"+DZYPW.uaqtn(JOlMf)+"</th>"
BDRBZ+="<th style='"+RtaMg+"'  align=center><input type=text id='wa-cart-quantity-"+n+"' style='width:45px;' maxlength=3 value='"+wVqtH.heQgW+"' type=text/></th>"
BDRBZ+="<th style='"
var bMFCJ=wVqtH.heQgW*JOlMf
BDRBZ+=(bMFCJ>0)?RtaMg:(bwsHQ+hqOns);
BDRBZ+="' ><span id='wa-cart-total-"+n+"'>"
BDRBZ+=DZYPW.uaqtn(bMFCJ)
BDRBZ+="</span></th>"
BDRBZ+="<th style='"+RtaMg+"' ><a href=\"javascript:WA_marketRemoveItem("+n+")\">"+Translator.tr("Remove card item")+"</a></th>"
BDRBZ+="</tr>"
}
BDRBZ+="<tr>"
BDRBZ+="<th style='"+EJjFd+"text-align:right;padding:5px;' id='wa-cart-amount-total'  colspan=5>&nbsp;</th>"
BDRBZ+="<th style='"+EJjFd+"' ></th>"
BDRBZ+="</tr>"
BDRBZ+="</thead>"
BDRBZ+="</table>"
BDRBZ+="<br>"
}
qUIQv.innerHTML=BDRBZ
this.sKilX()
WA_exec_callback_opera_compliant(this,this.DBFwR) 
}
uaOVI.RVecl=function()
{
var DZYPW=GsZmP();
this.addButton(Translator.tr("Continue Shopping"),this.HwKKe,[""],this)
this.addButton(Translator.tr("Checkout order"),this.ZCYXf,[""],this)
this.initializeWindow(670,700)
var qhtEg="font-family:Arial;font-size:12px;color:#000000;"
var BDRBZ=""
BDRBZ+="<div id='market-cart-content' style='width:100%;"+qhtEg+"' align=center>" 
BDRBZ+="</div>"
BDRBZ+="<br>"
BDRBZ+="<div style='width:100%;"+qhtEg+"' align=center id='wa-market-payment-form'>" 
var DLvJG=CONST_WA_GLOBAL_SETTINGS.list_favorite_country
var nnbtK=CONST_WA_GLOBAL_SETTINGS.list_country
var Nivpg=new Array()
for(var Fuahw=0;Fuahw<DLvJG.length;Fuahw++)
{
Nivpg[DLvJG[Fuahw]]=true
}
for(var Fuahw=0;Fuahw<nnbtK.length;Fuahw++)
{
Nivpg[nnbtK[Fuahw]]=true
}
var nBfZt=0;
var ESiDx=""
for(var c in Nivpg)
{
nBfZt++;
ESiDx=c
}
if(nBfZt>1)
{
BDRBZ+="<span style='font-weight:bold;'>"
BDRBZ+=Translator.tr("Please choose a country to deliver your order")
BDRBZ+="</span>"
BDRBZ+="<br>"
BDRBZ+="<select onchange=\"WA_marketChangeCountry(this)\" id='wa-market-select-country'>"
if(CONST_WA_GLOBAL_SETTINGS.default_selected_country.length==0)
{
BDRBZ+="<option value=\"\">...</option>"
}
var SeHEd=new Array()
for(var Fuahw=0;Fuahw<DLvJG.length;Fuahw++)
{
var JJmkU=DLvJG[Fuahw]
SeHEd.push({code:JJmkU,lab:Translator.country(JJmkU)})
}
for(var Fuahw=0;Fuahw<SeHEd.length;Fuahw++)
{
var WtCoi=SeHEd[Fuahw]
var JJmkU=WtCoi.code
BDRBZ+="<option "
if(DZYPW.nUbVP.EqQet()==JJmkU)BDRBZ+="selected "
BDRBZ+="value=\""+JJmkU+"\">"+Translator.country(JJmkU)+"</option>"
}
if((DLvJG.length>0)&&(nnbtK.length>0))
{
BDRBZ+="<option value=\"\">-----</option>"
}
var vDkCB=new Array()
for(var Fuahw=0;Fuahw<nnbtK.length;Fuahw++)
{
var JJmkU=nnbtK[Fuahw]
vDkCB.push({code:JJmkU,lab:Translator.country(JJmkU)})
}
if((DLvJG.length==0)&&(nnbtK.length==0))
{
var kOXar=CONST_WA_COUNTRIES.codes
for(var Fuahw=0;Fuahw<kOXar.length;Fuahw++)
{
var JJmkU=kOXar[Fuahw]
vDkCB.push({code:JJmkU,lab:Translator.country(JJmkU)})
}
}
vDkCB.sort(rkseh)
for(var Fuahw=0;Fuahw<vDkCB.length;Fuahw++)
{
var WtCoi=vDkCB[Fuahw]
var JJmkU=WtCoi.code
BDRBZ+="<option "
if(DZYPW.nUbVP.EqQet()==JJmkU)BDRBZ+="selected "
BDRBZ+="value=\""+JJmkU+"\">"+Translator.country(JJmkU)+"</option>"
}
BDRBZ+="</select>"
BDRBZ+="<br>"
BDRBZ+="<br>"
}
var QkUCt=CONST_WA_GLOBAL_SETTINGS.list_type_payment
if(QkUCt.length>1)
{
BDRBZ+="<span style='font-weight:bold;'>"
BDRBZ+=Translator.tr("Choose a type of payment")
BDRBZ+="</span>"
BDRBZ+="<br>"
BDRBZ+="<select onchange=\"WA_marketChangeTypePayment(this)\" id='wa-market-select-payment'>"
if((QkUCt.length>1)||(QkUCt.length==0))
{
BDRBZ+="<option value=\"\">...</option>"
}
for(var Fuahw=0;Fuahw<QkUCt.length;Fuahw++)
{
var ddUSI=QkUCt[Fuahw]
BDRBZ+="<option "
if(DZYPW.nUbVP.ddUSI==ddUSI)BDRBZ+="selected " 
BDRBZ+="value=\""+ddUSI+"\">"+rANdE(ddUSI)+"</option>"
}
BDRBZ+="</select>"
BDRBZ+="<br>"
BDRBZ+="<br>"
}
if(CONST_WA_GLOBAL_SETTINGS.list_promo_codes)
{
var kOXar=CONST_WA_GLOBAL_SETTINGS.list_promo_codes
BDRBZ+="<span id='wa-promo-code-label'  style='font-weight:bold;'>"
BDRBZ+=Translator.tr("form-label-code_promo")
BDRBZ+="</span><br>"
BDRBZ+="<input id='wa-promo-code' onchange=\"WA_marketChangePromoCode(this)\" " 
BDRBZ+=" value='"+DZYPW.nUbVP.tFMPu+"' "
BDRBZ+="/>"
BDRBZ+="<br>"
BDRBZ+="<br>"
}
if(CONST_WA_GLOBAL_SETTINGS.link_sale_condition)
{
BDRBZ+="<a "+WA_LinkToHref(CONST_WA_GLOBAL_SETTINGS.link_sale_condition)+" style='color:#0000ff'>"
BDRBZ+=Translator.tr("Terms of sell")
BDRBZ+="</a>"
BDRBZ+="<br>" 
BDRBZ+="<span id='wa-sales-condition-label'  style='font-weight:bold;'>"
BDRBZ+=Translator.tr("label_market_accept_terms")
BDRBZ+="</span>"
BDRBZ+="<input id='wa-sales-condition' onchange=\"WA_marketChangeSalesCondition(this)\" "
BDRBZ+=(DZYPW.nUbVP.dnBHq)?"checked ":""
BDRBZ+="type='checkbox' value='1'/>" 
BDRBZ+="<br>"
BDRBZ+="<br>" 
}
if((nBfZt==1)||(QkUCt.length==1))
{
BDRBZ+="<hr width=80%>"
BDRBZ+="<br>"
if(nBfZt==1)
{
DZYPW.nUbVP.smOms=ESiDx
BDRBZ+="<span style='font-weight:bold;'>"
BDRBZ+=Translator.tr("form-label-country")+" : "+Translator.country(DZYPW.nUbVP.smOms)
BDRBZ+="</span>"
BDRBZ+="<br>"
BDRBZ+="<br>"
}
if(QkUCt.length==1)
{
var ddUSI=QkUCt[0]
BDRBZ+="<span style='font-weight:bold;'>"
BDRBZ+=Translator.tr("PRINT_FORM_LABEL_TYPE_PAYMENT")+" : "+rANdE(ddUSI)
BDRBZ+="</span>"
BDRBZ+="<br>"
BDRBZ+="<br>"
}
}
BDRBZ+="</div>"
this.writeContent(BDRBZ)
var qUIQv=html_getLayer("market-cart-content")
qUIQv.innerHTML="<div width=100% align=center><img src='wa_loading.gif'></div>" 

DZYPW.SdaKQ(this,this.MPdOh)
}
uaOVI.RVecl() 
}
function WA_marketChangeCountry(IaTBH)
{
IaTBH.style.backgroundColor=""
var uaOVI=WA_Dialog.getCurrent()
uaOVI.MPdOh()
}
function WA_marketChangeTypePayment(IaTBH)
{
var DZYPW=GsZmP();
DZYPW.nUbVP.ddUSI=IaTBH.value
DZYPW.nUbVP.UWGUH()
IaTBH.style.backgroundColor=""
}
function WA_marketChangeSalesCondition(tYTQK)
{
var DZYPW=GsZmP();
DZYPW.nUbVP.dnBHq=tYTQK.checked
DZYPW.nUbVP.UWGUH() 
var aRulA=document.getElementById("wa-sales-condition-label")
aRulA.style.backgroundColor="" 
}
function WA_marketChangePromoCode(tYTQK)
{
var DZYPW=GsZmP();
DZYPW.nUbVP.tFMPu=tYTQK.value
DZYPW.nUbVP.UWGUH() 


}
function WA_LinkToHref(vRfPw)
{
var BDRBZ=""
var rcSYt=vRfPw.url
var VajIi=Translator.m_lang_for_filename
if(VajIi.length>0)VajIi="_"+VajIi
rcSYt=rcSYt.replace(/@lng@/g,VajIi)
BDRBZ+="href=\""+rcSYt+"\" "
if(vRfPw.open==1)
{
BDRBZ+="target="
BDRBZ+="_blank"
}
return BDRBZ;
}
function WA_displayDialogMarketProduct(hXGIb,kkSBo)
{
var SIqER=wa_global_market.markets[hXGIb]
var hhgKS=SIqER.obj
var jAqIA=hhgKS.info.products
var usdSF=jAqIA[kkSBo] 

var uaOVI=new WA_Dialog();

uaOVI.usdSF=usdSF
uaOVI.Dfsij=hXGIb
uaOVI.PZwUP=function()
{
WA_displayDialogMarketCart()
}
uaOVI.xUaKt=function()
{
var DZYPW=GsZmP();
DZYPW.SdaKQ(this,this.bAWxh) 
}
uaOVI.bAWxh=function()
{
var usdSF=this.usdSF;
var DZYPW=GsZmP();
var gglVE=new Array();
var ZtWhF=usdSF.obj.id;
for(var i=0;i<3;i++)
{
var keeQR=-1;
var soEJf=ZtWhF+"-select-opt"
var IaTBH=document.getElementById(soEJf+i)
if(IaTBH)
{
if(IaTBH.value.length==0)
{
IaTBH.style.backgroundColor="#ff0000";
IaTBH.focus()
return;
}
keeQR=parseInt(IaTBH.value)
}
gglVE.push(keeQR)
}
if(DZYPW.addProductToShoppingCard(usdSF,gglVE))
{
DZYPW.eodgW()
WA_displayDialogMarketCart()
}
}
uaOVI.RVecl=function()
{
var hXGIb=this.Dfsij
var usdSF=this.usdSF
var BDRBZ=""
this.addButton(Translator.tr("Go to my card"),this.PZwUP,[""],this)
if(usdSF.unavail==false)
{
this.addButton(Translator.tr("Add to card"),this.xUaKt,[""],this)
}
this.initializeWindow(670,this.idealHeight())
BDRBZ+="<table border=0 width=100% cellpadding=4>"
BDRBZ+="<tr>" 
if(usdSF.img_big.length>0)
{
BDRBZ+="<td width='100px' align=center valign=top>"
var DVRTP=usdSF.size_thumb.clone() 
DVRTP.scale(new Size(200,200))
BDRBZ+="<a href=\""+usdSF.img_big+"\" target=_blank>"
BDRBZ+="<img border=0 src=\""+usdSF.img_big+"\" width='"+DVRTP.width+"px' height='"+DVRTP.height+"px'>"
BDRBZ+="</a>"
BDRBZ+="</td>"
}
var QgcTC="color:"+WA_GLOBAL_COLOR_THEME.color_text+";";
BDRBZ+="<td valign=top style='font-family:Arial;'>"
BDRBZ+="<span style='font-weight:bold;font-size:16px;"+QgcTC+"'>"
BDRBZ+=usdSF.title
BDRBZ+="</span>"
BDRBZ+="<br>"
if(usdSF.sub_title.length>0)
{
BDRBZ+="<span style='color:#333333;font-size:14px;'>"
BDRBZ+=usdSF.sub_title
BDRBZ+="</span>"
BDRBZ+="<br>"
}
BDRBZ+="<br>"
BDRBZ+="<table border=0 width=100% cellspacing=0 cellpadding=0><tr><td>"
BDRBZ+="<span style='"+QgcTC+";font-size:14px;'>"
BDRBZ+=Translator.tr("Price")+" : "
BDRBZ+="</span>"
BDRBZ+="<span style='"+QgcTC+";font-size:18px;font-weight:bold;' id='"+usdSF.obj.id+"-price'>"
if(usdSF.unavail)
{
BDRBZ+=Translator.tr("Unavailable")
}
BDRBZ+="</span>"
if(usdSF.more_info)
{
BDRBZ+="</td><td align=right>"
var vRfPw=usdSF.more_info
var HfTeE=WA_LinkToHref(vRfPw)
BDRBZ+="<a "+HfTeE+" style='font-family:Arial;text-decoration:underline;font-weight:bold;font-size:12px;color:0000ff;'>"+Translator.tr("More product info link")+"</a>"
}
BDRBZ+="</td></tr></table>"
BDRBZ+="<br>"
var oGXSB=usdSF.obj.index
if(usdSF.unavail==false)
if(usdSF.options.length>0)
{
BDRBZ+="<table border=0 cellspacing=0 cellpadding=0>"
for(var n=0;n<usdSF.options.length;n++)
{
var SatSF=usdSF.options[n]
if(SatSF)
{
BDRBZ+="<tr><td align=right>"
BDRBZ+="<span style='font-family:Arial;font-weight:bold;font-size:12px;"+QgcTC+"'>"
BDRBZ+=SatSF.title+" :&nbsp;"
BDRBZ+="</span>"
BDRBZ+="</td><td align=left>"
BDRBZ+="<select id='"+usdSF.obj.id+"-select-opt"+n+"' onchange=\"WA_market_changeCustomPrice('"+hXGIb+"',"+oGXSB+")\">"
BDRBZ+="<option value=\"\">...</option>"
for(var Fuahw=0;Fuahw<SatSF.vals.length;Fuahw++)
{
var qmSQF=SatSF.vals[Fuahw]
BDRBZ+="<option value=\""+Fuahw+"\">"+qmSQF+"</option>"
}
BDRBZ+="</select>"
BDRBZ+="</td></tr>";
}
}
BDRBZ+="</table>"
}
BDRBZ+="</td>"
BDRBZ+="</tr>"
BDRBZ+="</table>"
if(usdSF.description.length>0)
{
BDRBZ+="<table border=0 width=100% cellpadding=4>"
BDRBZ+="<tr><td colspan=2>"
BDRBZ+="<span style='font-family:Arial;font-size:13px;"+QgcTC+"'>"
BDRBZ+="<hr>"
BDRBZ+=usdSF.description
BDRBZ+="</span>"
BDRBZ+="</td></tr>"
BDRBZ+="</table>"
}
this.writeContent(BDRBZ)
WA_market_changeCustomPrice(hXGIb,oGXSB)
}
uaOVI.displayWindowWithAutoResize(300,uaOVI.RVecl) 
}
function neeCv(usdSF,ZtWhF)
{
var lsQGI=new Array()
for(var i=0;i<3;i++)
{
var soEJf=ZtWhF+"-select-opt"
var IaTBH=document.getElementById(soEJf+i)
lsQGI[i]=-1
if(IaTBH)
{
IaTBH.style.backgroundColor="";
var qmSQF=parseInt(IaTBH.value)
if(isNaN(qmSQF)==false)
lsQGI[i]=qmSQF
}
}
return AjcHI(usdSF,lsQGI)
}
function AjcHI(usdSF,lsQGI)
{
if(usdSF.unavail)return;
var JGGYv=false;
for(var i=0;i<usdSF.custom_prices.length;i++)
{
var fDFrB=usdSF.custom_prices[i]
var eDgqq=true;
for(var n=0;n<3;n++)
{
if(fDFrB.tab[n]!=lsQGI[n])eDgqq=false
}
if(eDgqq)
{
JGGYv=fDFrB;
break;
}
}
var JOlMf=usdSF.price
if(JGGYv)
{
JOlMf=JGGYv.pr
}
return JOlMf;
}
function WA_market_changeCustomPrice(hXGIb,oGXSB)
{
var DZYPW=GsZmP();
var SIqER=wa_global_market.markets[hXGIb]
var jAqIA=SIqER.info.products;
var usdSF=jAqIA[oGXSB]
if(usdSF.unavail)return;
var ZtWhF=usdSF.obj.id
var JOlMf=neeCv(usdSF,ZtWhF)
var cjVYo=html_getLayer(ZtWhF+"-price")
if(cjVYo)
{
cjVYo.innerHTML=DZYPW.uaqtn(JOlMf)
}
}
function CxcCD()
{
var DZYPW=GsZmP();
if(WA_getNumberMarketItemsInCart()==0)return;
var wVqtH=DZYPW.nUbVP
if((DZYPW.OsJkn)&&(wVqtH.ddUSI=="paypal"))
{
hAtuv();
return;
}
UmEmO(NBpju)
}
function UmEmO(jswCl)
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP
wVqtH.ojOCT()
var uaOVI=new WA_Dialog();
uaOVI.jswCl=jswCl
uaOVI.gkbbL=function(kUkNK)
{
return Translator.tr("form-label-"+kUkNK)
}
uaOVI.onCustomKeypress=function(kUkNK)
{
if(kUkNK==13)
{
wa_timeout(Delegate.create(this,this.lGUJp),0);
}
return false;
}
uaOVI.VnicU=function()
{
if(this.jswCl==NBpju)
{
WA_displayDialogMarketCart()
}
else
{
UmEmO(NBpju)
}
}
uaOVI.ZNeBw=function()
{
hAtuv()
}
uaOVI.lGUJp=function()
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP
if(wVqtH.BxsSa(this.jswCl)==false) return;
wVqtH.UWGUH()
if(this.jswCl==NBpju)
{
if(wVqtH.NGuDb==true)
{
UmEmO(YnuvA)
}
else
{
this.ZNeBw()
}
}
else
{
this.ZNeBw()
}
}
uaOVI.psRmU=function(kUkNK,tFfdf)
{
if(tFfdf==undefined) tFfdf=""
if(tFfdf)tFfdf=" size="+tFfdf
return "<input name='"+kUkNK+"' value=\""+wVqtH.LQkjr(kUkNK,this.jswCl)+"\" type=text "+tFfdf+">"
}
uaOVI.mMVAo=function(Ojlcp)
{
return "<td width=150px align=right valign=top>"+Translator.tr(Ojlcp)+" :</td>"
}
uaOVI.RVecl=function()
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP 
this.addButton("< "+Translator.tr('Back'),this.VnicU,[""],this)
this.addButton(Translator.tr('Continue')+" >",this.lGUJp,[""],this)
this.initializeWindow(600,600)
var iKtsv="form-label-"
var MFGkm=CONST_WA_GLOBAL_SETTINGS.list_form_fields 
var BDRBZ=""
BDRBZ+="<form id='wa-market-form' onSubmit='return false'>"
BDRBZ+="<table border=0 width=100% cellspacing=5 style='font-family:Arial;font-size:15px;'>"
BDRBZ+="<tr><td colspan=2 align=center style='font-size:18px;'>"
BDRBZ+=Translator.tr((this.jswCl==NBpju)?"Fill Deliver information below":"Fill Billing information below")
BDRBZ+="<br><br></td></tr>"
for(var n=0;n<MFGkm.length;n++)
{
var kwZjx=MFGkm[n]
var ExmSQ=true;
if((kwZjx=="email")&&(this.jswCl==YnuvA))
{
ExmSQ=false;
}
if((kwZjx=="phone")&&(this.jswCl==YnuvA))
{
ExmSQ=false;
}
if(ExmSQ)
{
if(kwZjx=="address")
{
BDRBZ+="<tr>"+this.mMVAo("Address");
BDRBZ+="<td>"
BDRBZ+=this.psRmU("address_1",30)
BDRBZ+="</td></tr>"
BDRBZ+="<tr><td></td><td>"
BDRBZ+=this.psRmU("address_2",30)
BDRBZ+="</td></tr>"
BDRBZ+="<tr>"+this.mMVAo("form-label-city");
BDRBZ+="<td>"
BDRBZ+=this.psRmU("city")+"&nbsp;"+this.gkbbL("zip")+" : "+this.psRmU("zip",10)
BDRBZ+="</td></tr>" 
BDRBZ+="<tr>"+this.mMVAo("form-label-country");
BDRBZ+="<td>"
if(this.jswCl==YnuvA)
{
BDRBZ+="<select id='wa-select-form-country' onchange='WA_marketChangeFormCountry("+this.jswCl+")'>"
var vDkCB=new Array();
var kOXar=CONST_WA_COUNTRIES.codes
for(var Fuahw=0;Fuahw<kOXar.length;Fuahw++)
{
var JJmkU=kOXar[Fuahw]
vDkCB.push({code:JJmkU,lab:Translator.country(JJmkU)})
}
vDkCB.sort(rkseh)
var qcqbQ=wVqtH.EqQet()
qcqbQ=wVqtH.LQkjr('countryCode',this.jswCl,qcqbQ)
for(var Fuahw=0;Fuahw<vDkCB.length;Fuahw++)
{
var WtCoi=vDkCB[Fuahw]
var JJmkU=WtCoi.code
BDRBZ+="<option "
if(qcqbQ==JJmkU)BDRBZ+="selected "
BDRBZ+="value=\""+JJmkU+"\">"+Translator.country(JJmkU)+"</option>"
}
BDRBZ+="</select>"
}
else
{
BDRBZ+=Translator.country(DZYPW.nUbVP.smOms);
}
BDRBZ+="<br><span id='wa-market-state'>"
BDRBZ+="<select id='wa-select-state'></select>"
BDRBZ+="</span>" 
BDRBZ+="</td></tr>"
}
else
{
BDRBZ+="<tr>"+this.mMVAo("form-label-"+kwZjx);
BDRBZ+="<td>"
BDRBZ+=this.psRmU(kwZjx,30) 
BDRBZ+="</td></tr>"
}
}
}
if(this.jswCl==NBpju)
{
BDRBZ+="<tr><td colspan=2 align=center >"
BDRBZ+=Translator.tr("Billing adress is different")+" <input type=checkbox "
if(DZYPW.nUbVP.NGuDb)BDRBZ+="checked "
BDRBZ+="onchange='WA_marketCheckBillingAdress(this)'>"
BDRBZ+="</td></tr>"
}
BDRBZ+="</table>"
BDRBZ+="</form>"
this.writeContent(BDRBZ)
WA_exec_callback_opera_compliant(this,this.fOYpk) 
}
uaOVI.fOYpk=function()
{
WA_marketChangeFormCountry(this.jswCl)
}
uaOVI.RVecl()
}
function GHLFs(jswCl,IaTBH,Ljcob)
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP
var fYefF=wVqtH.LQkjr("stateCode",jswCl) 
IaTBH.options.length=0
for(var n=0;n<Ljcob.length;n++)
{
var dOkdY=Ljcob[n]
var val=dOkdY[1]
var elOptNew=document.createElement('option');
elOptNew.value=val;
if(val.length==0)val="--- "+Translator.tr("form-label-state")+" ---"
elOptNew.text=dOkdY[0];
if(elOptNew.value==fYefF)elOptNew.selected=true
try{
IaTBH.add(elOptNew,null);
}
catch(ex){
IaTBH.add(elOptNew);
}
}
}
function WA_stateLabel(JJmkU,dOkdY)
{
var arrayState=null;
if(JJmkU=="US")arrayState=CAwoM;
if(JJmkU=="CA")arrayState=obosV;
if(JJmkU=="BR")arrayState=pCaEB;
if(arrayState!=null)
{
for(var i=0;i<arrayState.length;i++)
{
var jTmpf=arrayState[i];
if(jTmpf[1]==dOkdY) return jTmpf[0];
}
}
return dOkdY;
}
function WA_marketChangeFormCountry(jswCl)
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP
var nMRKc=wVqtH.smOms
var IaTBH=document.getElementById("wa-select-form-country");
if(IaTBH) nMRKc=IaTBH.value;
html_SetDisplay("wa-market-state",(nMRKc=="US")||(nMRKc=="CA")||(nMRKc=="BR"))
var mnIuv=document.getElementById("wa-select-state");
if(mnIuv)
{
var arrayState=null;
if(nMRKc=="US")arrayState=CAwoM;
if(nMRKc=="CA")arrayState=obosV;
if(nMRKc=="BR")arrayState=pCaEB;
if(arrayState!=null)
{
var EiKMa=[["",""]];
arrayState=EiKMa.concat(arrayState);
GHLFs(jswCl,mnIuv,arrayState);
}
}
}
function WA_marketCheckBillingAdress(tYTQK)
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP
wVqtH.NGuDb=tYTQK.checked
wVqtH.UWGUH()
}
function hAtuv()
{
var DZYPW=GsZmP();


var uaOVI=new WA_Dialog();
uaOVI.VnicU=function()
{
if(DZYPW.nUbVP.ddUSI=="paypal")
{
WA_displayDialogMarketCart();return;
}
if(DZYPW.nUbVP.NGuDb)
UmEmO(YnuvA)
else
UmEmO(NBpju)
}
uaOVI.lQKVU=function(sXPjp,qmSQF)
{
qmSQF=""+qmSQF
qmSQF=qmSQF.replace(/'/g,"&lsquo;")
return "<input type=hidden name='"+sXPjp+"' value=\""+qmSQF+"\">"
}
uaOVI.XapEg=function()
{
var DZYPW=GsZmP();
var BDRBZ=""
var SdRAW=CONST_WA_GLOBAL_SETTINGS.currency_info;
if(SdRAW.charCodeAt(3)>=100) return"";
BDRBZ+="<form id='wa-http-sender' accept-charset='UTF-8' method=POST action='https://www.paypal.com/cgi-bin/webscr' target='_blank'>";
BDRBZ+=this.lQKVU("cmd","_cart");
BDRBZ+=this.lQKVU("business",CONST_WA_GLOBAL_SETTINGS.email_paypal_account);
BDRBZ+=this.lQKVU("upload","1");
BDRBZ+=this.lQKVU("charset","utf-8");
BDRBZ+=this.lQKVU("no_note","0");
BDRBZ+=this.lQKVU("currency_code",CONST_WA_GLOBAL_SETTINGS.currency_code);
BDRBZ+=this.lQKVU("no_shipping","2");
BDRBZ+=this.lQKVU("address_override","1");
var efKOx=DZYPW.HpoCw()
for(var i=0;i<efKOx.length;i++)
{
var info=efKOx[i];
var index=i+1;
var wKand=info.dKgff();
if(DZYPW.udkMS())
{
var NNplL=DZYPW.lxQwb(DZYPW.pXjUm(wKand));
wKand=wKand-NNplL;
}
BDRBZ+=this.lQKVU("amount_"+index,""+wKand)
BDRBZ+=this.lQKVU("quantity_"+index,info.heQgW)
var mUwcV=0;
if(info.sgLtT.length>0)
{
BDRBZ+=this.lQKVU("on"+mUwcV+"_"+index,"ref")
BDRBZ+=this.lQKVU("os"+mUwcV+"_"+index,info.sgLtT)
mUwcV++;
}
var ZTDoQ=""
if(info.m_opt_vals)
{
for(var i_opt=0;i_opt<info.usdSF.options.length;i_opt++)
{
var SatSF=info.usdSF.options[i_opt]
if(SatSF)
{
var bNurM=info.m_opt_vals[i_opt];
var rRcfP=SatSF.vals[bNurM]
var VaYtb=SatSF.title;
if(VaYtb.length==0) VaYtb="opt"+(i_opt+1);
BDRBZ+=this.lQKVU("on"+mUwcV+"_"+index,VaYtb)
BDRBZ+=this.lQKVU("os"+mUwcV+"_"+index,rRcfP)
if(ZTDoQ.length>0)ZTDoQ=ZTDoQ+", "
ZTDoQ+=rRcfP
mUwcV++;
}
}
}
var grZgG=info.VPxcX;
if(ZTDoQ.length>0)grZgG=grZgG+"("+ZTDoQ+")"
BDRBZ+=this.lQKVU("item_name_"+index,grZgG) 
}
var DJmOL=DZYPW.cFKPL()
if(DZYPW.udkMS())
{
DJmOL=DJmOL-DZYPW.lxQwb(DZYPW.pXjUm(DJmOL));
}
if(DZYPW.udkMS())
{
var XCpZp=DZYPW.JbLZs();
var JoTNE=DZYPW.cFKPL()
var fWHPn=XCpZp+JoTNE;
var XisXK=DZYPW.lxQwb(DZYPW.pXjUm(fWHPn));
var uVhSN=fWHPn-XisXK;
uVhSN=uVhSN-DJmOL;
var JdZZw=0;
for(var i=0;i<efKOx.length;i++)
{
var info=efKOx[i];
var index=i+1;
var hEtwN=0;
var fcedN=0;
var wKand=info.heQgW*info.dKgff();
var n0=DZYPW.qPidm()/100;
var tax=wKand*(n0/(1+n0));
wKand=wKand-tax;
hEtwN=wKand;
var wEXEN=info.dKgff();
var NNplL=DZYPW.lxQwb(DZYPW.pXjUm(wEXEN));
wEXEN=wEXEN-NNplL;
fcedN=info.heQgW*wEXEN;
if(fcedN>hEtwN)
{
wEXEN=info.m_price;
wEXEN=wEXEN-NNplL;
var cZbcO=wEXEN;
if((cZbcO>0)&&(cZbcO!=info.dKgff()))
{
cZbcO=cZbcO-0.01;
}
BDRBZ+=this.lQKVU("amount_"+index,cZbcO) 
fcedN=info.m_quantity*cZbcO;
}
JdZZw+=fcedN;
}
var YTnDX=DZYPW.lxQwb(uVhSN-JdZZw);
if(YTnDX>0)
{
var index=efKOx.length+1;
BDRBZ+=this.lQKVU("item_name_"+index,Translator.tr("TVA correction"))
BDRBZ+=this.lQKVU("quantity_"+index,1)
BDRBZ+=this.lQKVU("amount_"+index,YTnDX)
}
BDRBZ+=this.lQKVU("tax_cart",XisXK)
}
else
{
BDRBZ+=this.lQKVU("tax_cart",DZYPW.Jtlgm())
}
BDRBZ+=this.lQKVU("handling_cart",DJmOL) 
BDRBZ+="</form>"
return BDRBZ;
}
uaOVI.jLNMr=function()
{
var vZTYb=this.qnVji(NBpju);
var BDRBZ="";
if(vZTYb.length>0)
{
BDRBZ+=""+Translator.tr("Shipping information")+":\n";
BDRBZ+=vZTYb;
}
return BDRBZ;
}
uaOVI.fdmYi=function()
{
var vZTYb=this.qnVji(YnuvA);
var BDRBZ="";
if(vZTYb.length>0)
{
BDRBZ+=Translator.tr("Billing information")+":\n";
BDRBZ+=vZTYb;
}
return BDRBZ;
}
uaOVI.qnVji=function(jswCl)
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP
var BDRBZ="";
var svFMG=new Array();
var MFGkm=ETrDa(CONST_WA_GLOBAL_SETTINGS.list_form_fields)
MFGkm.push("country")
MFGkm.push("state")
for(var i=0;i<MFGkm.length;i++)
{
var DxxrQ=MFGkm[i];
svFMG[DxxrQ]=wVqtH.LQkjr(DxxrQ,jswCl)
}
if(svFMG["firstname"])BDRBZ+=svFMG["firstname"]+"\n"
if(svFMG["lastname"])BDRBZ+=svFMG["lastname"]+"\n"
if(svFMG["company"])
{
BDRBZ+=Translator.tr("form-label-company")+" : "+svFMG["company"]+"\n"
}
if(svFMG["fiscal_code"]) BDRBZ+=Translator.tr("form-label-fiscal_code")+" : "+svFMG["fiscal_code"]+"\n"
if(svFMG["tva"]) BDRBZ+=Translator.tr("form-label-tva")+" : "+svFMG["tva"]+"\n"
if(svFMG["address_1"]) BDRBZ+=svFMG["address_1"]+"\n"
if(svFMG["address_2"]) BDRBZ+=svFMG["address_2"]+"\n"
if(svFMG["zip"]) BDRBZ+=svFMG["zip"]+" "
if(svFMG["city"]) BDRBZ+=svFMG["city"]+"\n"
if(svFMG["country"])BDRBZ+=Translator.country(svFMG["country"])
if(svFMG["state"]&&svFMG["state"].length>0) BDRBZ+=" "+WA_stateLabel(svFMG["country"],svFMG["state"]);
BDRBZ+="\n"
if(svFMG["phone"]) BDRBZ+=Translator.tr("form-label-phone")+" : "+svFMG["phone"]+"\n"
if(svFMG["mobile_phone"]) BDRBZ+=Translator.tr("form-label-mobile_phone")+" : "+svFMG["mobile_phone"]+"\n"
if(svFMG["fax"]) BDRBZ+=Translator.tr("form-label-fax")+" : "+svFMG["fax"]+"\n"
if(svFMG["email"]) BDRBZ+=svFMG["email"]+"\n" 
if(svFMG["comment"])
{
BDRBZ+=Translator.tr("form-label-comment")+" : \n";
BDRBZ+=svFMG["comment"]+"\n"
}
return BDRBZ;
}
uaOVI.hIWnf=function()
{
var DZYPW=GsZmP();
var BDRBZ="";
var efKOx=DZYPW.HpoCw();
BDRBZ+="**************\n"
for(var i=0;i<efKOx.length;i++)
{
var wVqtH=efKOx[i];
var index=i+1;
var grZgG=wVqtH.VPxcX;
if(wVqtH.sgLtT.length>0)
{
grZgG+=" ["+wVqtH.sgLtT+"]";
}
var ZTDoQ=""
if(wVqtH.m_opt_vals)
{
for(var i_opt=0;i_opt<wVqtH.usdSF.options.length;i_opt++)
{
var SatSF=wVqtH.usdSF.options[i_opt]
if(SatSF)
{
if(ZTDoQ.length>0)ZTDoQ=ZTDoQ+", "
var bNurM=wVqtH.m_opt_vals[i_opt];
var rRcfP=SatSF.vals[bNurM]
var VaYtb=SatSF.title;
if(VaYtb.length>0) ZTDoQ+=VaYtb+" : "
ZTDoQ+=rRcfP
}
}
}
if(ZTDoQ.length>0)grZgG=grZgG+"\n("+ZTDoQ+")"
BDRBZ+=grZgG;
BDRBZ+="\n"
BDRBZ+=Translator.tr("Price")+" : "+DZYPW.amveR(wVqtH.dKgff())+"\n"
BDRBZ+=Translator.tr("Quantity")+" : "+wVqtH.heQgW+"\n"
BDRBZ+=Translator.tr("Total")+" : "+DZYPW.amveR(wVqtH.dKgff()*wVqtH.heQgW);
BDRBZ+="\n"
BDRBZ+="**************\n"
}
var UeIeS=DZYPW.JbLZs()
var rdcsh=DZYPW.Jtlgm()
var gPFiF=DZYPW.cFKPL()
var FIrsl=DZYPW.OWptX()
var hSxJs=DZYPW.vkjil() 
BDRBZ+=Translator.tr("Sub total")+" : "+DZYPW.amveR(UeIeS)+"\n";
if(CONST_WA_GLOBAL_SETTINGS.shipping_type!=evVBR)
{
BDRBZ+=Translator.tr("Shipping amount")+" : "+DZYPW.amveR(gPFiF)+"\n";
}
if(DZYPW.udkMS()||DZYPW.INSpo())
{
if(DZYPW.udkMS())
{
BDRBZ+=Translator.tr("Tax included");
}
if(DZYPW.INSpo())
{
BDRBZ+=Translator.tr("Extra Tax");
}
BDRBZ+=" : ";
BDRBZ+=DZYPW.amveR(rdcsh)+"\n";
}
if(hSxJs>0)
{
BDRBZ+=Translator.tr("Promotion")+" : - "+DZYPW.amveR(hSxJs)+"\n";
}
BDRBZ+=Translator.tr("Total")+" : "+DZYPW.amveR(FIrsl)+"\n";
return BDRBZ;
}
uaOVI.NOelE=function()
{
var DZYPW=GsZmP();
var BDRBZ="";
var efKOx=DZYPW.HpoCw();
BDRBZ+="<table class=wa-cart-global-table >";
BDRBZ+="<tr class=wa-cart-title >";
BDRBZ+="<td>&nbsp;</td>";
BDRBZ+="<td>"+Translator.tr("Price")+"</td>";
BDRBZ+="<td>"+Translator.tr("Quantity")+"</td>";
BDRBZ+="<td>"+Translator.tr("Total")+"</td>";
BDRBZ+="</tr>"
for(var i=0;i<efKOx.length;i++)
{
BDRBZ+="<tr>";
var wVqtH=efKOx[i];
var index=i+1;
BDRBZ+="<td>";
var grZgG=wVqtH.VPxcX;
if(wVqtH.sgLtT.length>0)
{
grZgG+=" ["+wVqtH.sgLtT+"]";
}
grZgG="<b>"+grZgG+"</b>";
var ZTDoQ="";
if(wVqtH.m_opt_vals)
{
for(var i_opt=0;i_opt<wVqtH.usdSF.options.length;i_opt++)
{
var SatSF=wVqtH.usdSF.options[i_opt];
if(SatSF)
{
if(ZTDoQ.length>0)ZTDoQ=ZTDoQ+", ";
var bNurM=wVqtH.m_opt_vals[i_opt];;
var rRcfP=SatSF.vals[bNurM];
var VaYtb=SatSF.title;;
if(VaYtb.length>0) ZTDoQ+=VaYtb+" : ";
ZTDoQ+=rRcfP;
}
}
}
if(ZTDoQ.length>0)grZgG=grZgG+"<br><span class=wa-cart-option >("+ZTDoQ+")</span>";
BDRBZ+=grZgG;;
BDRBZ+="</td>";
BDRBZ+="<td>"+DZYPW.uaqtn(wVqtH.dKgff())+"</td>";
BDRBZ+="<td>"+wVqtH.heQgW+"</td>";
BDRBZ+="<td>"+DZYPW.uaqtn(wVqtH.dKgff()*wVqtH.heQgW)+"</td>";
BDRBZ+="</tr>";
}
BDRBZ+="<tr><td colspan=4>";
var UeIeS=DZYPW.JbLZs();
var rdcsh=DZYPW.Jtlgm();
var gPFiF=DZYPW.cFKPL();
var FIrsl=DZYPW.OWptX();
var hSxJs=DZYPW.vkjil();
BDRBZ+="<table class=wa-cart-table-total >";
BDRBZ+="<tr><td align=right >"+Translator.tr("Sub total")+" : "+DZYPW.uaqtn(UeIeS)+"</td></tr>";
if(CONST_WA_GLOBAL_SETTINGS.shipping_type!=evVBR)
{
BDRBZ+="<tr><td align=right>"+Translator.tr("Shipping amount")+" : "+DZYPW.uaqtn(gPFiF)+"</td></tr>";
}
if(DZYPW.udkMS()||DZYPW.INSpo())
{
if(DZYPW.udkMS())
{
BDRBZ+="<tr><td align=left >"+Translator.tr("Tax included");
}
if(DZYPW.INSpo())
{
BDRBZ+="<tr><td align=right >"+Translator.tr("Extra Tax");
}
BDRBZ+=" : ";
BDRBZ+=DZYPW.uaqtn(rdcsh)+"</td></tr>";
}
if(hSxJs>0)
{
BDRBZ+="<tr><td align=right class=wa-cart-promo >"+Translator.tr("Promotion")+" : - "+DZYPW.uaqtn(hSxJs)+"</td></tr>";
}
BDRBZ+="<tr><td align=right class=wa-cart-total >"+Translator.tr("Total")+" : "+DZYPW.uaqtn(FIrsl)+"</td></tr>";
BDRBZ+="</table>";
BDRBZ+="</td></tr>";
BDRBZ+="</table>";
BDRBZ=BDRBZ.replace(/\"/g,"'");
return BDRBZ;
}
uaOVI.dSNVZ=function(qmSQF)
{
if((""+qmSQF).length==1)qmSQF="0"+qmSQF;
return qmSQF;
}
uaOVI.jxqQB=function(DxxrQ)
{
var DZYPW=GsZmP();
return DZYPW.nUbVP.LQkjr(DxxrQ,NBpju);
}
uaOVI.bcEBP=function(DxxrQ)
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP;
if(wVqtH.NGuDb)
{
return DZYPW.nUbVP.LQkjr(DxxrQ,NBpju);
}
return DZYPW.nUbVP.LQkjr(DxxrQ,NBpju);
}
uaOVI.iClfk=function()
{
var DZYPW=GsZmP();
var wVqtH=DZYPW.nUbVP;
var SdRAW=CONST_WA_GLOBAL_SETTINGS.currency_info;
var BDRBZ=""
if(SdRAW.charCodeAt(3)>=100) return"";
if(NBwqx)
{
BDRBZ+="<form id='wa-http-sender' accept-charset='UTF-8' method=POST action='"+NBwqx_URL+"crbst_market_print_form.php' target='_blank'>";
}
else
{
BDRBZ+="<form id='wa-http-sender' accept-charset='UTF-8' method=POST action='crbst_market_print_form.php' target='_blank'>";
}
BDRBZ+=this.lQKVU("type_payment",wVqtH.ddUSI);
BDRBZ+=this.lQKVU("MAIL_TITLE_PREFIXE",Translator.tr("title email Order notification"));
BDRBZ+=this.lQKVU("MAIN_TITLE",Translator.tr("PRINT_FORM_MAIN_TITLE"));
BDRBZ+=this.lQKVU("PREFIXE_ORDER",Translator.tr("PRINT_FORM_PREFIXE_ORDER"));
var meTwt="";
var eEEEZ=new Date();
meTwt+="wa-"+this.dSNVZ(eEEEZ.getYear()-100)+this.dSNVZ(eEEEZ.getMonth()+1)+this.dSNVZ(eEEEZ.getDate());
meTwt+=eEEEZ.getHours()+this.dSNVZ(eEEEZ.getMinutes())+this.dSNVZ(eEEEZ.getSeconds());
meTwt+="-"+Math.round(Math.random()*100);
BDRBZ+=this.lQKVU("ID_ORDER",meTwt);
BDRBZ+=this.lQKVU("CARD_TITLE",Translator.tr("PRINT_FORM_CARD_TITLE"));
BDRBZ+=this.lQKVU("LABEL_TYPE_PAYMENT",Translator.tr("PRINT_FORM_LABEL_TYPE_PAYMENT"));
BDRBZ+=this.lQKVU("send_copy_email_to_buyer",(CONST_WA_GLOBAL_SETTINGS.send_copy_email_to_buyer)?"1":"0");
var svFMG=new Array();
var MFGkm=ETrDa(CONST_WA_GLOBAL_SETTINGS.list_form_fields);
MFGkm.push("country")
MFGkm.push("state")
for(var i=0;i<MFGkm.length;i++)
{
var DxxrQ=MFGkm[i];
svFMG[DxxrQ]=DZYPW.nUbVP.LQkjr(DxxrQ,NBpju);
}
if(wVqtH.ddUSI=="paypal")
{
BDRBZ+=this.lQKVU("form_first_name",this.bcEBP("firstname"));
BDRBZ+=this.lQKVU("form_last_name",this.bcEBP("lastname"));
BDRBZ+=this.lQKVU("form_address1",this.bcEBP("address_1"));
BDRBZ+=this.lQKVU("form_address2",this.bcEBP("address_2"));
BDRBZ+=this.lQKVU("form_city",this.bcEBP("city"));
BDRBZ+=this.lQKVU("form_zip",this.bcEBP("zip"));
BDRBZ+=this.lQKVU("form_state",this.bcEBP("state"));
BDRBZ+=this.lQKVU("form_country",this.bcEBP("country"));
BDRBZ+=this.lQKVU("form_company",this.bcEBP("company"));
BDRBZ+=this.lQKVU("form_fiscal_code",this.bcEBP("fiscal_code"));
BDRBZ+=this.lQKVU("form_tva",this.bcEBP("tva"));
BDRBZ+=this.lQKVU("form_phone",this.bcEBP("phone"));
BDRBZ+=this.lQKVU("form_mobile_phone",this.bcEBP("mobile_phone"));
BDRBZ+=this.lQKVU("form_fax",this.bcEBP("fax"));
}
else
{
BDRBZ+=this.lQKVU("form_first_name",svFMG["firstname"]);
BDRBZ+=this.lQKVU("form_last_name",svFMG["lastname"]);
BDRBZ+=this.lQKVU("form_address1",svFMG["address_1"]);
BDRBZ+=this.lQKVU("form_address2",svFMG["address_2"]);
BDRBZ+=this.lQKVU("form_city",svFMG["city"]);
BDRBZ+=this.lQKVU("form_zip",svFMG["zip"]);
BDRBZ+=this.lQKVU("form_state",svFMG["state"]);
BDRBZ+=this.lQKVU("form_country",svFMG["country"]);
BDRBZ+=this.lQKVU("form_company",svFMG["company"]);
BDRBZ+=this.lQKVU("form_fiscal_code",svFMG["fiscal_code"]);
BDRBZ+=this.lQKVU("form_tva",svFMG["tva"]);
BDRBZ+=this.lQKVU("form_phone",svFMG["phone"]);
BDRBZ+=this.lQKVU("form_mobile_phone",svFMG["mobile_phone"]);
BDRBZ+=this.lQKVU("form_fax",svFMG["fax"]);
}
BDRBZ+=this.lQKVU("CARD_TOTAL_PRICE",DZYPW.OWptX());
BDRBZ+=this.lQKVU("CARD_CURRENCY",CONST_WA_GLOBAL_SETTINGS.currency_code);
BDRBZ+=this.lQKVU("CARD_LANG",Translator.m_lang);
BDRBZ+=this.lQKVU("LABEL_PROCESS_ORDER",Translator.tr("PRINT_FORM_PROCESS_ORDER"));
BDRBZ+=this.lQKVU("wa_promo_code",DZYPW.nUbVP.tFMPu);

BDRBZ+=this.lQKVU("email_buyer",wVqtH.LQkjr("email",NBpju));
var NiQFF=rANdE(wVqtH.ddUSI);
BDRBZ+=this.lQKVU("TYPE_PAYMENT",NiQFF);
if(wVqtH.ddUSI=="check")
{
BDRBZ+=this.lQKVU("MESSAGE_CHECK",Translator.tr("PRINT_FORM_MESSAGE_CHECK"));
}
if(wVqtH.ddUSI=="wire")
{
BDRBZ+=this.lQKVU("MESSAGE_WIRE",Translator.tr("PRINT_FORM_MESSAGE_WIRE"));
}
if(wVqtH.ddUSI=="paypal")
{
BDRBZ+=this.lQKVU("LABEL_PAYPAL_CART_TITLE",Translator.tr("PRINT_FORM_PAYPAL_CART_TITLE"));;
BDRBZ+=this.lQKVU("MESSAGE_PAYPAL",Translator.tr("PRINT_FORM_MESSAGE_PAYPAL"));
}
BDRBZ+=this.lQKVU("LABEL_PRINT",Translator.tr("PRINT_FORM_LABEL_PRINT"));
BDRBZ+=this.lQKVU("card_html",this.NOelE());
BDRBZ+=this.lQKVU("card_plain_text",this.hIWnf());
BDRBZ+=this.lQKVU("LABEL_SELLER_INFORMATION",Translator.tr("Seller information"));
BDRBZ+=this.lQKVU("LABEL_BANK_ACCOUNT",Translator.tr("Bank account information"));
BDRBZ+=this.lQKVU("LABEL_ADDRESS",Translator.tr("Address"));
BDRBZ+=this.lQKVU("seller_address",CONST_WA_GLOBAL_SETTINGS.seller_address);
BDRBZ+=this.lQKVU("bank_account_informations",CONST_WA_GLOBAL_SETTINGS.bank_account_informations);
BDRBZ+=this.lQKVU("buyer_info_shipping",this.jLNMr());
var ShDgt="";
if(wVqtH.NGuDb)
{
ShDgt=this.fdmYi();;
};
BDRBZ+=this.lQKVU("buyer_info_billing",ShDgt);
BDRBZ+="</form>";
return BDRBZ;
}
uaOVI.WDnIM=function()
{
var DZYPW=GsZmP();
DZYPW.ewjta();
this.closeWin();
}
uaOVI.RVecl=function()
{
var SdRAW=CONST_WA_GLOBAL_SETTINGS.currency_info;
var DZYPW=GsZmP();
var khhTM=true;
var wVqtH=DZYPW.nUbVP;
if(wVqtH.ddUSI=="paypal")
{
if(DZYPW.OsJkn==true)
{
khhTM=false;
}
if((DZYPW.OsJkn==true)&&(CONST_WA_GLOBAL_SETTINGS.list_promo_codes!=false))
{
khhTM=true;
}
}
if((khhTM==false)&&(wVqtH.ddUSI=="paypal"))
{
this.addButton(Translator.tr('Clear cart'),this.WDnIM,[""],this);
this.initializeWindow(400,200);
}
else
{
this.initializeWindow(400,150);
}
var BDRBZ=""
if((khhTM==false)&&(wVqtH.ddUSI=="paypal"))
{
BDRBZ+=this.XapEg();
}
if(khhTM)
{
BDRBZ+=this.iClfk();
if((NBwqx==false)&&(document.webaca_is_preview))
{
WA_Dialog.alert(Translator.tr("Operation not allowed in preview mode"));
return;
}
}
BDRBZ+="<table border=0 style='width:100%;'><tr>";;
BDRBZ+="<td align=center style='"+this.cssText1()+"'>";
BDRBZ+=Translator.tr("You have been redirected to the payment page");
if((khhTM==false)&&(wVqtH.ddUSI=="paypal"))
{
BDRBZ+="<br><br>";
BDRBZ+=Translator.tr("You can clear your cart");
}
BDRBZ+="</td></tr></table>";
this.writeContent(BDRBZ);
if(SdRAW.charCodeAt(3)>=100)
{
WA_Dialog.alert(Translator.tr("This cariboost edition can't support ebusiness features !'"));
return;
}
var ffPxv=document.getElementById("wa-http-sender");;
ffPxv.submit();
if(khhTM)
{
DZYPW.ewjta();
}
}
uaOVI.RVecl();
}

-->
