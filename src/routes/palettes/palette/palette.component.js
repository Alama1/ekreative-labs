import './palette.style.scss'
import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import ColorPickerModal from "../../../components/modals/colorPickerModal/colorPickerModal.component";
import audio from "../../../src_notify.mp3"

const Palette = ({palette}) => {
    const [copyFormat, setCopyFormat] = useState('HEX (#AA1923)')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [soundEnabled, setSoundEnabled] = useState(true)
    const id = useParams()
    const element = palette.find((palette) => {
        return palette.id === id.id})
    if (!element) {
        return(
            <h1>No palette with this id was found</h1>
        )
    }
    document.body.style.overflow = "hidden"

    const covertColor = (color) => {
        let bigint
        let r
        let g
        let b
        switch (copyFormat) {
            case 'HEX (#AA1923)':
                return color
            case 'HEX (AA1923)':
                return color.replace('#', '')
            case 'RGB - (1, 2, 3)':
                color = color.replace('#', '')
                bigint = parseInt(color, 16);
                r = (bigint >> 16) & 255;
                g = (bigint >> 8) & 255;
                b = bigint & 255;
                return r + "," + g + "," + b;
            case 'RGBA - (1, 2, 3, 1)':
                color = color.replace('#', '')
                bigint = parseInt(color, 16);
                r = (bigint >> 16) & 255;
                g = (bigint >> 8) & 255;
                b = bigint & 255;

                return r + "," + g + "," + b + ', 1';
            default:
                return color
        }
    }

    const playSound = () => {
        if (!soundEnabled) return
        const beep = new Audio(audio)
        beep.play()
    }

    return (
        <div className='palette-picker'>
            <div className='palette-picker--header'>
                <Link to={'../..'}>
                    <p className='back'>
                        ← Back
                    </p>
                </Link>
                <div className='modal-button' onClick={() => setIsModalOpen(true)}>
                    {`Copy format: ${copyFormat}`}
                </div>
                <div className='sound-button' onClick={() => {setSoundEnabled((prevState) => { return !prevState })}}>
                    {soundEnabled ? <span>Sound On 🔊</span> : <span>Sound Off 🔇</span>}
                </div>
            </div>
            <div className='colors'>
                {element.colors.map((color) => {
                    return(
                        <div style={{ background: color.color }} onClick={() => { navigator.clipboard.writeText(covertColor(color.color)); playSound() }} className='color'>
                            <p className='color-name'>
                                {color.name}
                            </p>
                        </div>
                    )
                })}
            </div>
            {isModalOpen && <ColorPickerModal setIsOpen={setIsModalOpen} setCopyFormat={setCopyFormat}/>}
        </div>
    )
}

export default Palette