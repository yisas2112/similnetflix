import { useContext } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../../AppContext/AppContext'
import Button from '../Button'

const Poster = ({poster})=>{
    const {type} = useContext(AppContext)
    let lastType = type || sessionStorage.getItem('type') || 'movie'
    return <>
    <div id='Poster'>        
        <Button content={`http://image.tmdb.org/t/p/w200/${poster.poster_path}`} path={`${lastType}/${poster.id}`}/> 
        
    </div>
    </>


}

export default Poster