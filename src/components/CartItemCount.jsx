import React from "react";
import { useState } from "react";
import { useCart } from "../context/CartContext";


const CartItemCount = ({cantidad,stock,id}) =>{

    const {updateCart} = useCart();
    const [count,setCount] = useState(cantidad);

    const addItem = () =>{
      
        if (count<stock) {
            setCount(count + 1);
            updateCart(id,'+');
        }
    }
    const removeItem = () =>{
        if (count>1) {
            setCount(count - 1);
            updateCart(id,'-');
        }
    }

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <button className="btn" onClick={removeItem}>-</button>
            <p>{count}</p>
            <button className="btn" onClick={addItem}>+</button>
        </div>
    )
}

export default CartItemCount;