import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) =>{
  
    // cantidad de productos
    const [totalItems,setTotalItems] = useState(0);

    // contenedor de la compra
    const [cart, setCart] = useState([]);

    // agrega item al contenedor. no agrega item existente, suma cantidad.
    const addItem = (item) =>{
        // const existe = cart.find((prod)=>prod.id === item.id);
        setTotalItems(totalItems + item.cantidad); 

        if (isInCart(item.id)) {
            let pos=cart.findIndex((prod)=>prod.id === item.id);
            cart[pos].cantidad = cart[pos].cantidad + item.cantidad;
        }else
            setCart([...cart, item]); 

    }

    const clear =()=>{
        setCart([]);
        setTotalItems(0);
    }
    const removeItem =(id)=>{
       setCart(cart.filter((item)=> item.id !== id ));
    } 
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id);
    }
    const cartQuatity=()=>{
        return cart.reduce((acc,prod)=>acc += prod.cantidad,0);
    }

    const cartTotal= () =>{
        let total = cart.reduce((acc,prod) => acc += prod.precio*prod.cantidad,0);
        return total.toLocaleString()

    }

    return(
        <CartContext.Provider value={{cart, clear, removeItem, addItem, isInCart,totalItems, cartQuatity, cartTotal}}>
            {children}
        </CartContext.Provider>
    );

}

export const useCart = ()=> useContext(CartContext);


    