import { useEffect } from "react"
import TrendingMovieService from "../../Services/TrendingService"



export default function Catalog(){

    useEffect(()=>{
        const data= ()=>{
             TrendingMovieService().subscribe((data_)=>{
                console.log(data_);
                
            })
        }

        return ()=>{
            data()
        }

    },[])


    return <>
        <p>Catalog</p>
    </>
}