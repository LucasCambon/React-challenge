import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCart from './ProductCart';

  

export default function DisplayProducts({products, setProducts, setTotal}){

    const removeItem = (e,itemId) => {
        let filteredProducts = products.filter(row => row.id !== itemId)
        let updatedTotal = updateTotal(filteredProducts)
        setProducts(filteredProducts)
        setTotal(updatedTotal)
    }

    const updateQuantity = (e, itemId) => {
        let productEdited = products.find(row => row.id === itemId)
        console.log(productEdited)
        productEdited.quantity = parseInt(e.target.value)
        productEdited.total = productEdited.quantity * productEdited.price
        let updatedTotal = updateTotal(products)
        setProducts(products)
        setTotal(updatedTotal)
    }

    const updateTotal = (updatedProducts) => {
        let updatedTotal = updatedProducts.reduce((acum, currentValue) =>  acum + currentValue.total, 0)
        return updatedTotal
    }

    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
            <Typography sx={{marginLeft: "25px"}} color="#1a2634" variant="h4" gutterBottom>
                Your cart
            </Typography>
            
            {
                products.map((row,i) => {
                    return (
                        <ProductCart product={{...row}} removeItem={removeItem} updateQuantity={updateQuantity} key={row+i} />
                    )
                })
            }
            
        </Box>
    )
}