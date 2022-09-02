import React, { useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer= () => {

    const [item,setItem] = useState();
    const [value,setValue] = useState("");
    const [loading,setLoading] = useState(true);
    const [mostrar, setMostrar] = useState(false);

    const form=(e)=>{
        // para que no recargue el formulario
        e.preventDefault();

        setMostrar(true);

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
            //transformo la respuesta en algo que pueda leer
            .then((res)=> res.json())
            //recibo la respuestra traducida
            .then((json)=>{
                setItem(json.results[1]);
                //simula una tardanza de 3 segundos y luego deja de cargar
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .finally(()=> {
                setValue("");
                setLoading(true);
            });
    };
 
    const vacio=()=>{
        if (item!=null) {
            return <ItemDetail item={item}/>
        }else   
             return <div>sin resultado</div>
    }
    const print=()=>{
        if(mostrar)
        return (
            loading ?   <Box sx={{ width: '100%' }}>
                            <CircularProgress disableShrink />
                        </Box>
                    :   vacio()
        )
    }

    return (
        <div className="ItemDetailContainer">
            <form action="" onSubmit={form}>
                <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} /> 
                <button type='submit'>
					Buscar
				</button>
            </form>

            {print()}
        </div>
    ) 
}

export default ItemDetailContainer;

