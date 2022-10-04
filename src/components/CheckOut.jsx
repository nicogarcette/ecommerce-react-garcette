import React from "react";
import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase/firebase"
import {useForm} from "react-hook-form"

const CheckOut = () =>{

    const {cart,cartTotal,setIdCompra,clear,setCartLoading} = useCart();
    const {register, handleSubmit, formState: {errors} } = useForm();

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{8,14}$/
    }
    
    const pagar = (data) =>{

        setCartLoading(true);

        const compra = {
            data,
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
            <form onSubmit={handleSubmit(pagar)} className="form" >  
                    <div className="form_grupo">
                        <label htmlFor="nombre" className="form_label">Nombre:</label>
                        <div className={`form_grupo-input ${errors.nombre && 'form_grupo-incorrecto'}` }>
                            <input  type="text" name="name" {...register("nombre",{required:true, pattern:expresiones.nombre})} className="form_input" placeholder="juan" />
                            {errors.nombre && <i className="form_validacion-estado fa-solid fa-circle-xmark"></i>}
                        </div>
                        {errors.nombre?.type === 'required' && <p className="form_input-error">Ingrese un campo</p>}
                        {errors.nombre?.type === 'pattern' && <p className="form_input-error">Nombre incorrecto, solo letras.</p>}
                    </div>
                   
                    <div className="form_grupo">
                        <label htmlFor="surname" className="form_label">Apellido:</label>
                        <div className={`form_grupo-input ${errors.apellido && 'form_grupo-incorrecto'}` }>
                            <input  type="text" name="surname" {...register("apellido",{required:true, pattern:expresiones.nombre})} className="form_input" placeholder="perez"  />
                            {errors.apellido && <i className="form_validacion-estado fa-solid fa-circle-xmark incorrecto"></i>}
                        </div>
                        {errors.apellido?.type === 'required' && <p className="form_input-error">Ingrese un campo</p>}
                        {errors.apellido?.type === 'pattern' && <p className="form_input-error">Apellido incorrecto, solo letras.</p>}
                    </div>
                
                    <div className="form_grupo">
                        <label htmlFor="email" className="form_label">Email:</label>
                        <div className={`form_grupo-input ${errors.email && 'form_grupo-incorrecto'}` }>
                            <input type="email" name="email" {...register("email",{required:true, pattern:expresiones.email})} className="form_input" placeholder="correo@email.com" />
                            {errors.email && <i className="form_validacion-estado fa-solid fa-circle-xmark incorrecto"></i>}
                        </div>
                        {errors.email?.type === 'required' && <p className="form_input-error">Ingrese un campo</p>}
                        {errors.email?.type === 'pattern' && <p className="form_input-error">El correo solo puede contener letras, numeros, punto y guion bajo</p>}
                    </div>
                
                    <div className="form_grupo">
                        <label htmlFor="phone" className="form_label">Telefono:</label>
                        <div className={`form_grupo-input ${errors.telefono && 'form_grupo-incorrecto'}` }>
                            <input type="tel" name="phone" {...register("telefono",{required:true, pattern:expresiones.phone,maxLength:15})} className="form_input" placeholder="11234545"/>
                            {errors.telefono && <i className="form_validacion-estado fa-solid fa-circle-xmark incorrecto"></i>}
                        </div>
                        {errors.telefono?.type === 'required' && <p className="form_input-error">Ingrese un campo</p>}
                        {errors.telefono?.type === 'pattern' && <p className="form_input-error">Numero incorrecto</p>}
                    </div>
            
                    <div className="form_grupo">
                        <label htmlFor="dni" className="form_label">Documento:</label>
                        <div className={`form_grupo-input ${errors.dni && 'form_grupo-incorrecto'}` } >
                            <input  type="text" name="dni" {...register("dni",{required:true, pattern:expresiones.phone,maxLength:9})} className="form_input" placeholder="34919292"/>
                            {errors.dni && <i className="form_validacion-estado fa-solid fa-circle-xmark "></i>}
                        </div>
                        {errors.dni?.type === 'required' && <p className="form_input-error">Ingrese un campo</p>}
                        {errors.dni?.type === 'pattern' && <p className="form_input-error">Documento incorrecto</p>}
                    </div>
                
                    <div className="form_grupo form_grupo-btn">
                        <button className="form_btn" type="submit">Pagar</button>
                    </div>
                </form>
        </div>
    )
}

export default CheckOut;