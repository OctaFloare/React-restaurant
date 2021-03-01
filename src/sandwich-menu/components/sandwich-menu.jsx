import MUIDataTable from 'mui-datatables'
import React, {useEffect, useState} from "react";
import {Box, Grid, Toolbar, Badge, IconButton} from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import 'bootstrap/dist/css/bootstrap-grid.css.map'
import {useOnAddCart} from "../containers/hooks/use-on-add-cart";
import {Title} from "../containers/details/title"
import {ShowDetails} from "../containers/details/body";
import {columns} from "../containers/table-columns";
import {useDispatch, useSelector} from "react-redux";
import {getAllSandwiches} from "../actions";

export const Menu = () => {

    const [selected, setSelected] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => dispatch(getAllSandwiches()),[])
    const data = useSelector(selector)
    const onClick = useOnAddCart(selected,setSelected, selector);
    
    const options = {
        filterType: 'dropdown',
        viewColumns:false,
        filter: false,
        print:false,
        rowsSelected: selected,
        download:false,
        textLabels:{
            selectedRows : {
                text: "produs(e) selectat(e)"
            }
        },
        selectableRowsOnClick: true,
        selectableRowsHeader: false,
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => setSelected(rowsSelected),
        expandableRows: true,
        customToolbarSelect: () => 
            <Toolbar>
                <div>Adauga in cos</div>
                <Box mr={5}>
                    <IconButton onClick={onClick}>
                        <Badge badgeContent={selected.length} color='secondary'>
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>,
        renderExpandableRow: (rowData, rowMeta) => <>
            <Title />
            <ShowDetails value={data[rowMeta.dataIndex].ingredients}/>
        </>,
        
    };
    
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

const selector = ({ sandwichMenuReducer }) => {
    console.log(sandwichMenuReducer)
    return sandwichMenuReducer.items;
}