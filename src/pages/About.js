import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const Aboute = () => {
  return (
    <Layout>
      <Box  sx={{my:10,'& h4':{fontWeight:'bold',my:2,fontSize:'2rem'},p:2,'@media (max-width:600px)':{mt:0,'& h4':{fontSize:'1.5rem'}}}}>
        <Typography variant='h4' textAlign={'center'}>
          Welcome To My Resturant
        </Typography>
        <Typography component={'p'} mb={1}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laboriosam magnam ducimus
        illo necessitatibus voluptatum pariatur tempora praesentium, voluptas ipsam ratione sunt 
        aspernatur numquam minus veritatis incidunt optio nemo a labore tempore quia corrupti. 
        In temporibus ipsam tempore? Eos qui nam, debitis numquam id aspernatur voluptate dolorum 
        sed quae architecto exercitationem dolor voluptates? Quibusdam, dolorum voluptate.
        Quaerat nisi ullam ex ad nobis cum ducimus reprehenderit nemo tempore assumenda molestias adipisci,
        veniam aut. Alias autem nihil magni aut commodi, saepe earum. Accusamus provident, dignissimos, 
        rem illo aut velit enim error et ipsum iste alias quibusdam illum culpa ab id officia ullam!
        </Typography>
        <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laboriosam magnam ducimus
        illo necessitatibus voluptatum pariatur tempora praesentium, voluptas ipsam ratione sunt 
        aspernatur numquam minus veritatis incidunt optio nemo a labore tempore quia corrupti. 
        In temporibus ipsam tempore? Eos qui nam, debitis numquam id aspernatur voluptate dolorum 
        sed quae architecto exercitationem dolor voluptates? Quibusdam, dolorum voluptate.
        Quaerat nisi ullam ex ad nobis cum ducimus reprehenderit nemo tempore assumenda molestias adipisci,
        veniam aut. Alias autem nihil magni aut commodi, saepe earum. Accusamus provident, dignissimos, 
        rem illo aut velit enim error et ipsum iste alias quibusdam illum culpa ab id officia ullam!
        </Typography>
      </Box>
    </Layout>
  )
}

export default Aboute
