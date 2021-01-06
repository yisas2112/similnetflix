import React, { useState, useEffect} from 'react'

export const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [posters, setPosters] = useState({})
    const [type, setType] = useState("movie")
    
    
    const types = (type)=>{
        console.log(type)
        setType(type)
    }
    

    useEffect(()=>{
        let ignore = false
        setLoading(true)
        setTimeout(()=>{
            let lastType = type || sessionStorage.getItem('type') || 'movie'
            const url = `https://api.themoviedb.org/3/${lastType}/popular?with_genres=18&api_key=6c42ab066380f0f8504bff1f305fbf23`;
        fetch(url)
        .then((response)=>{
            if(!ignore){
            return response.json()
            }
        }).then((response)=>{            
            if(!ignore){
            setPosters(response.results)            
            setLoading(false)
            }
        })
        },3000)

        return ()=>{
            ignore = true
        }
        

    },[type])


    return <AppContext.Provider value={{posters,loading,types,type}}>
        {children}
    </AppContext.Provider>

}