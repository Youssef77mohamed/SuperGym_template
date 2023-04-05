// open & close cart 
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener('click', ()=>{
    cart.classList.add('active');
});
closeCart.addEventListener('click', ()=>{
    cart.classList.remove('active');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);

}else{
    start();
}

function start(){
    addEvents();
}

function update(){
    addEvents();
    updateTotal();
    itemInCart();
}
// all variables 

function addEvents() {
    let cartRemove_btn = document.querySelectorAll(".cart-remove")
    console.log(cartRemove_btn);
    cartRemove_btn.forEach((btn) =>{
        btn.addEventListener("click", removeCartItem);
    });

    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity')
    cartQuantity_inputs.forEach(input =>{
        input.addEventListener("change", changeItemQuantity);
    });

    let addCart_btn = document.querySelectorAll(".add-cart")
    addCart_btn.forEach(btn =>{
        btn.addEventListener("click", addCartItem)
        
    });

    const buy_btn = document.querySelector(".btn-buy");

    buy_btn.addEventListener("click", buyOrder );
    
}

let itemsAdded = [];
//  btn add product 

function addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    
    console.log(title , price , imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };
    

    if(itemsAdded.find(el => el.title == newToAdd.title)){
        swal("Oops..!","This Item Is Already Exist..!" , "error");
        return;

    }else{
        itemsAdded.push(newToAdd);
        swal("ADDED","Your Product is Placed Successfully" , "success");
    }

    let cartBoxElement = cartBoxComponent(title,price,imgSrc);
    
    let newNode = document.createElement("div");
    
    newNode.innerHTML = cartBoxElement;
    
    const cartContent = cart.querySelector(".cart-content");
    
    cartContent.appendChild(newNode);
    
    update();
};

function removeCartItem() {
    this.parentElement.remove();

    itemsAdded = itemsAdded.filter(el =>el.title != this.parentElement.querySelector('.cart-product-title').innerHTML);
    
    update();
    
}
// Quantity change 

function changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1 ){
        this.value = 1;
    }
    this.value = Math.floor(this.value);
    update();
}

// btn buy 

function buyOrder() {
    if (itemsAdded.length <= 0 ) {
        swal("Error..!","There is No Order to Place Yet! Please Make an Order First!" , "error");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML="";
    swal( "success","Your Order is Placed Successfully Call To Check 😊" , "success");
    itemsAdded = [];
    update();
}

function updateTotal() {
    let cartBoxes = document.querySelectorAll('.cart-box')
    let totalElement = cart.querySelector('.total-price')
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        let priceElement = cartBox.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("EGP", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });
    let inCart = document.querySelector('#itemincart').innerHTML = total ;
    
    // total = total.toFixed(2);

    // total = Math.round(total * 100) / 100;

    totalElement.innerHTML = total + "EGP";
}

function cartBoxComponent(title,price,imgSrc){
    return  `
    <div class="cart-box">
    <img src=${imgSrc} alt="" class="cart-img">
    <div class="detali-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
        
    </div>
    <!-- remove cart  -->
    <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let username = localStorage.getItem('username')
let user_enter = document.getElementById('user-enter');

if (localStorage.getItem('email')&&localStorage.getItem('myPassword')) {

    user_enter.classList.contains("d-block");
    user_enter.classList.remove("d-none");
    
}else{
    user_enter.classList.contains("d-none");
    user_enter.classList.remove("d-block");
    
};
user_enter.innerHTML += ` <span>${username}</span>`;