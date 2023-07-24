import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ecommerce_URL } from "../common/ecommerce_url";
import EcommerceOneProductInfo from "./EcommerceOneProductInfo";
import { useState } from "react";
import Loading from "./Loading";

const EcommerceInfo=()=>{
    const {ecommerceId}=useParams();
    const[details,setdetails]=useState([]);
    useEffect(()=>
    {
        async function fetchMenu() {
            const response = await fetch(`${Ecommerce_URL}+'/'+${ecommerceId}`);
            const EcommerceDetails = await response.json();
            let stock=EcommerceDetails.stock;
            setdetails(stock);
        }
        fetchMenu();
    },[ecommerceId]);

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