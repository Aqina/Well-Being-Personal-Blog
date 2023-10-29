import { useEffect} from "react"
import { useHealthContext } from "../hooks/useHealthContext"

//components
import HealthDetails from "../components/HealthDetails"
import HealthForm from "../components/HealthForm"


const Home=() => {
    //const [healths,setHealths]=useState(null)
    const {healths,dispatch}=useHealthContext()
    useEffect(() => {
        const fetchHealth=async() => {
            const response=await fetch('/api/Healths')
            const json=await response.json()

            if(response.ok){
                //setHealths(json)
                dispatch({type:'SET_HEALTHS',payload:json})
            }

        }
        fetchHealth()
    },[dispatch])

    return(
        <div className="home">
            <div className="healths">
                {healths && healths.map((health) => (
                    //<p key={Health._id}>{Health.title}</p>
                    <HealthDetails key={health._id} health={health} />
                ))}
            </div>
            <HealthForm/>
        </div>
    )
}

export default Home