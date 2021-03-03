import {Box} from "@material-ui/core";
import React from "react";
import MUIDataTable from 'mui-datatables'
import {useSetTotalPrice} from "../containers/hooks/use-set-total-price";
import {useSetColumns} from "../containers/table-columns";
import {PaymentDetails} from "../containers/payment-details/payment-details";
import {useSelector} from "react-redux";
import {useSetOptions} from "../containers/options";

const _ = require('lodash');
export const ShoppingCartComponent = () => {
    const shoppingCartData = useSelector(selector)
    const totalPrice = useSetTotalPrice(shoppingCartData);
    const options = useSetOptions(selector);
    const columns = useSetColumns(shoppingCartData)
    
    return <Box m={5}>
            <MUIDataTable 
                data={_.uniqBy(shoppingCartData,item => item.id)}
                columns={columns}
                options={options}
                title={'ShoppingCart'}
                />
        <PaymentDetails totalPrice={totalPrice} />
        </Box>
}

const selector = ({ shoppingCartReducer }) => shoppingCartReducer.items;
