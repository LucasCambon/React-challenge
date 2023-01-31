import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



export default function ProductLikeCard({product}){

    return(
        <Grid sx={{margin: 'auto', width: 336}} xs="auto">
            <Card sx={{marginBottom: "25px"}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="336"
                    image={product.thumbnail}
                    alt={product.title}
                    />
                    <CardContent sx={{height: "164px"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography fontWeight={"bold"} variant="body2" color="text.secondary">
                            Price: $ {product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}