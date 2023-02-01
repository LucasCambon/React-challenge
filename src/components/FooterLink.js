import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function FooterLink({info}){


    return(
        <Grid sx={{ width: 336 }} xs="auto">
            <Paper elevation={0} sx={{marginBottom: "25px", backgroundColor: "#E6E8E9"}}>
                <CardContent>
                    <Typography fontWeight={"bold"} variant="h6">
                    {info.title}
                    </Typography>
                    {info.links.map((row,i)=> {
                        return (
                            <Box key={row+i}>
                                <Typography sx={{textDecoration: "none"}} component="a" href="/" variant="subtitle1" color="text.secondary">
                                {row}
                                </Typography>
                            </Box>
                        )
                    })}
                </CardContent>
            </Paper>
        </Grid>
    )
}