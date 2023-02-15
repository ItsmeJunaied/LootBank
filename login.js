document.getElementById("info_sub").addEventListener("click",function(){
    const myemail=document.getElementById("user_email");
    const getMail=myemail.value;

    const mypass=document.getElementById("user_pass");
    const getPass=mypass.value;

    if(getMail==="420@bank.com" && getPass==="420"){
        window.location.replace("bank.html");
    }
    else{
        alert("Click on forgot e-mail & pass")
    }
})