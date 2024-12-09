// import { Outlet } from 'react-router-dom'
import { Box, Modal, Typography } from '@mui/material'
import './Appbar.Component.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AppBarComponent(){
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };
    
      const navigate  = useNavigate()
      const goTo=()=>{ navigate ("watchlist") }




      
    return <> 
        <section className='container__appbar'>
            
            <article className='container__icon'>
                <img src="/play.png" alt="" />
            </article>

            <article className='container__items__bar'>
                <div className='icons__bar' onClick={handleOpen}>
                    <img src="/search.png" alt="" />
                </div>

                <div className='icons__bar' onClick={()=>goTo()}  >
               
                    <img src="/favorite.png" alt="" />
                  
                </div>
                <div className='icons__bar'  >
                    <img src="/settings.png" alt="" />
                </div>
            </article>
 
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
            </Modal>
            
        </section>

        

        
    </>
}

