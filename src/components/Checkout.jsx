import React from "react";
import checkoutImg from '../assets/checkout.webp'

export default function Checkout() {
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'70px'}}>
            <img src={checkoutImg}alt="" />
        </div>
    )
}