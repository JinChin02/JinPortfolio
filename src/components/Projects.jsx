import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Canine from '../Images/Canine.JPG'
import Morph from '../Images/Morph.JPG'
import Tim from '../Images/Tim.JPG'
import HackHunt from '../Images/HackHunt.JPG'

export default function Projects(props) {

  let project = props.data.resume.projects
  const imgs = [Canine,HackHunt,Morph,Tim]
  const linkGithub = (url) => {
    window.open(url, '_blank')
  }
 
  return (
    <div id='projects'>
        <Container sx={{ py: 4}} maxWidth="lg">
          <Typography sx={{color:'#95A3A3', fontFamily:'opensans-semibold', height:60}}> CHECK OUT SOME OF MY WORKS. </Typography>
          <Grid container spacing={4}>
              {project.map((items, index) => (
              <Grid item key={items.projectName} xs={12} sm={6} md={4} lg={6}>
                  <Card
                  className="card"
                  sx={{ height: '100%', width:'89%', display: 'flex', flexDirection: 'column', ':hover' : {boxShadow:24, cursor:"pointer"}}}
                  onMo
                  onClick={()=> linkGithub(items.gitUrl)}
                  >
                  <CardMedia
                      component="img"
                      sx={{
                          height : 300,
                          width : 500,
                          objectFit:"cover",
                          objectPosition:"left"
                      }}
                      image={imgs[index]}
                      alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, color:'#95A3A3', fontFamily:'opensans-semibold' }}>
                      <Typography gutterBottom variant="h6" component="h6" sx={{fontWeight:"bold"}}>
                      {items.projectName}
                      </Typography>
                      <Typography sx={{textAlign:"justify", width:'85%', margin:"auto", pt:"0.5rem"}}>
                      {items.description}
                      </Typography>
                  </CardContent>
                  </Card>
              </Grid>
              ))}
          </Grid>
          </Container>
      

    </div>
  )
}
