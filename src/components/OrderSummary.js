import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function OrderSummary(){


    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
            <Typography color="#1a2634" variant="h4" gutterBottom>
                Order Summary
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                        <Typography color='#979da3' variant="subtitle1" gutterBottom>
                            Number of items
                        </Typography>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Typography textAlign="right" color='#979da3' variant="subtitle1" gutterBottom>
                            3
                        </Typography>
                    </Grid>
                    <Grid xs={8} md={8}>
                        <Divider />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={2} md={2}>
                        <Typography fontWeight="bold" color="#1a2634" variant="h6" gutterBottom>
                            Total:
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <Typography fontWeight="bold" textAlign="right" color="#1a2634" variant="h6" gutterBottom>
                            $ 3,560.00
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={8} md={8}>
                        <Button sx={{ width: "100%", height: "50px", backgroundColor: "#3a4451", fontWeight: "bold" }} variant="contained">Proceed to Checkout</Button>
                    </Grid>
                    <Grid xs={8} md={8}>
                        <Button sx={{ width: "100%", height: "50px", color: "#3a4451", borderColor: "#3a4451", borderWidth: "3px", fontWeight: "bold" }} variant="outlined">Continue Shopping</Button>
                    </Grid>
                </Grid>
            </Box>
            
        </Box>
    )
}