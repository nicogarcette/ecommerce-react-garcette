import React, {useState,useEffect } from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const catalogo=[
    {id:1,marca:"nike",modelo:"ishod",precio:1400,img:"nike-ishod.png",descripcion:"skate",stock:10},
    {id:2,marca:"new balance",modelo:"550",precio:1500,img:"nb-550.png",descripcion:"skate",stock:10},
    {id:5,marca:"adidas",modelo:"messi2014",precio:3000,img:"adidas-messi2014.png",descripcion:"skate",stock:10},
    {id:12,marca:"topper",modelo:"clasica",precio:5000,img:"topper.png",descripcion:"timelife",stock:100},
];

const ItemListContainer=(props)=>{

 
    const {titulo, greeting}=props;    
    const [stock,setStock]=useState(5);

    const onAdd=(cantidad)=>{
        if (cantidad<=stock) {
            alert(`se agrego al carrito ${cantidad}`);
            setStock(stock-cantidad);
        }
    }

// state for the promise
    const [loading,setLoading]=useState(true);
    const [productos,setProductos]=useState([]);

    const promesa = new Promise((resolve,reject)=>{

        catalogo.length > 0 ?
        setTimeout(()=>{
            resolve(catalogo);
        },2000) :
        setTimeout(()=>{
            reject("error");
        },2000) ;

    });

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