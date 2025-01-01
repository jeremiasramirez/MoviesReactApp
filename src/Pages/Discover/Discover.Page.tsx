
import "./Discover.Page.css";
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import genresLists from "../../Data/genres"; 
import DiscoverService from "../../Services/DiscoverService";
import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE";
import SkeletonComponent from "../../Components/Skeleton/Skeleton.Component";
import { useNavigate } from "react-router-dom";


 export default function DiscoverPage(){
 
    DocumentTitle('Discover');




    const [openModal,setOpenModal] = useState(false)
    
    const [currentGenre,setCurrentGenre] = useState({name: 'Action',code:0 })
    const [currentNumberPage,setCurrentNumberPage] = useState({number:1 })
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [moviesDiscoverList,setMoviesDiscoverList] = useState([])

     
    useEffect(()=>{
        
        const obsDiscoverService= ()=>{
            
            if(currentGenre.code){
                DiscoverService(currentGenre.code, currentNumberPage.number).subscribe((response)=>{
                    setMoviesDiscoverList(response) 
               });
            }
            else{
                DiscoverService().subscribe((response)=>{
                    setMoviesDiscoverList(response) 
               });
            }
           

        }
      
   
           return ()=>{ obsDiscoverService() }
   
       },[currentGenre.code, moviesDiscoverList,currentNumberPage])
       
        const navigate  = useNavigate()
        const goToShow=(id:number)=>{

        navigate ("/show/"+id)

        }
    
    // select Genres
    return (
    <section className="container__discover">

    
    <section className="container__select">
        <article className="option left__option"></article>

        <article className="main__option animate__animated animate__bounceIn" onClick={()=>handleOpenModal()}>
            <p >{currentGenre.name}</p>
        </article>

        <article className="option right__option" ></article>


        



        {/*lists genres*/}
        <Modal
            open={openModal}
            className="opacityModal"
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
                                setMoviesDiscoverList([])
                            }}
                             key={index}>{data.type}</article>
                        })
                    }
                    </article>
                </section>
            </Box>
        </Modal>
     

        </section>

  
     <section className="CardMovie">

               
                   {
                    
                     moviesDiscoverList.length>=1?  moviesDiscoverList.map((movies:MOVIE_INTERFACE,index:number)=>{
                          
                           return( 
                            <article  onClick={()=>goToShow(movies.id)} key={index}  className="modal__card animate__animated animate__fadeIn">
                         
                            <img className="modal__card__image " src={"https://image.tmdb.org/t/p/w200/"+movies.poster_path+".jpg"} alt="poster" />
                            
                            <div className="modal__container__title__card">
                            {movies.title? <p className="card__title">{movies.title.substring(0,9)}</p>:
                            <p className="modal__card__title">{movies.name?.substring(0,19)}</p>}
                            </div>
                            
                        </article>
                       )
                       }): <SkeletonComponent />
                       
                       
                   }
                  
               </section>


               
     
    </section>)

     
   
}

 
































