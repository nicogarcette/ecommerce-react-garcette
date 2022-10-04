import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer= () => {

    const [item,setItem] = useState({});
    const [loading,setLoading] = useState(true);
    const {id}=useParams();
  
    useEffect(()=>{
      
        const coleccion = collection(db,"productos");
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
          
            {loading ?   <Box className="loader" sx={{ width: '100%' }}>
                            <CircularProgress disableShrink />
                        </Box>
                    :   <ItemDetail item={item}/>}
        </div>
    ) 
}

export default ItemDetailContainer;

