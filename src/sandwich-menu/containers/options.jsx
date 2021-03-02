import {Badge, Box, IconButton, Toolbar} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {Title} from "./details/title";
import {ShowDetails} from "./details/body";
import React from "react";
import {useSandwichContext} from "./hooks/use-sandwich-context";
import {useOnAddCart} from "./hooks/use-on-add-cart";

export const useSetOptions = (data, selector) => {
    const {selected, setSelected} = useSandwichContext();
    const onClick = useOnAddCart(selector);
    const options = {
        filterType: 'dropdown',
        viewColumns: false,
        filter: false,
        print: false,
        rowsSelected: selected,
        download: false,
        textLabels: {
            selectedRows: {
                text: "produs(e) selectat(e)"
            }
        },
        selectableRowsOnClick: true,
        selectableRowsHeader: false,
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => setSelected(rowsSelected),
        expandableRows: true,
        customToolbarSelect: () =>
            <Toolbar>
                <Box mr={5}>
                    <IconButton onClick={onClick}>
                        <div>Adauga in cos</div>
                        <Badge badgeContent={selected.length} color='secondary'>
                            <AddShoppingCartIcon/>
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>,
        renderExpandableRow: (rowData, rowMeta) => <>
            <Title/>
            <ShowDetails value={data[rowMeta.dataIndex].ingredients}/>
        </>,
    };
    return options;
}