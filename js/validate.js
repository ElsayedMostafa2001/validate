

function validate(){
    var userName=document.getElementById("userName").value;
    var Email=document.getElementById("email").value;
    var Password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("ConfirmPassword").value;
    var errorMessage=document.getElementById("errorMessage"); 
            errorMessage.style.padding= "10px";
            errorMessage.style.borderRadius= "12px";
            errorMessage.style.backgroundColor= "violet";
            errorMessage.style.color ="gray";
            errorMessage.style.textAlign="center";
            errorMessage.style.transition= "all .5s linear";
            errorMessage.style.marginBottom="20px";
    

    if(userName==""& Email==""& Password==""& confirmPassword=="")
    {
        errorMessage.innerHTML="please Insert Valid Data";
        return false;

    }else if(userName.length<5 || userName.length>15)
    {
        errorMessage.innerHTML="please Insert 5-15 character in username";
        return false;

    }else if(Email.indexOf("@")==-1)
    {
        errorMessage.innerHTML="Please Enter Valid Email";
        return false;

    }else if(Password.length<8)
    {
        errorMessage.innerHTML="please Insert atleast 8 character in password";
        return false;

    }else if(confirmPassword!=Password)
    {
        errorMessage.innerHTML="please Matched password";
        return false;
    }
    else
    {
        return true;
    }
}