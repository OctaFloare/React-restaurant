import React from "react";
import {useSelector} from "react-redux";
import {DataTable} from "../containers/mui-data-table/data-table";
import {Error} from '../../core/site-error/error'
import {Box} from "@material-ui/core";

export const Menu = () => {
    const data = useSelector(selector)
    
    return <Box>
        {data.status === 'true' ? <DataTable data={data.data} selector={selector} /> : <Error />}
    </Box>
}

const selector =  ({ sandwichMenuReducer }) => sandwichMenuReducer.items;
