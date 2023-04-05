
let save = document.getElementById('save-data');

save.onclick=(e)=>{
    e.preventDefault()

        let first_name = document.getElementById("first_name");
        let second_name = document.getElementById("second_name");
        let number = document.getElementById("number");
        let Your_age = document.getElementById("Your_age");
        let Your_weight = document.getElementById("Your_weight");
        let Your_height = document.getElementById("Your_height");
        let Your_email = document.getElementById("Your_email");
        let Comments_Questions = document.getElementById("Comments_Questions");

        localStorage.setItem('Is_first_name', first_name.value);
        localStorage.setItem('Is_second_name', second_name.value);
        localStorage.setItem('Is_number', number.value);
        localStorage.setItem('Is_Your_age', Your_age.value);
        localStorage.setItem('Is_Your_weight', Your_weight.value);
        localStorage.setItem('Is_Your_height', Your_height.value);
        localStorage.setItem('Is_Your_email', Your_email.value);
        localStorage.setItem('Is_Comments_Questions', Comments_Questions);

    if (first_name.value == ""){
        swal("","Please Complete Your Data..!","error");

    }else if( second_name.value == "" ){
        swal("","Please Complete Your Data..!","error");

    }else if( number.value == ""  ){
        swal("","Please Complete Your Data..!","error");

    }else if(Your_age.value == ""){
        swal("","Please Complete Your Data..!","error");

    }else if(Your_weight.value == "" ){
        swal("","Please Complete Your Data..!","error");

    }else if(Your_height.value == "" ){
        swal("","Please Complete Your Data..!","error");

    }else if(Your_email.value == "" ){
        swal("","Please Complete Your Data..!","error");

    }else{
        swal("Done","Your Data is Placed Successfully" , "success");
        first_name.value = "";
        second_name.value ="";
        number.value ="";
        Your_age.value ="";
        Your_weight.value ="";
        Your_height.value ="";
        Your_email.value ="";
        Comments_Questions.value ="";
    };
};



















