import {Grid, Hidden} from "@material-ui/core";
import React from "react";

export const columns =[
    {
        name: 'id',
        label: 'Id',
        options: {
            filter:false,
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
            filter:true,
            sort: true,
            empty: true,
            customBodyRender: rowData => <Hidden smDown='true'>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                    {rowData}
                </Grid>
            </Hidden>,
        },
    },
    {
        name: 'price',
        label: 'Pret',
        options: {
            filter:true,
            sort: true,
            customBodyRender: rowData => <Grid item xs={12} sm={12} md={10} lg={10}>{rowData} $</Grid>
        },
    },
]