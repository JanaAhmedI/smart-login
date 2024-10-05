 var userNameInput=document.getElementById('userName');
 var mailInput=document.getElementById('mail');
 var passInput=document.getElementById('pass');
 var signUpBtnInput =document.getElementById('signUpBtn');
 var alertMessage=document.getElementById('alertMessage');

 var allUsers= []

 if (localStorage.getItem('Users')!= null){
    allUsers=JSON.parse(localStorage.getItem('Users'));
     }
     
 function signUp(){
    var userData={
        userName:userNameInput.value,
        mail:mailInput.value,
        pass:passInput.value
    }
    if(checkEmptyInputs() == true){
      getAlertMessageRed();
   }
   else{
         allUsers.push(userData);
        localStorage.setItem('Users',JSON.stringify(allUsers));
        getAlertMessage();
        clr();
   }
 }


function getAlertMessage()
{
   alertMessage.classList.replace('d-none','d-block');
   alertMessage.innerHTML='success';
   alertMessage.style.color='green';
}
signUpBtnInput.addEventListener("click",signUp);

function clr(){
   userNameInput.value='';
   mailInput.value='';
   passInput.value='';
}
function checkEmptyInputs(){
   if(userNameInput.value == '' || mailInput.value =='' || passInput.value =='')
      return true;
   else
   return false;
}

function getAlertMessageRed(){
   alertMessage.classList.replace('d-none','d-block');
   alertMessage.innerHTML='All Inputs Are Required';
   alertMessage.style.color='red';
}


