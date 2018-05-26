function computePairs(){
    var inputvalue = document.getElementById("number").value;
     var inputsum = Number(document.getElementById("numvalue").value);
    var arr = new Array();
    var str ="";
    arr = inputvalue.split("");
   // ert(arr);
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if (Number(arr[i])+Number(arr[j])==inputsum)
            {
                str += "\""+arr[i]+","+arr[j]+"\""+"<br/>";
            }
        }
    }
    document.getElementById("answer").innerHTML="The pairs are <br/>" +str;
}