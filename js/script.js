function check(){
    var usr=document.getElementById("usr");
    var pass=document.getElementById("pass");
    var mail=document.getElementById("mail");
    var addr=document.getElementById("addr");
    var org=document.getElementById("org");
    var cb=document.getElementById("cb");
    
    if(usr.value.trim()==""){
        usr.style.border="solid 2px red";
        return false;
    }
    var regx=/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(mail.value.trim()==""){
        mail.style.border="solid 2px red";
        return false;
    }
    else if(regx.test(mail)){
        mail.style.border="solid 2px red";
        return false;
    }
    if(pass.value.trim()==""){
        pass.style.border="solid 2px red";
        return false;
    }
    if(pass.value.trim().length<5){
        pass.style.border="solid 2px red";
        return false;
    }
    
    if(org.value.trim()==""){
        org.style.border="solid 2px red";
        return false;
    }
    if(addr.value.trim()==""){
        addr.style.border="solid 2px red";
        return false;
    }
    if(!cb.checked){
        alert("Please check the terms and conditions.")
        return false;
    } 
}
function usrCheck(){
    var usr=document.getElementById("usr");
    if(usr.value.trim()!=""){
        usr.style.border="solid 2px #3498db";
    }
}
function mailCheck(){
    var mail=document.getElementById("mail");
    if(mail.value.trim()!=""){
        mail.style.border="solid 2px #3498db";
    }
}
function passCheck(){
    var pass=document.getElementById("pass");
    if(usr.value.trim()!="" && pass.value.trim().length>5){
        pass.style.border="solid 2px #3498db";
    }
}
function orgCheck(){
    var org=document.getElementById("org");
    if(org.value.trim()!=""){
        org.style.border="solid 2px #3498db";
    }
}
function addrCheck(){
    var addr=document.getElementById("addr");
    if(addr.value.trim()!=""){
        addr.style.border="solid 2px #3498db";
    }
}
