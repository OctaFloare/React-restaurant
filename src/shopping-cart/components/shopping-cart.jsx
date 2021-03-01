import {Badge, Box, IconButton, Toolbar} from "@material-ui/core";
import React, {useState} from "react";
import MUIDataTable from 'mui-datatables'
import {useSetTotalPrice} from "../containers/hooks/use-set-total-price";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDeleteSelectedRows} from "../containers/hooks/use-delete-selected-rows";
import {columns} from "../containers/table-columns";
import {PaymentDetails} from "../containers/payment-details/payment-details";
import {useSelector} from "react-redux";

export const ShoppingCart = () => {
    const shoppingCartData = useSelector(selector)
    const [selected,setSelected] = useState([]);
    const totalPrice = useSetTotalPrice(shoppingCartData);
    const onClick = useDeleteSelectedRows(selected, selector, setSelected);
    
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
    }
    return <Box m={5}>
            <MUIDataTable 
                data={shoppingCartData}
                columns={columns}
                options={options}
                title={'ShoppingCart'}
                />
        <PaymentDetails totalPrice={totalPrice} />
        </Box>
}

const selector = ({ shoppingCartReducer }) => {
    return shoppingCartReducer.items;
}