var logoutBtn=document.getElementById('logoutBtn');
var welcomeMessage=document.getElementById('welcomeMessage');

if (localStorage.getItem('Users')!= null){
   welcomeMessage.innerHTML=`welcome ${localStorage.getItem('userName')}`
     }
     

     function logOut(){
        window.location.href='signUp.html';
        localStorage.removeItem('userName');
     }

     logoutBtn.addEventListener('click',logOut);