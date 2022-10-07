import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartEmpty from "./CartEmpty";

import CartItem from "./CartItem";

const Cart = () =>{
    const {cart,clear,cartTotal} = useCart();
    const navegar = useNavigate();
 
    return (
        <div className="container_cart">
           { cart.length > 0 ? 
                    <div className="" style={{display:"flex",justifyContent:"space-around"}}>
                        <div className="cart">
                            <h2>Tu carrito</h2> 
                            <div className="resumen-titles pepe ">
                                <p>Producto</p>
                                <p>Precio</p>
                                <p>Cantidad</p>
                                <p>Subtotal</p>
                            </div>
                            {cart.map((producto)=>(
                                <CartItem key={producto.id} producto={producto}/>
                            ))}
                            <button className="btn " onClick={clear}>Vaciar carrito</button> 
                        </div>
                        <div className="cart_resumen">
                            <h2>resumen de compra</h2>
                            <div >

                            <p>TOTAL = <strong>${cartTotal() || '00'}</strong></p>
                            <button className="btn" onClick={()=>navegar('/finalizarCompra')}>Finalizar compra</button>
                            </div>
                        </div>
                    </div>
                    : <CartEmpty/>
            }
        </div>     
    );
}
export default Cart;







