import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget=()=>{

    return(
        <div>
            <ShoppingCartIcon fontSize={"large"}/>
            <span className="cartCant">0</span>
        </div>
    )
}

export default CartWidget;