import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from "./ItemDetail";
// import { promesa } from "../utils/data";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer= () => {

    const [item,setItem] = useState({});
    const [loading,setLoading] = useState(true);
    const {id}=useParams();
  
    useEffect(()=>{
        // busco en la db la coleccion productos
        const coleccion = collection(db,"productos");
//     busca el producto con id de useparams
        const referencia = doc(coleccion,id);

        getDoc(referencia)
        .then((res)=>{
            setItem({id:res.id, ...res.data()})
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
    },[id])

    return (
        <div className="ItemDetailContainer">
            <p>Detalle:</p>
            {loading ?   <Box className="loader" sx={{ width: '100%' }}>
                            <CircularProgress disableShrink />
                        </Box>
                    :   <ItemDetail item={item}/>}
        </div>
    ) 
}

export default ItemDetailContainer;

