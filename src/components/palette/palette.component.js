import './palette.style.scss'

const Palette = ({palette}) => {
    const {paletteName, emoji, colors} = palette
    return (
        <div className='palette'>
            <div className='colors'>
                {colors.map((color) => {
                    return (
                        <div key={color.id} about={color.name} style={{background: color.color}} className='color'/>)
                })}
            </div>
            <div className='palette-footer'>
                <p>{paletteName}</p>
                <p>{emoji}</p>
            </div>
        </div>
    )
}

export default Palette