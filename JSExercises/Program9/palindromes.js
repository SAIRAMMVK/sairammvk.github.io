function computePalindrome()
{
    var inputem = document.getElementById("number").value;
    var res=0;
    //var arr = inputem.slice(1,(inputem.length-1));
    for(var i=0;i<inputem.length/2;i++)
    {
        if(inputem[i] == inputem[(inputem.length-i-1)])
        {
            res = 1;
        }
        else{
            res = 0;
        }
    }
    if(res == 1)
    {
       document.getElementById("answer").innerHTML="the entered string is a palindrome";
    }
    else
    document.getElementById("answer").innerHTML="the entered string is not a palindrome";
}