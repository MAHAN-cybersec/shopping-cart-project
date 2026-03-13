let cart = JSON.parse(localStorage.getItem("cart")) || [];

// LOGIN
function login(event){

event.preventDefault();

window.location.href="catalog.html";

}

// REGISTER
function register(event){

event.preventDefault();

alert("Registration successful!");

window.location.href="index.html";

}

// ADD TO CART
function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}

// DISPLAY CART
if(document.getElementById("cartItems")){

let cartList=document.getElementById("cartItems");

let total=0;

cart.forEach((item,index)=>{

total+=item.price;

let li=document.createElement("li");

li.className="list-group-item";

li.innerHTML=`
${item.name} - ₹${item.price}
<button class="btn btn-danger btn-sm float-end"
onclick="removeItem(${index})">
Remove
</button>
`;

cartList.appendChild(li);

});

document.getElementById("total").innerText=total;

}

// REMOVE ITEM
function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}