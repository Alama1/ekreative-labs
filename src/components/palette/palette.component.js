import './palette.style.scss'
import {Link} from "react-router-dom";

const Palette = ({palette}) => {
    const {paletteName, emoji, colors, id} = palette
    return (
        <Link to={`/palettes/${id}`}>
            <div key={id} className='palette'>
                <div className='colors'>
                    {colors.map((color) => {
                        return (
                            <div key={color.name} about={color.name} style={{background: color.color}} className='color'/>)
                    })}
                </div>
                <div className='palette-footer'>
                    <p>{paletteName}</p>
                    <p>{emoji}</p>
                </div>
            </div>
        </Link>
    )
}
export default Palette