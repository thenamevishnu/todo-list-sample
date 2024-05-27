import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../context"

const Crud = () => {

    const [toDos, setTodos] = useMyContext()
    const [todo, setTodo] = useState("")

    const navigate = useNavigate()

    const handleTodo = () => {
        if (todo == "") {
            return;
        }
        setTodos([...toDos, todo])
        setTodo("")
    }

    const removeTodo = (deleteIndex) => {
        const res = toDos.filter((element, index) => {
            if (deleteIndex != index) {
                return element
            }
        })
        setTodos(res)
    }

    return (
        <div>
            <input type="text" placeholder="Enter Task..." value={todo} onChange={(event) => {
                    setTodo(event.target.value)
                }}/>
                <button onClick={handleTodo}>Add Task</button>
                <div>
                    {
                        toDos.map((element, index) => {
                            return (
                                <p key={index}>{element}
                                    <button onClick={() => {
                                        removeTodo(index)
                                    }}>Delete</button>
                                    <button onClick={() => {
                                        navigate("/edit/"+index)
                                    }}>Edit</button>
                                </p>
                            )    
                        })
                    }
                </div>
        </div>
    )
}

export default Crud
