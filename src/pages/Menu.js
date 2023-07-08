import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from '../data/Data'

const Aboute = () => {
  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:'wrap' ,flexDirection:'row',justifyContent:'center',m:2}}>
        {
          MenuList.map(item => (
                <Card key={item.name} sx={{maxWidth:'400px',display:'flex',m:2}}>
                  <CardActionArea>
                  <CardMedia component={'img'} height={400} image={item.image} alt={item.name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {item.name}
                    </Typography>
                    <Typography variant='h6' color={'text.secondary'}>
                      {item.price}$
                    </Typography>
                    <Typography variant='body2' color={'text.secondary'}>
                      {item.description}
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Aboute
