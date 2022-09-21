import React, {useState,useEffect } from "react"
import ItemList from "./ItemList";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import {db} from "../firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer=(props)=>{

    const {titulo, greeting}=props;    

// state for the promise
    const [loading,setLoading] = useState(true);
    const [productos,setProductos] = useState([]);
    const {idCategoria} = useParams();

    //  firebase
    useEffect(()=>{
        const productoDb = idCategoria ? query(collection(db, "productos"), where("categoria", "==",idCategoria)) : collection(db,"productos");
       
        getDocs(productoDb)
        .then((res)=>{
            const lista = res.docs.map((producto)=> {
                return {
                    id: producto.id,
                    ...producto.data()
                }
            })
            setProductos(lista);
        })
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false));;
    },[idCategoria])

    const print=()=>{
        if(loading){
            return (<Box className="loader" sx={{ width: '100%' }}>
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