import { useHealthContext } from "../hooks/useHealthContext"
//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const HealthDetails=({health}) => {

    const {dispatch}=useHealthContext()

    const handleClick=async () => {
        const response=await fetch('api/Healths/'+health._id, {
            method:'DELETE'
        })
        const json=await response.json()

        if(response.ok){
            dispatch({type:'DELETE_HEALTH',payload:json})
        }
    }

    return (
        <div className="Health-details">
            <h4>{health.title}</h4>
            <p>{health.body}</p>
            <p>{formatDistanceToNow(new Date(health.createdAt),{addSuffic:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default HealthDetails