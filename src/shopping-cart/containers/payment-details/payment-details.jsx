import {Box, Card, CardContent} from "@material-ui/core";
import React from "react";
import {PaymentTitle} from "./title/payment-title";
import {PaymentBody} from "./body/payment-body";
import {PaymentSubTitle} from "./subtitle/payment-subtitle";


export const PaymentDetails = ({totalPrice}) =><Box mt={5}>
    <Card>
        <CardContent>
            <PaymentTitle text={'Detalii plata'}/>
            <PaymentBody text={`Pret produse: ${totalPrice} $`} />
            <PaymentBody text={'Pret transport: 5 $'} />
            <PaymentSubTitle text={` Pret total: ${totalPrice+5} $`} />
        </CardContent>
    </Card>
</Box>