  var results = new Array();
function computeMulPalindrome(){
    var  inputem = document.getElementById("number").value;
    var arr = inputem.slice(1,(inputem.length-1));
    var strings = arr.split(",");
    for(var i=0;i<strings.length;i++)
    {
        checkpalindrome(strings[i]);
         //break;
    }
   // document.getElementById("answer").innerHTML=realpalindromes;
}
function checkpalindrome(test)
{
    var response =0;
    //alert(test.length);
    for(var a = 0; a<test.length/2;a++)
    {
        if( test[a] == test[test.length-a-1] )
        {
            response = 1;
        }
        else
        {
            response = 0;
        }
    }
    if ( response == 1)
    {
       results.push(test);
    }
   else{
       alert("not a palindrome");
   }
   document.getElementById("answer").innerHTML="The palindromes are:"+results;
}