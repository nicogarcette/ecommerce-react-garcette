import React from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget=({totalItems})=>{

    return(
        <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon fontSize={"large"}/>
        </Badge>
    )
}

export default CartWidget;