import React, {useState} from "react";
import {useDeleteSelectedRows} from "./hooks/use-delete-selected-rows";
import {useShoppingCartContext} from "./hooks/use-shopping-cart-context";
import {Badge, Box, IconButton, Toolbar} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const useSetOptions = (selector) =>{
    const {selected,setSelected} = useShoppingCartContext();
    const onClick = useDeleteSelectedRows(selector);
    const options = {
        filterType: 'dropdown',
        viewColumns: false,
        filter: false,
        print: false,
        rowsSelected: selected,
        selectableRowsOnClick: true,
        download: false,
        pagination:false,
        search: false,
        textLabels:{
            selectedRows : {
                text: "produs(e) selectat(e)"
            },
            body:{
                noMatch: "Nici un produs"
            }
        },
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => setSelected(rowsSelected),
        customToolbarSelect: () =>
            <Toolbar>
                <div>Sterge produs(e)</div>
                <Box mr={5}>
                    <IconButton onClick={onClick}>
                        <Badge badgeContent={selected.length} color='secondary'>
                            <DeleteIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>,
    };
    
    return options;
}