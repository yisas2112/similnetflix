import './index.scss'

const Detail = ({detail}) =>{
    console.log(detail)

    return <>
            <div id='Detail'>
                <img src={`http://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} alt=''/>
                <h1>{detail.title || detail.name || detail.original_title}</h1>
                <h2>{detail.genres.name}</h2>
                <h3>{detail.overview}</h3>


            </div>
    
    </>
}

export default Detail