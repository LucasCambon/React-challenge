import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCart from './ProductCart';

  

export default function DisplayProducts(){

    const products = [1,2,3]

    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
            <Typography sx={{marginLeft: "25px"}} color="#1a2634" variant="h4" gutterBottom>
                Your cart
            </Typography>
            
            {
                products.map((row,i) => {
                    return (
                        <ProductCart key={row+i} />
                    )
                })
            }
            
        </Box>
    )
}