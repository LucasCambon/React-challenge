import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
  

export default function DisplayProducts(){


    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
            <Typography color="#1a2634" variant="h4" gutterBottom>
                Your cart
            </Typography>
            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="/static/images/grid/complex.jpg" />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ID: 1030114
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        $19.00
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}