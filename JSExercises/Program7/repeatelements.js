
function computeRepeat()
{
    var flag;
    var inputem = document.getElementById("number").value;
    var arr=inputem.split(",");
    arr.sort();
    var str="";
    for(var i =0;i<arr.length;i++)
    {
        flag=0;
        if(arr[i]==-999)
                continue;
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                if(flag==0)
                    str += "\""+arr[i]+"\""+"<br/>";
                arr[j]=-999;
                flag=1;
            }
        }
    }
    document.getElementById("answer").innerHTML="Repeated elements are "+str;
}