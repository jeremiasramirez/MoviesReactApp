// import { Outlet } from 'react-router-dom'

import './Appbar.Component.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Box, Modal } from '@mui/material';
import SearchModal from '../SearchModal/SearchModal.Component';

export default function AppBarComponent(){
    const [open, setOpen] = useState(true);
 
      const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
      const navigate  = useNavigate()
      const goTo=(name:string)=>{ navigate (name) }





    return <> 
        <section className='container__appbar'>
            
            <article className='container__icon animate__animated animate__fadeIn'>
                <img src="/play.png" alt="" />
            </article>

            <article className='container__items__bar'>
                <div className='icons__bar animate__animated animate__bounceIn' onClick={handleOpen}>
                    <img src="/search.png" alt="" />
                </div>

                <div className='icons__bar animate__animated animate__bounceIn' onClick={()=>goTo("watchlist")}  >
               
                    <img src="/favorite.png" alt="" />
                  
                </div>
                <div className='icons__bar animate__animated animate__bounceIn'  onClick={()=>goTo("setting")}>
                    <img src="/settings.png" alt="" />
                </div>
            </article>
 
      {/* find movies modal */}
        <Modal
        className='Box'
            open={open}
            onClose={handleClose}  >
            <Box >
                <SearchModal />
            </Box>
            </Modal>
            
        </section>

        

        
    </>
}
 

 
