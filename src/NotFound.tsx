import { useNavigate } from "react-router-dom"

export function NotFound(){
    const navigate=  useNavigate()

    setTimeout(()=>{
        navigate(-1)
    }, 1000)

    
    return <h1>Not Found</h1>
}