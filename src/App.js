import './App.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Home from "./routes/home/home.component";
import paletteColors from './pallete.json';
import Palettes from './routes/palettes/palettes.component';
import Palette from './routes/palettes/palette/palette.component';
function App() {
    return (
        <Routes>
            <Route path='/' element={<Footer />}>
                <Route index element={<Home paletteColors={paletteColors}/>}/>
                <Route path='palettes/:id' element={<Palette palette={paletteColors} />}/>
                <Route path='palettes' element={<Palettes/>}/>
            </Route>
        </Routes>
    );
}

export default App;
