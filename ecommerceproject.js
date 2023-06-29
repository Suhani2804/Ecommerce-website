const button = document.getElementsByClassName("btn2");
const imageURL = document.getElementById("imageId");
const description= document.getElementById("descriptionId");
const section= document.getElementsByClassName("thumbnail")[0];
const search=document.getElementById("search");
const section2= document.getElementsByClassName("jssection")[0];
const buttonsearch=document.getElementsByClassName("btn"); //for search icon
let products;
const children=section2.children;

//to search a product
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data.products;
    showProducts(products);
});
//if we want to search without button: search.addEventListener("change",function(e){
//   console.log(e.target.value);
//   filterProducts(e.target.value);
// })
//below we are searching on button click
 buttonsearch[0].addEventListener("click", function () {
  console.log(search.value);
  // console.log(e.target.value);//e.target.value 
  filterProducts(search.value);
});  
function filterProducts(searchText) {
  let filteredProducts = products.filter((product) =>
    product.title.includes(searchText)
  );

  for (var i = 0; i < children.length; i++) {
    children[i].style.display = "";
    let textContent = children[i].getElementsByTagName("p")[0].textContent;
    const filterItem = filteredProducts.find(
      (product) => product.title === textContent
    );
    if (filterItem) {
      children[i].style.display = "";
    } else {
      children[i].style.display = "none";
    }
  }
}
function createProduct(imageUrl, description) {
  const productDiv = document.createElement("div");
  productDiv.className = "card";
  const image = document.createElement("img");
  image.className = "image";
  image.setAttribute("src", imageUrl);
  console.log("image", image);
  const paragraph = document.createElement("p");
  paragraph.innerHTML = description;
  console.log("paragraph", paragraph);
  productDiv.appendChild(image);
  productDiv.appendChild(paragraph);
  return productDiv;
}
function showProducts(products) {
  products.forEach((element) => {
    const { thumbnail, title } = element;
    const product = createProduct(thumbnail, title);
    section2.appendChild(product);
  });
}


//to add another image of product
button[0].addEventListener("click", function () {
    console.log("button clicked");
    const ecommerce= createecommerce(imageURL,description);
    console.log(section);
    section.appendChild(ecommerce);
    console.log("ecommerce section", section);
  });
  imageURL.addEventListener("change",function(e)
{
    console.log(e);
    const value=e.target.value;
})
  function createecommerce(imageId,descriptionId)
{
    const ecommercediv=document.createElement("div");
    //above line is to create a div element
    ecommercediv.className="card";
    //this is a class inside div and class name is card
    const image=document.createElement("img");
    image.className = "image";
    image.setAttribute("src", imageURL.value);
    const paragraph=document.createElement("p");
    // paragraph.innerHTML= "text";
    //the above line is to write content in different elements
    //text in double quotes is written
    paragraph.innerHTML= description.value;
    console.log("paragraph", paragraph);
    ecommercediv.appendChild(image);
    ecommercediv.appendChild(paragraph);
    console.log("ecommerce div", ecommercediv);
    return ecommercediv;
}


//for password verification
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var spceialchar=document.getElementById("specialchar");
// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
//for special characters
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
if(myInput.value.match(specialChars)){
  spceialchar.classList.remove("invalid");
  spceialchar.classList.add("valid");
}
else
{
  spceialchar.classList.remove("valid");
  spceialchar.classList.add("invalid");
}
}
