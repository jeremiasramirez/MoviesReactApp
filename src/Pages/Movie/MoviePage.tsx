// import { useParams } from "react-router-dom"
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";



export default function MoviePage(){
    const changeTitle = ()=>{
        DocumentTitle('Star')
    }
    changeTitle()
    // const params=useParams();
    

    return <>
        <section className="container__selective__movie">
            <article className="container__selective__poster">

            </article>

            <article className="container__selective__info">

            </article>
        </section>
    </>
}