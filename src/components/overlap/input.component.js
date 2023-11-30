import './overlap.styles.scss'
import {Fragment, useState} from "react";

const InputForm = ({input, button}) => {
    const {fields} = input
    const {text, onClick} = button
    const [inputs, setInputs] = useState({})

    const onInputChange = (event, key) => {
        const text = event.target.value
        setInputs((prevState) => {
            return Object.assign(prevState, {[key]: text})
        })
    }
    return (
        <Fragment>
            {fields.map((field) => {
                return(
                    <div className="input" key={field.key}>
                        <input placeholder={field.placeholder} onChange={(e) => {
                            onInputChange(e, field.key)}} className="message-input"/>
                        <img className="vector-4"/>
                    </div>
                )})
            }
            <button className="button" onClick={() => onClick(inputs)}>
                <div className="text-wrapper-32">{text}</div>
            </button>
        </Fragment>
    )
}

export default InputForm