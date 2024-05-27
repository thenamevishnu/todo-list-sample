import { BrowserRouter, Route, Routes } from "react-router-dom"
import Crud from "./Components/Crud"
import Edit from "./Components/Edit"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Crud} />
                <Route path="/edit/:editIndex" Component={Edit} />
            </Routes>
        </BrowserRouter>
    )
}

export default App