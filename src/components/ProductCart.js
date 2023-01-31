import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import image from '../assets/img/Example-image.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ProductCart({product, removeItem, updateQuantity}){


    


    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid sx={{margin: 'auto'}} item xs={10}>
                    <Grid
                        sx={{
                            p: 2,
                            margin: 'auto',
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                        >
                        <Grid container spacing={2}>
                            <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src={image} />
                            </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography fontWeight={"bold"} gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: {product.id}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <FormControl sx={{minWidth: "100px"}}>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Quantity
                                            </InputLabel>
                                            <NativeSelect
                                            inputProps={{
                                                defaultValue: product.quantity,
                                                name: 'quantity',
                                                id: 'uncontrolled-native',
                                                onChange: (e) => updateQuantity(e,product.id)
                                            }}
                                            >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <IconButton
                                        color="inherit"
                                        gap={2}
                                        onClick={(e) => removeItem(e,product.id)}
                                        >
                                            <DeleteOutlinedIcon />
                                            <Typography variant="body2">Remove</Typography>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid sx={{textAlign: 'right'}} item>
                                    <Typography fontWeight={"bold"} variant="h5" component="div">
                                    $ {product.price}
                                    </Typography>
                                    <Typography fontWeight={"bold"} variant="h5" component="div">
                                    Total: $ {product.total}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{margin: "auto"}} item xs={10}>
                    <Divider />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}