import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () =>{
    const {cart,clear} = useCart();

    return (
        <div style={{marginTop:'10rem'}}>
           {cart.length > 0 && JSON.stringify(cart)}
           {cart.length > 0 ? <button className="btn" onClick={()=>clear()}>Vaciar carrito</button> : "carrito vacio"}
        </div>
    );
}
export default Cart;