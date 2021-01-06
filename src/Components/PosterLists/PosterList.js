import React from 'react'
import Poster from '../Poster'
import './PosterList.scss'

const PosterList = ({posters})=>{    
    
    return <>
        <div id='PosterList'>
        {posters.map((e, index)=>{
            return <>
            <Poster key={index} poster={e}/>
            
            </>
        })} 
            
        </div>
    
    </>

}

export default PosterList