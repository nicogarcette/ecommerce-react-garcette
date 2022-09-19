import React from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../context/CartContext";


const CartWidget=()=>{
    const {cartQuatity} = useCart();

    return(
        <Badge badgeContent={cartQuatity()} color="error">
            <ShoppingCartIcon fontSize={"large"}/>
        </Badge>
    )
}

export default CartWidget;