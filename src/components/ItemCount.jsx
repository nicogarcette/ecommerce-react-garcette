import React, {useEffect, useState} from "react";

const ItemCount = ({initial,stock,onAdd,count, setCount}) => {

    const [disable,setDisable]= useState(false);
      
    const addItem = () =>{
        if (count<stock) {
            setCount(count + 1);
        }
    }
    const removeItem = () =>{
        if (count>initial) {
            setCount(count - 1);
        }
    }
  
    useEffect(()=>{
        count<=stock? setDisable(false) : setDisable(true) ; 
    },[count,stock])
    

    return(
        <div>
            <h3>Items: {count}</h3>
            <p>stock: {stock}</p>
           
            <button className="btn" onClick={addItem}>+1</button>
            <button className="btn" onClick={removeItem}>-1</button>
            <br />
            <button className="btn" onClick={()=>onAdd(count)}  disabled={disable}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;