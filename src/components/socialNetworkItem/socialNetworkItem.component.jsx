import './socialNetworkItem.style.scss'
import ComboBox from "../telephoneCountryPicker/comboBox.component";
import {useState} from "react";

const SocialNetworkItem = ({smArray, selectedByDefault, onInputChange, zIndex}) => {
    const [selectedSM, setSelectedSM] = useState(selectedByDefault)

    const onChange = (e) => {
        const value = e.target.value
        onInputChange({[selectedSM]: value})
    }

    return(
        <div className='social-network-item'>
            <div className='social-media-picker'>
                <ComboBox onCodeSelect={setSelectedSM} arrayOfChoices={smArray} selectedValue={selectedByDefault} zIndex={zIndex}/>
            </div>
            <div className='social-media-input'>
                <div className='input--wrapper'>
                    <input onChange={(e) => {onChange(e)}}/>
                </div>
                <div className='social-network-input--underscore'/>
            </div>
        </div>
    )
}

export default SocialNetworkItem