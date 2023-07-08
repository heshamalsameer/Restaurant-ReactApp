import React from 'react'
import Layout from '../components/Layout/Layout'
import Food from '../image/2.jpg'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../style/Home.css'
const Aboute = () => {
  return (
    <Layout>
      <Stack className='Home' justifyContent={'center'} alignItems={'left'} style={{backgroundImage :`url(${Food})`}}>
        <Box className='HomeContainer'>
        <Typography variant='h3' ml={'30px'} sx={{fontWeight:'bold'}} fontSize={70}>
          Food Website
        </Typography>
        <Typography sx={{'@media (max-width:600px)':{marginLeft:0,fontSize:'30px'}}} ml={'30px'} mt={'15px'} variant='body3' component={'p'} fontSize={40} fontWeight={'lighter'}>
          Best Food In India
        </Typography>
        <Link  to={'/menu'}><Button sx={{backgroundColor:'black',margin:'15px 0 15px 30px',fontSize:'20px','&:hover':{backgroundColor:'#13171a'},'@media (max-width:600px)':{backgroundColor:'white',color:'black',margin:'15px auto','&:hover':{backgroundColor:'#d8cfcf'}}}} variant='contained' size='large' >ORDER NOW</Button></Link>
        </Box>
      </Stack>
    </Layout>
  )
}

export default Aboute
