import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import DisplayProducts from './DisplayProducts';
import OrderSummary from './OrderSummary';

export default function Cart(){


    return(
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8}>
                        <DisplayProducts />
                    </Grid>
                    <Grid xs={12} md={4}>
                        <OrderSummary />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}