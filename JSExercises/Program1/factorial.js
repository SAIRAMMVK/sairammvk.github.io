function computeFact(){
   var input_number = document.getElementById("number").value;
   var factorial=1;
    if(input_number == 0 || input_number < 0 )
       {
           factorial = 1;
       }
   for(var i = 1;i<=input_number;i++)
   {
       factorial = factorial *i;
      
   }
   document.getElementById("answer").innerHTML= "Factorial of "+input_number+" is "
   +factorial;
}