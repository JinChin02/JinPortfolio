import React , {useState} from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Pic from '../Images/Logos/ContactBanner.png'
import Lin from '../Images/Logos/linkedin.png'
import Git from "../Images/Logos/gith.png"

export default function Contact() {

  const linPage = () => {
    // window.location.href = 'https://www.linkedin.com/in/jin-hung-chin-1a33b871/';
    const url1 = "https://www.linkedin.com/in/jin-hung-chin-1a33b871/"
    window.open(url1, '_blank')
  }
  
  const gitPage = () => {
    // window.location.href = 'https://github.com/JinChin02';
    const url2 = "https://github.com/JinChin02"
    window.open(url2, '_blank')
  }

  return (
    <div id='contact' >
      <Container maxWidth="lg" sx={{borderStyle:'none'}} >
        <Card sx={{ maxWidth: 1500, marginTop:'3rem' , border:'none', boxShadow:'none',  backgroundColor:'transparent'}}>
          <CardMedia
            component="img"
            height="200"
            image={Pic}
            alt="green iguana"
            sx={{objectFit:'scale-down', paddingTop:'3rem'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" fontFamily={'monospace'} fontWeight={'bold'} component="div">
              FIND ME AT
            </Typography>
            <Typography variant="body4" color="text.secondary">
              Phone Number : (+1)778 513 8306 <br/>
              Email        : chinjinhung@gmail.com <br/> <br/>
              <strong>OR</strong>
            </Typography>
          </CardContent>

          <CardActions sx={{marginX:60}}>
            <Button onClick={linPage}>
              <img src={Lin} alt="linkedin" style={{ height:80,objectFit:'scale-down'}} />
            </Button>
            <Button onClick={gitPage}>
               <img src={Git} alt="github" style={{ height:80}} />
            </Button> 
          </CardActions> 
        </Card>
      </Container>
    </div>
  )
}
