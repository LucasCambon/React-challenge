import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function OrderSummary({total, numberItems}){


    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
            <Typography sx={{marginLeft: "25px"}} color="#1a2634" variant="h4" gutterBottom>
                Order Summary
            </Typography>
            <Grid container>
                <Grid sx={{margin: 'auto'}} item xs={10}>
                    <Grid container xs={10}>
                        <Grid xs={8}>
                            <Typography color='#979da3' variant="subtitle1" gutterBottom>
                                Number of items
                            </Typography>
                        </Grid>
                        <Grid xs={4}>
                            <Typography textAlign="right" color='#979da3' variant="subtitle1" gutterBottom>
                                {numberItems}
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} xs={10}>
                        <Grid xs={2}>
                            <Typography fontWeight="bold" color="#1a2634" variant="h6" gutterBottom>
                                Total:
                            </Typography>
                        </Grid>
                        <Grid xs={10}>
                            <Typography fontWeight="bold" textAlign="right" color="#1a2634" variant="h6" gutterBottom>
                                $ {total}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} xs={10}>
                        <Grid xs={12}>
                            <Button sx={{ width: "100%", height: "50px", backgroundColor: "#3a4451", fontWeight: "bold" }} variant="contained">Proceed to Checkout</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button sx={{ width: "100%", height: "50px", color: "#3a4451", borderColor: "#3a4451", borderWidth: "3px", fontWeight: "bold" }} variant="outlined">Continue Shopping</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}