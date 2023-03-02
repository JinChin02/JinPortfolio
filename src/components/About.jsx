import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import DownloadIcon from '@mui/icons-material/Download';

export default function About(props) {

  let selfIntro = props.data.main.selfIntro
  let selfBackground = props.data.main.background

  const download = () => {
    //window.location.href = 'https://drive.google.com/file/d/11CIwaCp6LOIZVNEPDgHY-J2bC-fcvIhM/view';
    const url1 = "https://drive.google.com/file/d/1knfbCqsuISPzv_rrwzMV8660D9MYSHkQ/view?usp=share_link"
    window.open(url1, '_blank')
  }

  return (
    <div id='about'>
      <Container sx = {{maxWidth:'90vw', pt:'2rem'}}>
        <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:2}}>
          <Typography color="fff" variant="h5" fontFamily={'verdana'} fontWeight={'bold'} component="div">
            About Me
            <br/>
          </Typography>

          <Typography color="ccc" variant="h6" fontFamily={'verdana'} component="div" textAlign={"justify"} width="60vw">
              {selfBackground.split('\n').map(str => <p>{str}</p>)}
          </Typography>


          <Container sx={{ py: 3  }} maxWidth="xl">
            <Button variant="contained" sx={{ backgroundColor:"gray", borderRadius:0}} onClick={download}>
              <DownloadIcon sx={{ mr: 1, mt:0.5, mb:0.5 }} />Jin's Resume
            </Button>
          </Container>
        </Box>
      </Container>
      

        

    </div>
  )
}
