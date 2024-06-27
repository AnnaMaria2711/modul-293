import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login.tsx";
import MainPage from "./mainPage/MainPage.tsx";
import AboutMe from "./about-me/AboutMe.tsx";
import LatestWorks from "./latest-works/LatestWorks.tsx";
import ExtraInfo from "./extra-info/ExtraInfo.tsx";
function App() {


    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/mainpage" element={<MainPage/>}/>
            <Route path="/about-me" element={<AboutMe/>}/>
            <Route path="/latest-works" element={<LatestWorks/>}/>
            <Route path="/extra-information" element={<ExtraInfo/>}/>
        </Routes>
    )
}

export default App
