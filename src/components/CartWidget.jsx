import React from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget=()=>{

    return(
        <Badge badgeContent={0} color="error">
            <ShoppingCartIcon fontSize={"large"}/>
        </Badge>
    )
}

export default CartWidget;