import './SkeletonCarrousel.Component.css';



export default function SkeletonCarrousel() {

    return <>
        <section className='carrousel__skeleton'>
            <article className='carrousel__skeleton__poster'>
                <div className='carrousel__skeleton__poster__title'></div>
                <div className='carrousel__skeleton__poster__subtitle'></div>
            </article>
            <article className='carrousel__skeleton__description'>
                <div className='carrousel__skeleton__poster__supdescription'></div>
                <div className='carrousel__skeleton__poster__subdescription'></div>
                <div className='carrousel__skeleton__poster__subsubdescription'></div>
            </article>
        </section>
        
    </>

}


