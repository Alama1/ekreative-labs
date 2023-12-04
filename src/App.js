import './App.scss';
import Registration from "./routes/home/registration.component";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Registration/>}/>
            </Routes>
        </div>
    );
}

export default App;
