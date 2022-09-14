import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () =>{
    const {cart} = useCart();

    return (
        <div style={{marginTop:'10rem'}}>
           {JSON.stringify(cart)}
        </div>
    );
}
export default Cart;