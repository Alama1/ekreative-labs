import './palettes.style.scss'
import {useParams} from "react-router-dom";

const Palettes = () => {
    const id = useParams()
    return(
        <div className='palette-route'>
            Choose one
        </div>
    )
}

export default Palettes