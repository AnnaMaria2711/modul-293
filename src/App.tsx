import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login.tsx";
import MainPage from "./mainPage/MainPage.tsx";
function App() {


    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/mainpage" element={<MainPage/>}/>
        </Routes>
    )
}

export default App
