
let span = document.querySelector(".up");

window.onscroll = function(){
    if(this.scrollY >= 500){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    };
    
    
};
span.onclick= function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

let username = localStorage.getItem('username');
let user_enter = document.getElementById('user-enter');

if (localStorage.getItem('email')&&localStorage.getItem('myPassword')) {

    user_enter.classList.contains("d-block");
    user_enter.classList.remove("d-none");
}else{
    user_enter.classList.contains("d-none");
    user_enter.classList.remove("d-block");
}
user_enter.innerHTML += ` <span>${username}</span>`;
