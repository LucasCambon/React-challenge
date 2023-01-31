import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import DisplayProducts from './DisplayProducts';
import OrderSummary from './OrderSummary';
import { useEffect, useState } from 'react';

export default function Cart(){

    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)


    const setCartInfo = async () => {
        const cartResponse = await fetch('https://dummyjson.com/carts/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const info = await cartResponse.json();
        setProducts(info.products)
        setTotal(info.total)
    };

    useEffect(() => {
        setCartInfo()
    }, []);

    return(
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid xs={12} md={8}>
                        <DisplayProducts products={products} setProducts={setProducts} setTotal={setTotal}/>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <OrderSummary total={total} numberItems={products.length} />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}