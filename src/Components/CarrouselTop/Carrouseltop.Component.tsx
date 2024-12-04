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
                <div className='container__watch'>
                    <button>WATCH</button>
                </div>
            </article>
            <article className='carrousel__description__container'>
                <div className='carrousel__description__title'>
                    
                </div>
            </article>
           </article> 
         
        </section> : <SkeletonCarrousel /> }
    </>

}

