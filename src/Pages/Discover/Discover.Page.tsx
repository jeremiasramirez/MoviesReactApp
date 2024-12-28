
import "./Discover.Page.css";
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";
 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import genresLists from "../../Data/genres";


 export default function DiscoverPage(){
 
    DocumentTitle('Discover');





    return (
        <div>
            <ChooseGenres />


        </div>
    )

     
   
}

function ChooseGenres(){
    const [openModal,setOpenModal] = useState(false)
    const [currentGenre,setCurrentGenre] = useState({name: "Action", code: 28})
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const staticGenres = genresLists();
    const staticGenresSize = genresLists().length;

    const fordwardButton = ()=>{
        console.log(staticGenres);
        
    }
     
    
    // select Genres
    return (
    <section>

    
    <section className="container__select">
        <article className="option left__option">
            <ArrowBackIosIcon></ArrowBackIosIcon>
        </article>

        <article className="main__option" onClick={()=>handleOpenModal()}>
            <p >{currentGenre.name}</p>
        </article>

        <article className="option right__option" onClick={fordwardButton}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </article>


        {/*lists genres*/}
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box >
                <section className="container__option__select" onClick={()=>setOpenModal(false)}>
                    <article className="center__options">
                    {
                        genresLists().map((data,index)=>{
                            return <article className="button__option animate__animated animate__fadeIn " 
                            onClick={()=>{
                                setOpenModal(false);
                                setCurrentGenre({name:data.type,code:data.code});
                            }}
                             key={index}>{data.type}</article>
                        })
                    }
                    </article>
                </section>
            </Box>
        </Modal>
     

        </section>


        <p>
            {currentGenre.name} - {currentGenre.code}
        </p>
    </section>)
}
 

 





























