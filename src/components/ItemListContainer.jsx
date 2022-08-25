import React from "react"
import ItemCount from "./ItemCount";

const ItemListContainer=(props)=>{

    const {titulo, greeting}=props;    

    return (
        <div className="main">
            <h2>{titulo}</h2>
            <h3 style={{color:"blue"}}>{greeting}</h3>
            <ItemCount stock={5} initial={1} onAdd={1}/>
        </div>
    )

}


export default ItemListContainer