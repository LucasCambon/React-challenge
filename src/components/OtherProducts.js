import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProductLikeCard from './ProductLikeCard';
import { useEffect, useState } from 'react';



export default function OtherProducts(){

    const [products, setProducts] = useState([])


    const setCartInfo = async () => {
        const cartResponse = await fetch('https://dummyjson.com/products?limit=4', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const info = await cartResponse.json();
        setProducts(info.products)
    };

    useEffect(() => {
        setCartInfo()
    }, []);

    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px"  }}>
            <Typography sx={{marginLeft: "25px"}} color="#1a2634" variant="h4" gutterBottom>
                You might also like
            </Typography>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map((row,i)=> {
                        return <ProductLikeCard product={{...row}} key={row+i}/>
                    })
                }
            </Grid>
        </Box>
    )
}