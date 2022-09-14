import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from "./ItemDetail";
import { promesa } from "../utils/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer= () => {

    const [item,setItem] = useState({});
    const [loading,setLoading] = useState(true);
    const {id}=useParams();
  
    useEffect(()=>{
        promesa
        .then((res)=>{
            setItem(res.find((producto)=> producto.id === parseInt(id)));
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            setLoading(false);
        });

    })
    return (
        <div className="ItemDetailContainer">
            <p>Detalle:</p>
            {loading ?   <Box sx={{ width: '100%' }}>
                            <CircularProgress disableShrink />
                        </Box>
                    :   <ItemDetail item={item}/>}
        </div>
    ) 
}

export default ItemDetailContainer;

