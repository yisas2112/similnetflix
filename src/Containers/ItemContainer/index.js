import './index.scss'
import {useEffect, useState} from 'react'
import Detail from '../../Components/Detail'
import Spinner from '../../Components/Spinner'
import { useParams } from 'react-router'

const ItemContainer = ()=>{
    const {id,type} = useParams();
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState()
    console.log(detail,id,type)

    useEffect(()=>{
        let ignore = false
        setTimeout(()=>{
            setLoading(true)
            const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=6c42ab066380f0f8504bff1f305fbf23`
            fetch(url)
            .then((response)=>{
                if(!ignore){
                return response.json()
                }
            }).then((response)=>{
                if(!ignore){
                setDetail(response)
                setLoading(false)
                }
            })
        },3000)

        return ()=>{
            ignore = true
        }
    },[id,type])

    return <>
            {loading ? <Spinner/>:<Detail detail={detail}/>}
            
    
    </>

}

export default ItemContainer