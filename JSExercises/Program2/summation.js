function computeSum(){
var num = document.getElementById("number").value;
var n = parseInt(num);
if(n < 0 )
{
document.getElementById("answer").innerHTML="summation cannot be calculated for negative numbers";    
}
else
{
var total = n * (n+1)/2;
document.getElementById("answer").innerHTML="summation is "+ total;
}
}