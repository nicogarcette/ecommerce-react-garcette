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
                    <p>TOTAL = <strong>${cartTotal() || '00'}</strong></p>
                </div>
                :
                <div className="cart_vacio">
                    <h2>Tu carrito está vacío.</h2>
                    <h3>No sabés que comprar? ¡Miles de productos te esperan!</h3>
                    <button className="btn" onClick={()=>navegar('/')}>Seguir comprando</button>
                </div>
           }
        </div>     
    );
}
export default Cart;