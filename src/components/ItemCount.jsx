import React, {useEffect, useState} from "react";

const ItemCount = ({initial,stock,onAdd}) => {

    const [contador, setContador]= useState(initial);
    const [disable,setDisable]= useState(false);

    const addItem = () =>{
        if (contador<stock) {
            setContador(contador + 1);
        }
    }
    const removeItem = () =>{
        if (contador>initial) {
            setContador(contador - 1);
        }
    }
  
    useEffect(()=>{
        contador<=stock? setDisable(false) : setDisable(true) ; 
    },[contador,stock])

    return(
        <div>
            <h3>Items: {contador}</h3>
            <p>stock: {stock}</p>
           
            <button onClick={addItem}>+1</button>
            <button onClick={removeItem}>-1</button>
            <br />
           
            <button onClick={()=>onAdd(contador)} disabled={disable}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;