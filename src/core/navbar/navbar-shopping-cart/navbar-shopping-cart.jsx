import {Badge, IconButton} from "@material-ui/core";
import {useRoutesOnClick} from "../hooks/use-routes-on-click";
import React from "react";
import {useSelector} from "react-redux";

export const NavbarShoppingCart = ({link, icon, edge = 'start'}) => {
    const onClick = useRoutesOnClick(link);
    const shoppingCartData = useSelector(selector)

    return <IconButton onClick={onClick} edge={edge} aria-label='menu'>
        <Badge badgeContent={shoppingCartData ? shoppingCartData.length : 0} color='secondary'>
            {icon}
        </Badge>
    </IconButton>
}

const selector = ({shoppingCartReducer}) => shoppingCartReducer.items