import {Box, TableCell, TableRow, Typography} from "@material-ui/core";
import { Details as DetailsIcon } from '@material-ui/icons'
import React from "react";

export const Title = () => <TableRow>
    <TableCell colSpan={5}>
        <Box align={'center'} pb={2}>
            <Typography variant={'h2'}>
                <DetailsIcon fontSize={'inherit'} color={'action'} />
            </Typography>
            <Typography variant={'h5'}>Detalii despre ingrediente</Typography>
            <Typography color={'textSecondary'}>Toate ingredientele folosite in sandwich-ul selectat</Typography>
        </Box>
    </TableCell>
</TableRow>