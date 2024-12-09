

/* import { useParams } from "react-router-dom" */
/* import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial"; */

import { useEffect, useState } from "react";
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";
import GenresService from "../../Services/GenresService";
import { Outlet } from "react-router-dom"; 




export default function DiscoverPage(){
    DocumentTitle('Discover')
    const [Genres,setGenres] = useState([])
    
    useEffect(()=>{

     



        const obsTrendingMovie = ()=>{
            GenresService().subscribe((response)=>{
                // console.log(response);
                setGenres(response)
                
            })
        }

        return ()=>{
            obsTrendingMovie()
           
        }

    },[])
console.log(Genres);

    

    return <>
        <p>discover</p>
       { <Outlet />}
    </>
}