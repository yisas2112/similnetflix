import {useContext, useEffect} from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../../AppContext/AppContext'
import Banner from '../../Components/Banner'

import PosterList from '../../Components/PosterLists/PosterList'
import Spinner from '../../Components/Spinner'

const HomeContainer = ()=>{
    const {type} = useParams()
    const posters = useContext(AppContext)    

    useEffect(()=>{
        posters.types(type)

    },[type])
    
    return <>
    {!posters.loading ? 
    <>
    <Banner poster={posters.posters[Math.floor(Math.random() * posters.posters.length)]}/>
    <PosterList posters={posters.posters}/>
    </>: <Spinner/>}
    
    </>
}

export default HomeContainer