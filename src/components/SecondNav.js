import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        <React.Fragment>
            <AppBar sx={{display: { xs: 'none', md: 'block' }}} theme={themeNavBar} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Desktop start */}
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
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
            <Accordion sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', backgroundColor:'#e6e8e9' } }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                </AccordionSummary>
                <AccordionDetails>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: '#979da3', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    );
}
export default ResponsiveAppBar;