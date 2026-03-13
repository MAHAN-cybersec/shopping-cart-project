let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* LOGIN FUNCTION */

function login(event){

event.preventDefault();

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="" || password===""){

alert("Please enter username and password");

}
else{

alert("Login successful");

window.location.href="catalog.html";

}

}

/* REGISTER FUNCTION */

function register(event){

event.preventDefault();

let user=document.getElementById("regUser").value;
let pass=document.getElementById("regPass").value;

if(user==="" || pass===""){

alert("Fill all fields");

}
else{

alert("Registration successful");

window.location.href="index.html";

}

}

/* ADD TO CART */

function addToCart(name,price){

let item=cart.find(p=>p.name===name);

if(item){

item.quantity++;

}
else{

cart.push({
name:name,
price:price,
quantity:1
});

}

saveCart();

alert("Product added to cart");

}

/* SAVE CART */

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

}

/* DISPLAY CART */

function loadCart(){

let cartList=document.getElementById("cartItems");

if(!cartList) return;

cartList.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price*item.quantity;

let li=document.createElement("li");

li.className="list-group-item";

li.innerHTML=`
${item.name} - ₹${item.price} x ${item.quantity}

<div>

<button class="btn btn-success btn-sm cart-btn"
onclick="increaseQty(${index})">+</button>

<button class="btn btn-warning btn-sm cart-btn"
onclick="decreaseQty(${index})">-</button>

<button class="btn btn-danger btn-sm cart-btn"
onclick="removeItem(${index})">Remove</button>

</div>
`;

cartList.appendChild(li);

});

document.getElementById("total").innerText=total;

}

/* INCREASE QUANTITY */

function increaseQty(index){

cart[index].quantity++;

saveCart();

loadCart();

}

/* DECREASE QUANTITY */

function decreaseQty(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

saveCart();

loadCart();

}

/* REMOVE ITEM */

function removeItem(index){

cart.splice(index,1);

saveCart();

loadCart();

}

/* LOAD CART WHEN PAGE OPENS */

loadCart();