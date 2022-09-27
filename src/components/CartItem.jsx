import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../context/CartContext";



const CartItem = ({producto}) =>{

    const {removeItem} = useCart();
    const {id,marca,modelo,img,precio,cantidad} = producto;

    return(
        <div key={id} className="cart">
            <h4>{marca} {modelo}</h4>
            <img style={{width:"200px"}} src={img} alt={modelo} />
            <h4>${precio}</h4>
            <p>cantidad: {cantidad}</p>
            <button className="btn-trash" onClick={()=>removeItem(id)}><DeleteIcon/></button>                 
         </div>
    );
}

export default CartItem;