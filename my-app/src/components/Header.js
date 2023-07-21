const HeaderComponent=()=>{
    return(
    <>
    {/* // <!-- navigation bar 1 --> */}
<nav className="logo">
    <label className="label border"> eCommerce Site</label>
    {/* <!-- Search icon on navbar 1 -->
    <!-- button to search items --> */}
    <form className="searchform">
        <label className="border" ></label>
        <input id="search" type="text" placeholder="Search"></input>
        {/* <!--WE GIVE THE CLASS IN BELOW COMMAND AS btn so in javascript we will write const button=getelementsbyclass="btn" --> */}
        <button type="button" className="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
    </form>
    <ul className="unorderlist1">
            <li className="border">Home</li>            
            <li className="border">Cart</li>
            <li className="border">My orders</li>
            <li className="border">About</li>
            <i className="fa-regular fa-cart-shopping border" id="carticon"></i>
            <li className="border">Cart</li>
    </ul>  
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
        <i className="fa fa-bars" aria-hidden="true">  More options </i>
    </ul></div>
</nav>

<main>
{/* <!-- for name and password --> */}
<div className="passform formcolor">
<form className="form1" > 
    <label>Enter Name</label>
    <input id="nameid" type="text"></input>
    <label>Password</label>
    <input id="psw" type="password"></input>
 
{/* //IMPRT BUTTON LIBRARY FROM INTERNET FOR SUBMIT BUTTON HERE
just type in button bootstrap to access this specific command -->
<!-- in the below command we have given class as btn2 to distinguish between btn and btn2 while writing javascript commands  --> */}
    <button type="button" className="btn3 btn-primary" >Submit</button>
    <button type = "reset" value = "Reset" >Reset</button>
</form> 
</div>
<div id="message">
    <h3>Password must contain the following:</h3>
    <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
    <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
    <p id="number" className="invalid">A <b>number</b></p>
    <p id="length" className="invalid">Minimum <b>8 characters</b></p>
    <p id="specialchar" className="invalid">A <b>special character</b></p>
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

{/* <!-- the form for entering name and product
button to submit the details --> */}
<form class="form" >
    <span>
        <label>Enter Image URl</label>
        <input id="imageId" type="text"></input>
        <label>Enter Product</label>
        <input id="descriptionId" type="text"></input>

        {/* //IMPRT BUTTON LIBRARY FROM INTERNET FOR SUBMIT BUTTON HERE
        just type in button bootstrap to access this specific command -->            
        <!-- in the below command we have given class as btn2 to distinguish between btn and btn2 while writing javascript commands --> */}
        <button type="button" className="btn2 btn-primary">Submit</button>
        <button type = "reset" value = "Reset" >Reset</button>
    </span>
</form>
</div>
</main>
</>
);
};

export default HeaderComponent;