import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles'

const pages = ['All products', 'Packaging', "Drinkware", "Apparel", "Notebooks", "Backpacks"]


function ResponsiveAppBar() {

    const themeNavBar = createTheme({
        palette: {
            primary: {
                main: '#e6e8e9'
            }
        }
    })



    return (
        <AppBar theme={themeNavBar} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop start */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: '#979da3', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;