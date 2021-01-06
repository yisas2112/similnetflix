import './index.scss'
import logo from '../../Images/logo_netflix.png'
import Button from '../Button'
import { useEffect, useState } from 'react'

const Nabvar = ()=>{
    const [showFiltrer, setShowFiltrer] = useState(false)
    const [preview, setPreview] = useState()
    
    
    useEffect(()=>{        
        const handleScroll = () =>{
            setShowFiltrer(window.scrollY  > 400)
        }


        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const handleClic = (type) =>{
        sessionStorage.setItem('type',type)

        setPreview(type)

    }

    return <>
        <div id="Navbar" style={{backgroundColor: showFiltrer && 'black'}}>
            <Button content={logo} path='/similnetflix/'></Button>
            {showFiltrer && (
                <div>
                <Button content='movies' path='/similnetflix/movie' callback={()=>{handleClic('movie')}}/>
                <Button content='Shows' path='/similnetflix/tv' callback={()=>{handleClic('tv')}} />
                </div>               
            )}
        </div>
    </>

}

export default Nabvar