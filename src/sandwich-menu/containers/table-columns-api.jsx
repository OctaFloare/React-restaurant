import {Grid} from "@material-ui/core";
import React from "react";

export const columns=[
    {
        name: 'id',
        label: 'Id',
        options: {
            filter:true,
            sort: true,
        },
    },
    {
        name: 'name',
        label: 'Denumire',
        options: {
            filter:true,
            sort: true,
            customBodyRender: rowData => <Grid item xs={12} sm={12} md={10} lg={10}>{rowData}</Grid>
        },
    },
    {
        name: 'price',
        label: 'Pret',
        options: {
            filter:true,
            sort: true,
            customBodyRender: (rowData) => <Grid item xs={12} sm={12} md={10} lg={10}>{rowData} $</Grid>
        }
    },
]