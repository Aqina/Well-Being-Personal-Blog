import { createContext,useReducer } from "react"

export const HealthContext=createContext()

export const healthsReducer=(state,action) =>{
    switch(action.type){
        case 'SET_HEALTHS':
            return{
                healths:action.payload
            }
        case 'CREATE_HEALTH':
            return{
                healths:[action.payload,...state.healths]
            }  
        case 'DELETE_HEALTH':
            return{
                healths:state.healths.filter((w) => w._id !== action.payload._id)
            }  
        default:
            return state
    }
}

export const HealthContextProvider=({children}) => {

    const [state,dispatch]=useReducer(healthsReducer,{
        healths:null
        })

    return (
        <HealthContext.Provider value={{...state,dispatch}}>
            {children}
        </HealthContext.Provider>
    )
}