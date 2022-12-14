import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Logos from '../Data/logo.js';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';

export default function Resume(props) {
  let education= props.data.resume.education
  let work = props.data.resume.work


  return (
    <div id='resume'>

      <Grid container xs={6} sx={{minHeight:350, minWidth:1500, display:'flex', flexDirection:'row' , paddingTop:'1rem', gap:10, marginLeft:20}} >
        <Grid item > 
          <Typography textAlign={"right"} variant='h5' fontFamily={"verdana"} color={"#282c34"}  sx={{textDecoration:"underline blue", textUnderlineOffset:"0.8rem", fontWeight:"bold"}}>
            Education
          </Typography>
        </Grid>
        <Grid item > 
          {
            education.map((edu) => (
              <Typography variant='h6' fontFamily={"monospace"} color={"#282c34"} textAlign={"left"} >
                {edu.eduInst} <br /> {edu.course} <br /> <span id='time'>{edu.year}</span> <br /> <br />
              </Typography> 
            ))
          }
        </Grid>
      </Grid>
      <Divider sx={{bgcolor:"grey", maxWidth:1650, ml:20, borderBottomWidth:2}}></Divider>
      <Grid container xs={6} sx={{minHeight:350, minWidth:1700, display:'flex', flexDirection:'row' , paddingTop:'3rem', gap:10, marginLeft:20}} >
        <Grid item > 
          <Typography textAlign={"right"} variant='h5' fontFamily={"verdana"} color={"#282c34"}  sx={{textDecoration:"underline blue", textUnderlineOffset:"0.8rem", fontWeight:"bold"}}>
            Work
          </Typography>
        </Grid>
        <Grid item > 
          {
            work.map((wk) => (
              <Typography variant='h6' fontFamily={"monospace"} color={"#282c34"} textAlign={"left"} sx={{paddingLeft:10}} >
                {wk.company} <br /> {wk.position} <br /> <span id='time'> {wk.year}</span> <br /> {wk.desc.map ((ds)=>(<li>{ds}</li>))} <br />
              </Typography> 
            ))
          }
        </Grid>
      </Grid>
      <Divider sx={{bgcolor:"grey", maxWidth:1650, ml:20, borderBottomWidth:2}}></Divider>
      <Grid container xs={6} sx={{minHeight:350, minWidth:1700, display:'flex', flexDirection:'row' , paddingTop:'3rem', gap:10, marginLeft:20}} >
        <Grid item > 
          <Typography textAlign={"right"} variant='h5' fontFamily={"verdana"} color={"#282c34"}  sx={{textDecoration:"underline blue", textUnderlineOffset:"0.8rem", fontWeight:"bold"}}>
            Skills
          </Typography>
        </Grid>
        <Grid item > 
        <Grid container xl={12} rowSpacing={6} sx={{paddingLeft:7, paddingBottom:10}}>
            {Logos&&Logos.map((items) => (
                <Grid item key={items.title} xl={2} >
                    <Card
                    className="card"
                    sx={{ height: '100%', width:'100%', display: 'flex', flexDirection: 'column', backgroundColor:'transparent',  boxShadow:'none',  }}
                    >
                    <CardMedia
                        component="img"
                        sx={{
                            height : 80,
                            width:100, 
                            objectFit:'scale-down',
                        }}
                        image={items.img}
                        alt={items.title}
                    />
                    </Card>
                </Grid>
            ))}
           </Grid>
        </Grid>
      </Grid>


      

    </div>
  )
}
