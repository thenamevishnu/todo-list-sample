import { createContext, useContext, useState } from "react";

const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [toDos, setTodos] = useState([])

    return (
        <MyContext.Provider value={[toDos, setTodos]}>
            { children }
        </MyContext.Provider>
    )
} 

export const useMyContext = () => {
    return useContext(MyContext)
}