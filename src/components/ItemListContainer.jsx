import React from "react"


const ItemListContainer=(props)=>{
    const {titulo, greeting}=props;    
    return (
        <>
            <h2>{titulo}</h2>
            <h3 style={{color:"blue"}}>{greeting}</h3>
           
        </>
    )

}


export default ItemListContainer