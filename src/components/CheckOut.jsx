import React, {  useState } from "react";
import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase/firebase"


const CheckOut = () =>{
    const {cart,cartTotal,setIdCompra,clear,setCartLoading} = useCart();

    const [comprador,setComprador] = useState({});

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    } 
   
    const pagar = (e) =>{
        e.preventDefault();

        setCartLoading(true);

        const compra = {
            comprador,
            carrito:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const orders = collection(db, "orders");

        addDoc(orders, compra)
        .then(({id})=>{
            setIdCompra(id);
            clear();
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setCartLoading(false);
        })
    }
    return (
        <div>
            <form onSubmit={pagar} className="form" >  
                    <div className="form_grupo">
                        <label htmlFor="nombre" className="form_label">Nombre:</label>
                        <div className="form_grupo-input">
                            <input  type="text" name="name" className="form_input" placeholder="juan" onChange={datosComprador} required/>
                            <i className="form_validacion-estado fa-solid fa-circle-xmark"></i>
                            <i className="form_validacion-estado fa-solid fa-circle-check"></i>
                        </div>
                        <p className="form_input-error">Nombre incorrecto, solo letras.</p>
                    </div>
                
                    <div className="form_grupo">
                        <label htmlFor="surname" className="form_label">Apellido:</label>
                        <div className="form_grupo-input">
                            <input  type="text" name="surname" className="form_input" placeholder="perez" onChange={datosComprador} required/>
                            <i className="form_validacion-estado fa-solid fa-circle-xmark"></i>
                            <i className="form_validacion-estado fa-solid fa-circle-check"></i>
                        </div>
                        <p className="form_input-error">Apellido incorrecto, solo letras.</p>
                    </div>
                
                    <div className="form_grupo">
                        <label htmlFor="email" className="form_label">Email:</label>
                        <div className="form_grupo-input">
                            <input type="email" name="email" className="form_input" placeholder="correo@email.com" onChange={datosComprador} required/>
                            <i className="form_validacion-estado fa-solid fa-circle-xmark"></i>
                            <i className="form_validacion-estado fa-solid fa-circle-check"></i>
                        </div>
                        <p className="form_input-error">El correo solo puede contener letras, numeros, punto y guion bajo</p>
                    </div>
                
                    <div className="form_grupo">
                        <label htmlFor="phone" className="form_label">Telefono:</label>
                        <div className="form_grupo-input">
                            <input type="tel" name="phone" className="form_input" placeholder="11234545" onChange={datosComprador} required/>
                            <i className="form_validacion-estado fa-solid fa-circle-xmark"></i>
                            <i className="form_validacion-estado fa-solid fa-circle-check"></i>
                        </div>
                        <p className="form_input-error">Numero incorrecto.</p>
                    </div>
            
                    <div className="form_grupo">
                        <label htmlFor="dni" className="form_label">Documento:</label>
                        <div className="form_grupo-input">
                            <input  type="text" name="dni" className="form_input" maxLength="8" placeholder="34919292" onChange={datosComprador} required/>
                            <i className="form_validacion-estado fa-solid fa-circle-xmark"></i>
                            <i className="form_validacion-estado fa-solid fa-circle-check"></i>
                        </div>
                        <p className="form_input-error">Documento incorrecto.</p>
                    </div>
                    <div className="form_mensajeError">
                        <p><i className="fa-solid fa-triangle-exclamation"></i> <b>Error:</b> Rellene el forulario correctamente.</p>
                    </div>
                    <div className="form_grupo form_grupo-btn">
                        <button className="form_btn" type="submit" >Pagar</button>
                        <p className="form_mensaje-exito">Formulario exitoso!!!</p>
                    </div>
                </form>
        </div>
    )
}

export default CheckOut;