//PLF - http://www.jejavascript.net/
function writext(texdef)
	{
	document.write(texdef);
	}

writext('<DIV ID=txt_defil_relativ onMouseOver="txt_defil_stop()" onMouseOut="txt_defil_rstart()" STYLE="position:relative;width:'+txt_defil_width +';height:'+txt_defil_height+';background-color:'+txt_defil_bgcolor+';background-image:url('+txt_defil_background+')">');
writext('<DIV ID=txt_defil_cadre STYLE="position:absolute;width:'+(txt_defil_width -8)+';height:'+(txt_defil_height-8)+';top:4;left:4;clip:rect(0 '+(txt_defil_width -8)+' '+(txt_defil_height-8)+' 0)">');
writext('<div id=txt_defiler_1 style="position:absolute;width:'+(txt_defil_width -8)+';left:0;top:0;" CLASS=txt_defil >'+txt_defil_info[0]+'</DIV>');
writext('<div id=txt_defiler_2 style="position:absolute;width:'+(txt_defil_width -8)+';left:0;top:'+txt_defil_height+';" CLASS=txt_defil >'+txt_defil_info[1]+'</DIV>');
writext('</DIV></DIV>');

txt_defil_1 =1;
txt_defil_2 = 0;
stop_mouss=0;

function txt_defil_f1()
	{
	if(txt_defil_1 == 1)
		{
		txt_defiler_haut = "txt_defiler_1";
		txt_defiler_bas = "txt_defiler_2";
		txt_defil_1 = 0;
		}
	else
		{
		txt_defiler_bas = "txt_defiler_1";
		txt_defiler_haut = "txt_defiler_2";
		txt_defil_1 = 1;
		}
	txt_defil_nb_info = txt_defil_info.length-1;
	if(txt_defil_2 == txt_defil_nb_info)
		txt_defil_next = 0;
	else
		txt_defil_next = txt_defil_2+1;
	if(document.getElementById)
		document.getElementById(txt_defiler_bas).innerHTML = txt_defil_info[txt_defil_next];
	txt_defil_top = 0;
	if(document.getElementById)
	move1=setTimeout("txt_defil_f2 ()",txt_defil_pause)
	}

function txt_defil_f2 ()
	{
if (stop_mouss == 0)
{	
	txt_defil_top -= 1;
	document.getElementById(txt_defiler_haut).style.top = txt_defil_top;
	document.getElementById(txt_defiler_bas).style.top = txt_defil_top+txt_defil_height;
	if((txt_defil_top+txt_defil_height) > 0)
	move2=setTimeout("txt_defil_f2 ()",10)
	else
		txt_defil_f3()
}
else	move1=setTimeout("txt_defil_f2 ()",1000)	
	}

function txt_defil_f3()
	{
	txt_defil_2 = txt_defil_next;
	txt_defil_f1()
	}
function txt_defil_stop()
	{
	stop_mouss=1;
	}
function txt_defil_rstart()
	{
	stop_mouss=0;
	}	
window.onload = txt_defil_f1;


