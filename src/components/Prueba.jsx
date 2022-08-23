import React, {useState} from "react";



const Prueba=()=>{
    const [contador, setContador]= useState(0);


    return(
        <div>
            <p>Contador= {contador}</p>
            <button onClick={()=>setContador(contador+1)}>+1</button>
        </div>
    )

}


export default Prueba;