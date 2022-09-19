import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () =>{
    const {cart,clear,cartTotal} = useCart();

    return (
        <div style={{marginTop:'10rem'}}>
           {cart.length > 0 && JSON.stringify(cart)}
           {cart.length > 0 ? <button className="btn" onClick={clear}>Vaciar carrito</button> : "carrito vacio"}
           <p>TOTAL = <strong>${cartTotal() || '00'}</strong></p>
        </div>
        
    );
}
export default Cart;