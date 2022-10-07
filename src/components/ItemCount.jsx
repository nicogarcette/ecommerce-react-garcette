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
        <div style={{display:'flex',flexDirection:'column',alignItems:"center"} }>
            <p>stock: {stock}</p>
            <div className="itemCount">  
                <button className="btn-item" onClick={removeItem}>-</button>
                <h3>{count}</h3>
                <button className="btn-item" onClick={addItem}>+</button>
            </div>
            <br />
            <button className="btn" onClick={()=>onAdd(count)}  disabled={disable}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;