import './home.style.scss'
import Palettes from "../../components/palettes/palettes.component";

const Home = ({paletteColors}) => {
    return (
        <div className='home'>
            <div className='home-padding'>
                <Palettes paletteColors={paletteColors}/>
            </div>
        </div>
    )
}

export default Home