import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Aboute = () => {
  return (
    <Layout>
      <Box sx={{my:5,ml:10,'& h4':{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <Typography fontSize={'12px'} fontWeight={'600'}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laboriosam magnam ducimus
        illo necessitatibus voluptatum pariatur tempora praesentium, voluptas ipsam ratione sunt 
        aspernatur numquam minus veritatis incidunt optio nemo a labore tempore quia corrupti. 
        In temporibus ipsam tempore? Eos qui nam, debitis numquam id aspernatur voluptate 
        </Typography>
      </Box>
      <Box sx={{width:'600px','@media (max-width:600px)':{width:'300px'}, m:3,ml:10}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black' ,color:'white','&:hover':{color:'goldenrod'}}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{'&:hover':{bgcolor:'#eee'}}} >
                  <SupportAgentIcon sx={{pt:1,color:'red'}}/> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{'&:hover':{bgcolor:'#eee'}}}>
                  <EmailIcon sx={{pt:1,color:'skyblue'}}/> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{'&:hover':{bgcolor:'#eee'}}}>
                  <CallIcon sx={{pt:1,color:'green'}}/> 1234567890 
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Aboute
