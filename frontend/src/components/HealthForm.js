import { useState } from "react"
import { useHealthContext } from "../hooks/useHealthContext"

const HealthForm=() => {
    const {dispatch}=useHealthContext()
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [error,setError]=useState(null)
    const [emptyFields,setEmptyFields]=useState([])

    const handleSubmit=async(e) => {
        e.preventDefault()

        const blog={title,body}

        const response=await fetch('/api/Healths',{
            method:'POST',
            body:JSON.stringify(blog),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setBody('')
            setError(null)
            setEmptyFields([])
            console.log('new blog added',json)
            dispatch({type:'CREATE_HEALTH',payload:json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Health Blog</h3>
            <label>Blog Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title')?'error':''}
            /> 

            <label>Blog Body</label>
            <textarea
                type="message"
                rows="4" cols="50"
                onChange={(e) => setBody(e.target.value)}
                value={body}
                className={emptyFields.includes('body') ?'error':''}
            /> 
            <button>Add Blog</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default HealthForm