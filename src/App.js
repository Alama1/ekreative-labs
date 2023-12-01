import './App.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Home from "./routes/home/home.component";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Footer />}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
