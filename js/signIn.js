var mailInput=document.getElementById('mail');
 var passInput=document.getElementById('pass');
 var loginButton =document.getElementById('loginButton');
 var alertMessage=document.getElementById('alertMessage');
 
 var allUsers = []
 
 function login(){
if(checkData() == true){
window.location.href='index.html'
}
else{
    getRedAlertMessage();
}
 }
 if (localStorage.getItem('Users')!= null){
    allUsers=JSON.parse(localStorage.getItem('Users'));
     }

function checkData(){
    for(var i = 0; i<allUsers.length;i++){
        if(allUsers[i].mail== mailInput.value && allUsers[i].pass==passInput.value){
            localStorage.setItem('userName',allUsers[i].userName)
            return true;
        }
    }
}
function getRedAlertMessage(){
   alertMessage.classList.replace('d-none','d-block');
   alertMessage.innerHTML='Email or Password is not valid';
   alertMessage.style.color='red';
}



 loginButton.addEventListener('click',login);