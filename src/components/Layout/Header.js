import React, { useState } from 'react'
import {Box,AppBar,Toolbar,Typography,Stack,Button,IconButton,Drawer, Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link ,NavLink} from 'react-router-dom';
import Logo from '../../image/logo.svg';
import '../../style/Hedear.css'
const Header = () => {
    const [open,setopen] = useState (false);
    return (
    <>
    <Box>
        <AppBar>
            <Toolbar component={'nav'} sx={{bgcolor : 'black'}}>
                <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr : 2, display :{sm : 'none'}}} onClick={() => {setopen(true)}}>
                    <MenuIcon />
                </IconButton>
                <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow : 1}}> 
                    <img src={Logo} alt='logo' width={'250px'} height={'70px'}/>
                </Typography>
                <Drawer variant='temporary' open={open} anchor='left' onClose={() => {setopen(false)}}>
                    <Box component={'nav'} p={3} >
                    <Typography mb={2} color={'goldenrod'} variant='h5' component={'div'} sx={{border :''}}> 
                        <img src={Logo} alt='logo' width={'200px'} height={'70px'}/>
                    </Typography>
                    <Divider/>
                    <Stack spacing={1} alignItems={'center'} onClick={() => {setopen(false)}}>
                        <NavLink activeClassName='active' to={'/'} > <Button  sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'25px'}}>Home</Button></NavLink>
                        <NavLink to={'/menu'}> <Button  sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'25px'}}>Menu</Button></NavLink>
                        <NavLink to={'/about'}> <Button sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'25px'}}>About</Button></NavLink>
                        <NavLink to={'/contact'}> <Button sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'25px'}}>Contact</Button></NavLink>
                    </Stack>
                    </Box>
                </Drawer>
                <Stack direction={'row'} spacing={3} sx={{display : {xs : 'none',sm : 'block'}}}>
                    <Link to={'/'} > <Button sx={{color : 'white','&:hover':{bgcolor:'goldenrod'}}}>Home</Button></Link>
                    <Link to={'/menu'}> <Button  sx={{color : 'white','&:hover':{bgcolor:'goldenrod'}}}>Menu</Button></Link>
                    <Link to={'/about'}> <Button sx={{color : 'white','&:hover':{bgcolor:'goldenrod'}}}>About</Button></Link>
                    <Link to={'/contact'}> <Button sx={{color : 'white','&:hover':{bgcolor:'goldenrod'}}}>Contact</Button></Link>
                </Stack>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </Box>
    </>
    )
}

export default Header
