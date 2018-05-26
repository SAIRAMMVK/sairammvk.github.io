function computeSumMul(){
    var n = Number(document.getElementById("number").value);
    var total=0;
   //var n = parseInt(num);
    for(var i = 1; i<n;i++)
    {
        if( i%3 == 0 || i%5 == 0)
        {
          total = total+i;
        }
    }
    document.getElementById("answer").innerHTML="summation is "+ total;
}