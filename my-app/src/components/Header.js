import { useState } from "react";

const HeaderComponent=()=>{

    const [buttonText, setButtonText] = useState("Login");
    function updateLoginLogoutText() {
        if (buttonText === "Login") {
          setButtonText("Logout");
        } else {
          setButtonText("Login");
        }
      }
    
    

    return(
    <>
    {/* // <!-- navigation bar 1 --> */}
<nav className="logo">
    <label className="label border"> eCommerce Site</label>
    {/* <!-- Search icon on navbar 1 -->
    <!-- button to search items --> */}
    {/* <form className="searchform">
        <label className="border" ></label>
        <input id="search" type="text" placeholder="Search"></input> */}
        {/* <!--WE GIVE THE CLASS IN BELOW COMMAND AS btn so in javascript we will write const button=getelementsbyclass="btn" --> */}
        {/* <button type="button" className="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
    </form> */}
    
    <ul className="unorderlist1">
            <li className="border">Home</li>            
            <li className="border">Cart</li>
            <li className="border">My orders</li>
            <li className="border">About</li>
            <i className="fa-regular fa-cart-shopping border" id="carticon"></i>
            <li className="border">Cart</li>
    </ul>

    <button className="login-button" onClick={updateLoginLogoutText}>
        {buttonText}
      </button>  
 </nav>
{/* 
<!-- for navbar 2 --> */}
<nav className="navbar2">
    <label className="Customer"> </label>
    <div className="items">
    <ul>
        <li className="border">All</li>            
        <li className="border">Deals</li>
        <li className="border">Best sellers</li>
        <li className="border">Sell</li>
        <li className="border">Buy</li>
        <li className="border">Special Members</li>
        <li className="border">Customer Service</li>
        <li className="border">Help</li>
        <li className="border">More options</li>
    </ul></div>
</nav>

<main>
{/* <!-- for name and password --> */}
<div className="passform formcolor">
<form className="form1" > 
    <label>Enter Name</label>
    <input id="nameid" type="text"></input>
    <label>Password</label>
    <input id="psw" type="password" ></input>
    
{/* //IMPRT BUTTON LIBRARY FROM INTERNET FOR SUBMIT BUTTON HERE
just type in button bootstrap to access this specific command -->
<!-- in the below command we have given class as btn2 to distinguish between btn and btn2 while writing javascript commands  --> */}
    <button type="button" className="btn3 btn-primary" >Submit</button>
    <button type = "reset" value = "Reset" >Reset</button>
</form> 
</div>


{/* <!-- for text on image and the image at top --> */}
<div className="container">
<img className="imageid" src="https://img.freepik.com/premium-photo/top-view-online-shopping-concept-with-credit-card-smart-phone-computer-isolated-office-yellow-table-background_315337-5991.jpg" alt="image1"></img>
<section className="project">
    <div className="centered">
    <h1>Welcome to the Biggest eCommerce site!</h1>
    <h1>"Dream eCommerce"</h1>
    <h5>Hope you have a great time browsing the website :)</h5>
</div>
</section>


</div>
</main>
</>
);
};


export default HeaderComponent;