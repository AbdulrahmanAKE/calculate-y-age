function Age()
{
var bday=parseInt(document.forms[0].txtBday.value);
var bmo=(parseInt(document.forms[0].txtBmo.value)-1);
var byr=parseInt(document.forms[0].txtByr.value);
var byr;
var age;
var now = new Date();
tday=now.getDate();
tmo=(now.getMonth());
tyr=(now.getFullYear());
{
if((tmo > bmo)||(tmo==bmo & tday>=bday))
{age=byr}
else
{age=byr+1}
alert("As of today, "+now+' \n'+", you are:"+" "+(tyr-age)+ " years old");
}}

