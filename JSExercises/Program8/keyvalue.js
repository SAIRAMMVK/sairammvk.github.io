var details=new Array();
var summation =0;
function insert()
{
    var key = document.getElementById("name").value;
    var val = document.getElementById("values").value;
    details.push({key:key,val:val});
}
function calculate()
{
   
    for(var i = 0;i<details.length;i++)
    {
       alert(details[i].val);
       summation += parseInt(details[i].val);
    }
   document.getElementById("answer").innerHTML="summation of property values is "+summation;
}