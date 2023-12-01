import './firstPalette.style.scss'
import Palette from "../palette.component";

const FirstPalette = ({firstPalette, ads, secondPalette, links}) => {
    return (
        <div className='first-palette'>
            <div className='palettes-with-ad'>
                <Palette palette={firstPalette}/>
                <img className='ad-img'
                    src={ads}/>
                <Palette palette={secondPalette}/>
            </div>
            <div className='first-palette--links'>
                {links.map((link) => {
                    return (
                        <a key={link.name} className='first-palette-link' href={link.href}>
                            {link.name}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default FirstPalette