import React from "react";
import Item from "./Item";

const ItemList=({productos})=>{
   



    return (
        <div className="containerCart">

            {productos.map((ele)=>(
                <Item producto={ele} key={ele.id}/>
            ))}

        </div>
    );

}
export default ItemList;










   

