import React, {useState,useEffect } from "react"
import ItemList from "./ItemList";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { promesa } from "../utils/data";
import { useParams } from "react-router-dom";


const ItemListContainer=(props)=>{

    const {titulo, greeting}=props;    

// state for the promise
    const [loading,setLoading] = useState(true);
    const [productos,setProductos] = useState([]);
    const {idCategoria} = useParams();


//  then and catch for the promise
    useEffect(()=>{
        promesa
        .then((res)=>{
            if (idCategoria) {
                setProductos(res.filter(producto => producto.categoria === idCategoria));
            }else{
                setProductos(res);
            }
        })
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false));
    },[idCategoria]); 
 

    const print=()=>{
        if(loading){
            return (<Box sx={{ width: '100%' }}>
                        <CircularProgress disableShrink />
                    </Box>);
        }else{
            return (<ItemList productos={productos}/> );

        }

    }
  
 

    return (
        <div className="main">
            <h2>{titulo}</h2>
            <h3>{greeting}</h3>

            { print() }
        </div>
    )
}

export default ItemListContainer