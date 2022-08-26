import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import Item from "./Item";

const catalogo=[
    {id:1,marca:"nike",modelo:"ishod",precio:1400,img:"nike-ishod.png",descripcion:"skate",stock:10},
    {id:2,marca:"new balance",modelo:"550",precio:1500,img:"nb-550.png",descripcion:"skate",stock:10},
    {id:5,marca:"adidas",modelo:"messi2014",precio:3000,img:"adidas-messi2014.png",descripcion:"skate",stock:10}
];

const ItemList=()=>{
    const [loading,setLoading]=useState(true);
    const [item,setItem]=useState();

    const promesa= new Promise((resolve,reject)=>{

        catalogo.length > 0 ?
        setTimeout(()=>{
            resolve(catalogo);
        },2000) :
        setTimeout(()=>{
            reject("error");
        },2000) ;

    });
    
   useEffect(()=>{
       promesa
       .then((res)=>{
           setItem(res);
       })
       .catch((err)=>{
           console.log(err);
       })
       .finally(()=>{
           setLoading(false);
       });
   },[]); 


    return (
        <div>
            <p>Aguarde un momento... 
                { loading ? 
                    <Box sx={{ width: '100%' }}>
                        <CircularProgress disableShrink />
                    </Box>
                    :'listo!' 
                }
            </p>

            <div className="containerCart">

                {item?.map((ele)=>(
                    <Item producto={ele}/>
                ))}

            </div>

        </div>
    )

}




export default ItemList;










   

