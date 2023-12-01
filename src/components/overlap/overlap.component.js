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
                <div className="overlap-wrapper">
                    <div className="overlap-title">Contact</div>
                    <div className="vector"></div>
                    <p className="main-text">
                        <span className="main-text--bald">
                            Consectetur adipiscing elit viverra tristique placerat in massa consectetur
                            <br/>
                        </span>
                        <span className="main-text--thin">
                            <br/>
                            Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam loremest persetera<br/>
                            <br/>
                        </span>
                        <span className="contact-info--title">EMAIL:</span>
                        <span className="contact-info--text"> company@youremail.com <br/></span>
                        <span className="contact-info--title">WEBSITE:</span>
                        <span className="contact-info--text"> www.yourwebsite.com</span>
                    </p>
                    <InputForm input={{
                                    fields: [
                                        {placeholder: 'Name', key: 'name'},
                                        {placeholder: 'Email', key: 'email'},
                                        {placeholder: 'Message', key: 'message'}]}}
                               button={
                                        {text: 'Send message!', onClick: onSubmitButtonClick}}/>
                </div>
            </div>
        </div>
    )
}

export default Overlap