import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ecommerce_URL } from "../common/ecommerce_url";
import EcommerceOneProductInfo from "./EcommerceOneProductInfo";
import { useState } from "react";
import Loading from "./Loading";

const EcommerceInfo=()=>{
    const {id}=useParams();
    const[details,setdetails]=useState([]);
    useEffect(()=>
    {
        async function fetchMenu() {
            const response = await fetch(`${Ecommerce_URL}${id}`);
            const EcommerceDetails = await response.json();
            console.log(EcommerceDetails);
            let stockans=EcommerceDetails.stock;
            console.log(stockans);
            setdetails(stockans);
        }
        fetchMenu();
    },[id]);
    console.log(details)
    if(details===0)
    {
        return <h1>No stock for this ecommerce</h1>;
    }

    return details.length === 0 ? (
        <Loading />
      ) : (
        <>
          {details.map((details) => (
            <EcommerceOneProductInfo
             Details={details}></EcommerceOneProductInfo>
          ))}
        </>
      );
};

export default EcommerceInfo;