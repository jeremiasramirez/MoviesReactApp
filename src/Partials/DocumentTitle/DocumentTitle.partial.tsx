
export default function DocumentTitle(title:string=''){
    const pageName = 'FLIX'
    const idTitle=  document.getElementById('title') as HTMLTitleElement
    if(title!=''){
        idTitle.textContent= pageName+ ' | ' + title
    }
    else{
        idTitle.textContent= pageName
    }
    
}