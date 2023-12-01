import './palettes.style.scss'
import Header from "../header/header.component";
import FirstPalette from "../palette/first-palettes/firstPalette.component";
import Palette from "../palette/palette.component";

const Palettes = ({paletteColors}) => {
    return (
        <div className='palettes'>
            <Header/>
            <FirstPalette
                firstPalette={paletteColors.shift()}
                ads={'https://media.tenor.com/ph3pdOqC4v4AAAAC/cat.gif'}
                secondPalette={paletteColors.shift()}
                links={[{name: 'Link 1', href: 'https://www.google.com/'}, {name: 'Link 2', href: 'https://www.google.com/'}, {name: 'Link 3', href: 'https://www.google.com/'}]}
            />
            <div className='all-palettes'>
                {paletteColors.map((palette) => {
                    return(
                        <Palette key={palette.id} palette={palette}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Palettes