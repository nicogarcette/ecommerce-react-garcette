import React, {useState,useEffect } from "react"
import ItemList from "./ItemList";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { promesa } from "../utils/data";

const ItemListContainer=(props)=>{

    const {titulo, greeting}=props;    


// state for the promise
    const [loading,setLoading]=useState(true);
    const [productos,setProductos]=useState([]);

   

//  then and catch for the promise
    useEffect(()=>{
        promesa
        .then((res)=>{
            setProductos(res);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[]); 
 

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