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
    };
    
};


let btn_sub = document.getElementById("btn-sub");
btn_sub.onclick =(e)=>{
    e.preventDefault()

    let username = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let myPassword = document.getElementById("mypassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);
    localStorage.setItem("myPassword", myPassword);
    
    
    if (username == "") {

        swal("","Please Enter Your Name..!","error");
    }else if(number == ""){
        swal("","Please Enter Your Number..!","error");

    }else if(email == ""){
        swal("","Please Enter Your Email..!","error");
    }else if (myPassword == ""){
        swal("","Please Enter Your Password..!","error");
    }else{
        swal("Done","Your Enter is Placed Successfully" , "success");
        document.getElementById("name").value= "";
        document.getElementById("number").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mypassword").value = "";
        
    }
    
    console.log('user added');
};



