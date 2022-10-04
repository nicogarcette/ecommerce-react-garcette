import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../context/CartContext";
import CartItemCount from "./CartItemCount";



const CartItem = ({producto}) =>{

    const {removeItem} = useCart();
    const {id,marca,modelo,img,precio,cantidad,stock} = producto;

    return(
        <div key={id} className="cart">
            <h4>{marca} {modelo}</h4>
            <img style={{width:"200px"}} src={img} alt={modelo} />
            <h4>${precio}</h4>
            <CartItemCount cantidad={cantidad} stock={stock} id={id} />
            <button className="btn-trash" onClick={()=>removeItem(id)}><DeleteIcon/></button>                 
         </div>
    );
}

export default CartItem;