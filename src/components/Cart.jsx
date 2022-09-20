import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () =>{
    const {cart,clear,cartTotal,removeItem} = useCart();
    const navegar = useNavigate();

    return (
        <div className="container_cart">
           {
           cart.length > 0 ? 
                <div className="container_cart">
                    <h2>Tu carrito</h2>
                    {cart.map((producto)=>{
                    return <div key={producto.id} className="cart">
                                <h4>{producto.marca} {producto.modelo}</h4>
                                <img style={{width:"200px"}} src={producto.img} alt={producto.modelo} />
                                <h4>${producto.precio}</h4>
                                <p>cantidad: {producto.cantidad}</p>
                                <button className="btn-trash" onClick={()=>removeItem(producto.id)}><DeleteIcon/></button>                 
                            </div>
                    })}
                    <button className="btn" onClick={clear}>Vaciar carrito</button> 
                </div>
                :
                <div>
                    <p>carrito vacio</p>
                    <button className="btn" onClick={()=>navegar('/')}>Ver catalogo!</button>
                </div>
           }
           <p>TOTAL = <strong>${cartTotal() || '00'}</strong></p>
        </div>     
    );
}
export default Cart;