import './home.style.scss'
import Palettes from "../../components/palettes/palettes.component";
import paletteColors from '../../pallete.json'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-padding'>
                <Palettes paletteColors={paletteColors}/>
            </div>
        </div>
    )
}

export default Home