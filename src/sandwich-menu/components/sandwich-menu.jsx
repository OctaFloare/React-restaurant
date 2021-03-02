import MUIDataTable from 'mui-datatables'
import React from "react";
import {Box, Grid} from "@material-ui/core";
import {columns} from "../containers/table-columns";
import {useSelector} from "react-redux";
import {useSetOptions} from "../containers/options";

export const Menu = () => {
    const data = useSelector(selector)
    const options = useSetOptions(data, selector)
    
    return <Box mt={5} mr={2}>
        <Grid container direction='row' justify='center' spacing={2}>   
            <MUIDataTable
            columns={columns}
            data={data}
            options={options}
            title={'Sandwiches'}
            />
        </Grid>
    </Box>
}

const selector = ({ sandwichMenuReducer }) => sandwichMenuReducer.items;
