function display() {
    
    let password = document.getElementById("mypassword");
    let eye = document.getElementById("hide1");
    let eye_slash = document.getElementById("hide2");
    
    if (password.type == 'password') {
        password.type = "type";
        eye.style.display = "block";
        eye_slash.style.display = "none";
    }else{
        password.type = "password";
        eye.style.display = "none";
        eye_slash.style.display = "block";
    }
};

let btnSub = document.getElementById("btnSub");

btnSub.onclick = (e)=>{
    e.preventDefault();
    
    let email = document.getElementById("email");
    let password = document.getElementById("mypassword");
    
    if (localStorage.getItem('username') == email.value && localStorage.getItem('myPassword') == password.value ) {
        
        swal("","Confirmed","success");
        window.location = "index.html";
    }else{
        swal("Error..","The username or password you entered is not linked to the account..! Please try again.","error");
    }

}
let user_enter = document.getElementById('user-enter');

if (localStorage.getItem('email')&&localStorage.getItem('myPassword')) {
    
    user_enter.classList.contains("d-block");
    user_enter.classList.remove("d-none");
    
}else{
    user_enter.classList.contains("d-none");
    user_enter.classList.remove("d-block");
    
};
