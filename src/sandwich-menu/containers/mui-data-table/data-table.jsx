import {Box, Grid, IconButton} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import {columns} from "../table-columns-api";
import React from "react";
import {useSetOptions} from "../options";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {useOnAddCart} from "../hooks/use-on-add-cart";

export const DataTable = ({data, selector}) =>{
    const onClick = useOnAddCart(selector);
    const options = useSetOptions(data)
    
    return <Box mt={5} mr={2}>
        <Grid container direction='row' justify='center' spacing={2}>
            <MUIDataTable
                columns={columns}
                data={data}
                options={options}
                title={'Sandwiches'}
            />
        </Grid>
        <Grid container direction='row' justify='center' spacing={2}>
            <Grid item xs={4} sm={3} md={2} lg={1} >
                        <IconButton onClick={onClick}>
                                Adauga in cos
                                <AddShoppingCartIcon/>
                        </IconButton>
            </Grid>
        </Grid>
    </Box>
}