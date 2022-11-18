 //form 1

        function vfun(){
            var uname=document.forms["myform"]["uname"].value;
            var upswd=document.forms["myform"]["upswd"].value;

        if(uname==null || uname=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the user name";
                 return false;
        }

        if(upswd==null || upswd==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;
        }

        if (uname != '' && upswd != '' ){
         alert("Login successfully");
                         }
