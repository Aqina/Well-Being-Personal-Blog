import { HealthContext } from "../context/HealthContext"
import { useContext } from "react"

export const useHealthContext=() => {
    const context=useContext(HealthContext)//state and dispatch retrieved

    if(!context){
        throw Error('useHealthContext must be used inside an HealthsContextProvider')
    }

    return context
}