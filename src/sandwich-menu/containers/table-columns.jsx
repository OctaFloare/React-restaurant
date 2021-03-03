import {Grid, Hidden} from "@material-ui/core";
import React from "react";

export const columns=[
    {
        name: 'img',
        label: 'Poza',
        options: {
            filter: false,
            sort: false,
            customBodyRender: (rowData) =>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                    <img className={'Images'} src={rowData} />
                </Grid>
        }
    },
    {
        name: 'id',
        label: 'Id',
        options: {
            filter:true,
            sort: true,
            display: false
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
    {
        name: 'alt',
        label: 'Alt',
        options: {
            filter:true,
            sort: true,
            display: false
        },

    },
    {
        name: 'description',
        label: 'Descriere',
        options: {
            filter:true,
            sort: true,
            empty: true,
            customBodyRender: rowData => <Hidden smDown>
                <Grid item xs={12} sm={12} md={10} lg={10}>{rowData}</Grid>
            </Hidden>,
        },

    },
]