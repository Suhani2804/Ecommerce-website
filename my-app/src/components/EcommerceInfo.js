import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ecommerce_URL } from "../common/ecommerce_url";
import { useState } from "react";
import Loading from "./Loading";
const EcommerceInfo=()=>{
    const {id}=useParams();

    const[details, setdetails]= useState([]);


    useEffect(()=>
    {
        async function fetchMenu() {
            const response = await fetch(`${Ecommerce_URL}${id}`);
            const EcommerceDetails = await response.json();
            console.log(EcommerceDetails);
            let stockans=EcommerceDetails;
            let emptystock=EcommerceDetails.stock;

            if(emptystock===0){
              console.log("Out of stock");
            }
            console.log(stockans);
            setdetails(stockans);
        }
        fetchMenu();
    },[id]);

    if(details===undefined)
    {
      console.log("undefined error");
    }

    else{
     
      return details.length === 0 ? (
        <Loading />
        
      ) : (
        <>
          <h1>{details.title}</h1>
          <h1>{details.stock}</h1>
          <h1>{details.description}</h1>
          <h1>{details.brand}</h1>
          <img src={details.thumbnail}></img>
          <h1>{details.rating}</h1>
        </>
      );
    }
    


    
};

export default EcommerceInfo;