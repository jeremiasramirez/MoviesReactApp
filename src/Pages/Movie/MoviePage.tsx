import { useParams } from "react-router-dom"
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";



export default function MoviePage(){
    const changeTitle = ()=>{
        DocumentTitle('Star')
    }
    changeTitle()
    const params=useParams();
    

    return <>
        <p>MoviePage {params.id}</p>
    </>
}