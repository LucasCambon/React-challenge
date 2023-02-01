import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterLink from './FooterLink';
import DinamicSelect from './DinamicSelect';

export default function Footer(){

    const sections = [
        {
            title: "Our Company",
            links: ["About us", "FAQ", "Partnerships", "Sustainability", "Blog"]
        },
        {
            title: "How can we help",
            links: ["Place a ticket", "Track your order", "Help center"]
        },
        {
            title: "Information",
            links: ["Contact us", "Live chat", "Privacy", "Terms of use"]
        }
    ]

    const regions = [
        {
            value: "United-States",
            text: "United States"
        },
        {
            value: "LATAM",
            text: "LATAM"
        },
        {
            value: "UK",
            text: "United Kingdom"
        },
        {
            value: "Europe",
            text: "Europe"
        },
        {
            value: "Asia",
            text: "Asia"
        },
        {
            value: "Oceania",
            text: "Oceania"
        },
        {
            value: "Africa",
            text: "Africa"
        }
    ]

    const languagues = [
        {
            value: "en",
            text: "English"
        },
        {
            value: "es",
            text: "Spanish"
        },
        {
            value: "de",
            text: "German"
        },
        {
            value: "fr",
            text: "French"
        },
        {
            value: "zh",
            text: "Chinese"
        },
        {
            value: "it",
            text: "Italian"
        },
        {
            value: "jp",
            text: "Japanese"
        },
        {
            value: "ar",
            text: "Arabian"
        }
    ]

    return(
        <Box sx={{ flexGrow: 1, marginTop: "50px", backgroundColor: "#E6E8E9" }}>
            <Grid sx={{justifyContent: "space-around"}} container columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid sx={{ width: 336 }} xs="auto">
                    <Paper elevation={0} sx={{marginBottom: "25px", backgroundColor: "#E6E8E9"}}>
                        <CardContent sx={{height: "164px"}}>
                            <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontFamily: 'monospace',
                                fontSize: "1rem",
                                color: '#a7abb1',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                backgroundColor: "#ced0d3",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "150px",
                                height: "40px"
                            }}
                            >
                            LOGO
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                            We sell custom products for all your needs. Packs and bulk products that you will enjoy.
                            </Typography>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <PhoneIcon />
                                </Grid>
                                <Grid item>
                                    <Typography fontWeight={"bold"} variant="subtitle2" color="text.secondary">
                                    +1-202-555-0129
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" sx={{justifyContent: "start"}}>
                                <Grid item>
                                    <FacebookIcon fontSize='large'/>
                                </Grid>
                                <Grid item>
                                    <TwitterIcon fontSize='large' />
                                </Grid>
                                <Grid item>
                                    <InstagramIcon fontSize='large' />
                                </Grid>
                                <Grid item>
                                    <LinkedInIcon fontSize='large' />
                                </Grid>
                                <Grid item>
                                    <YouTubeIcon fontSize='large' />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Paper>
                </Grid>
                {sections.map((row,i) => {
                    return (
                        <FooterLink key={row+i} info={{...row}} />
                    )
                })}
            </Grid>
            <Grid sx={{justifyContent: "space-around"}} container direction="row" alignItems="center">
                <Grid>
                    <Typography fontWeight={"bold"} variant="subtitle2" color="text.secondary">
                    © 2022 Customer Products. All rights reserved.
                    </Typography>
                </Grid>
                <Grid container direction="row" alignItems="center">  
                    <Grid marginRight={"5px"} item>
                        <Typography fontWeight={"bold"} variant="subtitle2" color="text.secondary">
                        Region: 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <DinamicSelect defaultValue={"United States"} information={regions} name={"regions"}/>
                    </Grid>
                    <Grid marginRight={"5px"} item>
                        <Typography fontWeight={"bold"} variant="subtitle2" color="text.secondary">
                        Language: 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <DinamicSelect defaultValue={"en"} information={languagues} name={"languages"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}