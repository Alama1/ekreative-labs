import './overlap.styles.scss'
import InputForm from "./input.component";
import {useState} from "react";

const Overlap = () => {
    const [inputs, setInputs] = useState([])
    const onSubmitButtonClick = (props) => {
        alert(JSON.stringify(props))
    }
    return (
        <div className="overlap">
            <div className="contact">
                <div className="frame-2">
                    <div className="text-wrapper-27">Contact</div>
                    <div className="rectangle-14"></div>
                    <p className="consectetur">
                        <span className="text-wrapper-8">
                            Consectetur adipiscing elit viverra tristique placerat in massa consectetur
                            <br/>
                        </span>
                        <span className="text-wrapper-9">
                            <br/>
                            Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam loremest persetera<br/>
                            <br/>
                        </span>
                        <span className="text-wrapper-28">EMAIL:</span>
                        <span className="text-wrapper-9"> company@youremail.com <br/></span>
                        <span className="text-wrapper-28">WEBSITE:</span>
                        <span className="text-wrapper-9"> www.yourwebsite.com</span>
                    </p>
                    <InputForm input={{
                        fields: [{placeholder: 'Name', key: 'name'},{placeholder: 'Email', key: 'email'}, {placeholder: 'Message', key: 'message'}
                        ]
                    }}
                               button={{text: 'Send message!', onClick: onSubmitButtonClick}}/>
                </div>
            </div>
        </div>
    )
}

export default Overlap