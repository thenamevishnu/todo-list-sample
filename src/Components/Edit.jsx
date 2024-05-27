import React, { useState } from 'react'
import { useMyContext } from '../context'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const {editIndex} = useParams()
    const [toDos, setTodos] = useMyContext()
    const [editTodo, setEditTodo] = useState(toDos[editIndex])

    const navigate = useNavigate()

    const handleEdit = () => {
        if (editTodo == "") {
            return;
        }
        toDos[editIndex] = editTodo
        setTodos(toDos)
        navigate("/")
    }

    return (
        <div>
            <input type="text" placeholder="Edit Task..." value={editTodo} onChange={(event) => {
                setEditTodo(event.target.value)
            }}/>
            <button onClick={handleEdit}>Edit Task</button>
        </div>
    )
}

export default Edit
