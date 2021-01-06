import { Link } from 'react-router-dom'
import './index.scss'


const Button = ({content, callback,path})=>{

    return <>         
            <Link to={path}>
            {content.startsWith('http')|| content.startsWith('data')?
            <img src={content}/>
            :<button id="Button" onClick={callback}>{content}</button>}
            </Link>   
            
            
        
    
    </>

}

export default Button
