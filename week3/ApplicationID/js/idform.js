function validateDetails(){
    
    $("button").click(function(){
        
        var flag;        
        // validation for preferred name 

        if($("#fname").val()=="")
        {
            $("#fnamerr").show();
            $("#fnamerr").html("Please enter your preferred name</b>");
            flag=0;
        }
        else{
            $("#fnamerr").hide();
            flag =1;
        }
        // validation for full name 

        if($("#fullname").val()=="")
        {
            $("#fullnamerr").show();
            $("#fullnamerr").html("Please enter your full name</b>");
            flag=0;
        }
        else{
            $("#fullnamerr").hide();
            flag=1;
        }

        // validation for designation 

        if($("#designation").val()=="")
        {
            $("#derr").show();
            $("#derr").html("Please enter your designation ex.associate engineer</b>");
            flag=0;
        }
        else{
            $("#derr").hide();
            flag=1;
        }
        
        //validation for employee code
        $("#empcode").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            $("#ecodeerr").show();
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               //display error message
               $("#ecodeerr").html("Digits Only");
               flag=0;
                      return false;
           }
           else{
               $("#ecodeerr").hide();
               flag=1;
           }
          });

          $("#mobile").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            $("#ecodeerr").show();
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               //display error message
               $("#numerr").html("Digits Only");
               flag=0;
                      return false;
           }
           else{
               $("#numerr").hide();
               flag=1;
           }
          });
          // phone number validation

          if (($("#mobile").val()).length != 10 ){
              $("#numerr").show();
              $("#numerr").html("Phone number should be of 10 digits");
              flag=0;
          }
          else{
              $("#numerr").hide();
              flag=1;
          }

          // emergency contact number validation

          $("#emobile").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            $("#emerr").show();
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               //display error message
               $("#emerr").html("Digits Only");
               flag=0;
                      return false;
           }
           else{
               $("#emerr").hide();
               flag=1;
           }
          });

          if (($("#emobile").val()).length != 10 ){
            $("#emerr").show();
            $("#emerr").html("Phone number should be of 10 digits");
            flag=0;
        }
        else{
            $("#emerr").hide();
            flag=1;
        }

        // email validation
       const mail = $("#email").val();
       const pattern = /^[a-zA-Z][a-zA-Z0-9]{5,}@virtusa.com$/;
       if( mail.match(pattern)){
           $("#emailerr").hide();
           flag=1;
       }
       else{
           $("#emailerr").show();
           $("#emailerr").html("invalid email address");
           flag=0;
       }

       if(flag==1){
        const data = {
            firstName: $('#fname').val(),
            fullName: $('#fullname').val(),
            email : $("#email").val(),
            mobile : $("#mobile").val(),
            designation :$("#designation").val(),
            employeecode : $("#empcode").val(),
            doe : $("#empdate").val(),
            reason : $("#issue").val()
        };
        $.ajax({
            type: "POST",
            url: 'https://idformapp.firebaseio.com/id-applicationform.json',
            data: JSON.stringify(data),
            success: onPostSuccess,
           // dataType: JSON
        });
       }
       else{
           alert("error");
       }

       var onPostSuccess = (data) => {
        console.log('Posting to firebase success');
        console.log(data);
    }
    });
}
