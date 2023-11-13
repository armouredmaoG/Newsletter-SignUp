var formContainer = document.querySelector(".container");
var successMsgContainer = document.querySelector(".successMsgContainer");

var inputEmail =  document.getElementById("mail");
var subscribeBtn = document.getElementById("subscribe-button");
var dismissBtn = document.getElementById("dismiss-button");

var emailIDHolder = document.getElementById("mail-id");
var invalidAlert = document.getElementById("notif");

var mobileSize = window.matchMedia("(max-width: 480px)");

function validateEmail(mail){
    const pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    return mail.match(pattern);
}

subscribeBtn.addEventListener("click",function(){
    console.log(inputEmail.value);
    var mailID = inputEmail.value;
    if(validateEmail(mailID)){
        console.log("Valid");
        emailIDHolder.innerText = mailID;
        formContainer.style.display =  "none";
        successMsgContainer.style.display = "flex";
    }else{
        console.log("Not valid");
        invalidAlert.innerText = "Valid email required";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
        inputEmail.style.color = "hsl(4, 100%, 67%)";
    }
    
});

dismissBtn.addEventListener("click", function(){
    successMsgContainer.style.display = "none";
    if(mobileSize.matches){
        formContainer.style.display =  "flex";
    }else{
        formContainer.style.display =  "grid";
    }
});



