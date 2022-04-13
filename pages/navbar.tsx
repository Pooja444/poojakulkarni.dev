import type { NextPage } from 'next'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';

const pages = ['Milestones', 'Travel', 'For Recruiters', 'Projects/Hobbies', 'Blogs', 'Contact me'];
const linksMap = new Map<string, string>([
    ["Milestones", "milestones"],
    ["Travel", "travel"],
    ["For Recruiters", "for-recruiters"],
    ["Projects/Hobbies", "projects-hobbies"],
    ["Blogs", "blogs"],
    ["Contact me", "contact"],
]);

const NavBar: NextPage = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                            <IconButton size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="secondary"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', sm: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color="secondary">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box>
                            <Button href="/" style={{ textTransform: 'none' }}>
                                <Typography
                                    fontFamily="'Oregano', cursive"
                                    fontSize="30px"
                                    margin="auto"
                                    alignItems="center"
                                    color="secondary">
                                    Pooja Kulkarni
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        <Box sx={{ ml: 4, display: { xs: 'none', sm: 'none', md: 'flex' } }} justifyContent="flex-start">
                            <Button href="/" style={{ textTransform: 'none' }}>
                                <Typography
                                    fontFamily="'Oregano', cursive"
                                    fontSize="40px"
                                    margin="auto"
                                    alignItems="center"
                                    color="secondary">
                                    Pooja Kulkarni
                                </Typography>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }} justifyContent="flex-end">
                            {pages.map((page) => (
                                <Button
                                    href={`/${linksMap.get(page)}`}
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ pl: 1.2, pr: 1.2, my: 2, display: 'block', textTransform: 'none' }}
                                >
                                    <Typography
                                        color="secondary"
                                        fontSize="17px"
                                        sx={{
                                            ':hover': {
                                                color: "#1D3944"
                                            }
                                        }}
                                    >{page}</Typography>
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
