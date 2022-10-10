import React from "react";
import { useNavigate } from "react-router-dom";

const CartEmpty =()=>{
    const navegar = useNavigate();

    return (
        <div className="cart_vacio mid">
            <h2>Tu carrito está vacío.</h2>
            <h3>No sabés que comprar? ¡Miles de productos te esperan!</h3>
            <button className="btn" onClick={()=>navegar('/')}>Ver productos!</button>
        </div>
);
}
export default CartEmpty;