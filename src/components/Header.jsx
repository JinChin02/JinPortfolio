import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['home','about', 'resume', 'projects', 'contact'];

const Header = () => {

  return (
    <div className='appBar'>

        <Container  maxWidth="md" sx={{bgcolor : '#302f2f', display:{md:'flex'}, justifyContent:'center', borderRadius:'16px'}}>
          {pages.map((page) => {

            let fullPath = "#"
            if(page !== "home"){
              fullPath = "#" + page
            }
            return <Button
                  key={page}
                  sx={{ my: 2, color: 'aquamarine', display: 'block', marginLeft:'2vw', marginRight:'2vw' }}
                  
                  >
                    <a  href={fullPath} id='headerLink' >{page}</a>
                </Button>
          })}
        </Container>


    </div>
    
  );
};
export default Header;
