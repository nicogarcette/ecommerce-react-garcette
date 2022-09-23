import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) =>{

    useEffect(()=>{
       
        const keyCart = JSON.parse(localStorage.getItem("KEY_CART"));
        if (keyCart) {
            setCart(keyCart);
        }

    },[])
  
    const [totalItems,setTotalItems] = useState(0);
    const [cart, setCart] = useState([]);
    const [idCompra, setIdCompra] = useState('');
    const [cartLoading, setCartLoading] = useState(false);

    const addItem = (item) =>{
        
        setTotalItems(totalItems + item.cantidad); 

        let carritoActualizo;

        if (isInCart(item.id)) {
             carritoActualizo = cart.map((prod)=>{
                if (prod.id === item.id) {
                    return { ...prod,cantidad:prod.cantidad + item.cantidad}
                }else{
                    return prod;
                }
            })
            setCart(carritoActualizo);
        }else{
            carritoActualizo = [...cart,item];
            setCart(carritoActualizo); 
        }
        localStorage.setItem("KEY_CART",JSON.stringify(carritoActualizo));
    }

    const clear =()=>{
        setCart([]);
        setTotalItems(0);
        localStorage.removeItem("KEY_CART");
    }
    const removeItem =(id)=>{

        const cartFilter = cart.filter((item)=> item.id !== id );

       setCart(cartFilter);
       localStorage.setItem("KEY_CART",JSON.stringify(cartFilter));
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
        <CartContext.Provider 
        value={{cart, clear, removeItem, addItem, isInCart,totalItems, cartQuatity, cartTotal,idCompra,setIdCompra,setCartLoading,cartLoading}}>
            {children}
        </CartContext.Provider>
    );

}

export const useCart = ()=> useContext(CartContext);





