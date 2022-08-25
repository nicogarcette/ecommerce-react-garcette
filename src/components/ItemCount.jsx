import React, {useEffect, useState} from "react";


const ItemCount = ({initial,stock,onAdd}) => {

    const [contador, setContador]= useState(initial);
    const [disable,setDisable]= useState(false);

    const addProduct = () =>{
        if (contador<stock) {
            setContador(contador + 1);
        }
    }
    const removeProduct = () =>{
        if (contador>initial) {
            setContador(contador - 1);
        }
    }

    useEffect(()=>{
        contador===stock? setDisable(true) : setDisable(false) ; 
    },[contador,stock   ])
    
    
    return(
        <div>
            <h1>Contador = {contador}</h1>
            <button onClick={addProduct} disabled={disable}>+1</button>
            <button onClick={removeProduct}>-1</button>
        </div>
    )
}

export default ItemCount;