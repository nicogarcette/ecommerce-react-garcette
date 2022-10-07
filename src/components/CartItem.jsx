import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../context/CartContext";
import CartItemCount from "./CartItemCount";



const CartItem = ({producto}) =>{

    const {removeItem, itemSubtotal} = useCart();
    const {id,marca,modelo,img,precio,cantidad,stock} = producto;
    const [subtotal,setSubtotal] = useState();

    useEffect(()=>{
        setSubtotal(itemSubtotal(id));
    },[id,itemSubtotal])

    return(
        <div className="pepe">
            <div>
                <p>{marca} {modelo}</p>
                <img style={{width:"200px"}} src={img} alt={modelo} />
            </div>
            <p>${precio}</p>
            <CartItemCount cantidad={cantidad} stock={stock} id={id} />
            <p>${subtotal}</p>
            <button className="btn-trash" onClick={()=>removeItem(id)}><DeleteIcon/></button>    
         </div>
    );
}

export default CartItem;

   