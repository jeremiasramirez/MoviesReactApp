import { useEffect, useState } from 'react'
import './Carrouseltop.Component.css'
import SkeletonCarrousel from '../SkeletonCarrousel/SkeletonCarrousel.Component'
import CarouselService from '../../Services/CarouselService' 
import { interval } from 'rxjs'
import { useNavigate } from 'react-router-dom'
 
 


 
export default function CarrouselTop(){
   
    const [moviesTop, setMoviesTop]  = useState(Object) 

                

    useEffect(()=>{
        const getCarouselMovies = ()=>{
        CarouselService().subscribe((response)=>{
            setMoviesTop(response[0]);
            interval(5000).subscribe(()=>{
                setMoviesTop(response[(Number(Math.random() * 19)).toFixed(0)]);
            })
        })
            
    }

        return ()=>{
            getCarouselMovies();
        }
    }, [])


    
    const urlBackdropImageCarouse = 'https://image.tmdb.org/t/p/w500'+moviesTop.backdrop_path+'.jpg'    
    // class css 
    const backgroundPicture = {
        backgroundImage: `url(${urlBackdropImageCarouse})`,
        backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
         
      };



    const navigate  = useNavigate()
    const goToShow=(id:number)=>{ navigate ("show/"+id) }


    return <>
         {moviesTop.id? <section onClick={()=>goToShow(moviesTop.id)} className='carrousel__container' style={backgroundPicture}>
          <article className='carrousel__items'>
           <article className='carrousel__poster  ' >
                <img className='scalate' src={"https://image.tmdb.org/t/p/w300"+moviesTop.poster_path+".jpg"} alt="" />
           
            </article>
            <article className='carrousel__description__container'>
                <div className='carrousel__description__title'>
                {moviesTop.title? <p className="carrousel__description__title__movie animate__animated animate__fadeInUp">{moviesTop.title.toUpperCase()}</p>:
                        <p className="animate__animated animate__fadeInUp">{moviesTop.name.toUpperCase()}</p>}

                    <p className='carrousel__overview animate__animated animate__fadeInUpBig'>{moviesTop.overview.substring(0,150)+"..."}</p>
              
                    <div className='container__watch'>
                    <button>WATCH</button>
                </div>
                </div>

            </article>
           </article> 
         
        </section> : <SkeletonCarrousel /> }
    </>

}

