function computeString(){
    var n = Number(document.getElementById("number").value);
    var ans = new Array();
    for (var i =1;i<=n;i++)
    {
        if( i % 3 == 0 && i % 5 == 0)
        {
            ans.push("fizzbuzz");
        }
        else if ( i % 3 == 0 )
        {
            ans.push("fizz");
        }
        
        else if ( i % 5 == 0 )
        {
            ans.push("buzz");
        }
        else{
            ans.push(i);
        }
    }
   document.getElementById("answer").innerHTML=ans;
}