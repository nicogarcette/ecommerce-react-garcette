import React, {useState } from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer=(props)=>{

    const {titulo, greeting}=props;    
    const [stock,setStock]=useState(5);

    const onAdd=(cantidad)=>{
        if (cantidad<=stock) {
            alert(`se agrego al carrito ${cantidad}`);
            setStock(stock-cantidad);
        }
    }
    return (
        <div className="main">
            <h2>{titulo}</h2>
            <h3>{greeting}</h3>
            
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer