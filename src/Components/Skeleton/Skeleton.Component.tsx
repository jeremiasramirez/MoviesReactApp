import "./Skeleton.Component.css";
import "animate.css";
export default function SkeletonComponent(){


   return ( [1,2,3,4].map(()=>{
        return (
            <article className="skeleton">
            <div className="skeleton__picture "></div>
            <div className="skeleton__title "></div>
            <div className="skeleton__subtitle"></div>
        </article>
        )
    })
)
}