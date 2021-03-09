import {Grid} from "@material-ui/core";
import React from "react";

export const useSetColumns = (shoppingCartData) => {
    const _ = require('lodash');
    
    return [
        {
            name: 'id',
            label: 'Id',
            options: {
                filter: false,
                sort: false,
                display: true
            },
        },
        {
            name: 'name',
            label: 'Denumire',
            options: {
                filter: true,
                sort: true,
                customBodyRender: rowData => <Grid item xs={12} sm={12} md={10} lg={10}>{rowData}</Grid>
            },
        },
        {
            name: 'description',
            label: 'Descriere',
            options: {
                filter: true,
                sort: true,
                customBodyRender: rowData =>
                    <Grid item xs={12} sm={12} md={10} lg={10}>
                        {rowData}
                    </Grid>,
            },
        },
        {
            name: 'price',
            label: 'Pret',
            options: {
                filter: true,
                sort: true,
                customBodyRender: rowData => <Grid item xs={12} sm={12} md={10} lg={10}>{rowData} $</Grid>
            },
        },
        {
            name: 'count',
            label: "Nr. Produse",
            options:{
                filter:false,
                sort:true,
                customBodyRender: (rowData, currentTableData) => {
                    const rowId= currentTableData.rowData[0]
                    const counter = _.countBy(shoppingCartData, item => item.id === rowId)
                    
                    return <Grid item xs={12} sm={12} md={10} lg={10}>{counter[true]} </Grid>
                    }
            }
        },
    ]
}