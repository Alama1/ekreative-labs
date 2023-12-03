import './registration.style.scss'
import Logo from '../../assets/Logo.svg'
import Lock from '../../assets/Lock-icon.svg'
import Close from '../../assets/Close-icon.svg'
import Edit from '../../assets/edit-number.svg'
import SendAgain from '../../assets/Send-again.svg'
import {Fragment, useEffect, useState} from "react";
import StageBar from "../stageBar/stageBar.component";
import TelephoneCountryPicker from "../telephoneCountryPicker/telephoneCountryPicker.component";
import {useForm} from "react-hook-form";

const Registration = () => {
    const [stage, setStage] = useState(1)
    const [isNotificationHidden, setIsNotificationHidden] = useState(false)
    const [telephoneCode, setTelephoneCode] = useState('+1')
    const [telephoneNumber, setTelephoneNumber] = useState('--- --- ---')
    const [confirmationCode, setConfirmationCode] = useState('')
    const [loginData, setLoginData] = useState({})
    useEffect(() => {
        if(stage !== 1) {
            setIsNotificationHidden(true)
        }
    }, [stage])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onRegSubmit = (data) => {
        setLoginData(data)
    }
    const confirmConfirmationCode = () => {
        if(confirmationCode.split('').length === 4) {
            setStage(3)
        }
    }

    const onNotificationCloseButtonPress = () => {
        setIsNotificationHidden(true)
    }

    const onTelephoneInputChange = (e) => {
        setTelephoneNumber(e.target.value)
    }

    return (
        <div className='registration'>
            <div className='logo'>
                <img alt='Company logo' className='img' src={Logo}/>
                <p className='company-name'>
                    company name
                </p>
            </div>
            <div className='content'>
                <StageBar stage={stage}/>
                <div className='registration-form'>
                    <div className='title'>
                        <p className='title--large'>Registration</p>
                        <p className='title--small'>Fill in the registration data. It will take a couple of minutes.
                            All you need is a phone number and e-mail</p>
                    </div>
                    {!isNotificationHidden ?
                        <div className='notification'>
                            <img src={Lock} alt='Lock icon' className='lock-icon'/>
                            <p className='notification-text'>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                            <img className='close-icon' src={Close} alt='Close icon' onClick={onNotificationCloseButtonPress}/>
                        </div> : null}
                    {stage === 1 ?
                        <Fragment>
                            <div className='phone-number-enter-form'>
                                <p className='form-title'>Enter your phone number</p>
                                <div className='form-fields'>
                                    <TelephoneCountryPicker onCodeSelect={setTelephoneCode} selectedValue={telephoneCode} />
                                    <div>
                                        <input className='telephone-input' onChange={onTelephoneInputChange} placeholder={telephoneNumber}/>
                                        <div className='input-underline'/>
                                    </div>
                                </div>
                            </div>
                            <div className='confirm-button' onClick={() => {setStage(2)}}>
                            <p className='button-text'>
                                Send code
                            </p>
                        </div>
                        </Fragment>: null
                    }
                    {stage === 2 ?
                        <Fragment>
                            <div className='number-not-confirmed'>
                                <div className='content'>
                                    <p className='telephone'>
                                        {`${telephoneCode} ${telephoneNumber}`}
                                    </p>
                                    <p className='number-not-confirmed-yet'>
                                        Number not confirmed yet
                                    </p>
                                </div>
                                <img src={Edit} alt='Edit icon' onClick={() => {setStage(1)}}/>
                            </div>
                            <div className='confirmation-code'>
                                <div className='confirmation-code-field'>
                                    <p className='title'>
                                        Confirmation code
                                    </p>
                                    <div className='confirmation-code-field--input'>
                                        <input className='confirmation-code-input' onChange={(e) => {setConfirmationCode(e.target.value)}} placeholder='- - - -'/>
                                        <div className='code-field-underscore'/>
                                    </div>
                                    <p className='confirmation-code-field--footer'>
                                        Confirm phone number with code from sms message
                                    </p>
                                </div>
                                <div className='send-again-button'>
                                    <img className='send-again--image' alt='Send again button' src={SendAgain}/>
                                    <p className='send-again--text'>Send again</p>
                                </div>
                            </div>
                            <div className='confirm-button'>
                                <p className='button-text' onClick={confirmConfirmationCode}>
                                    Confirm
                                </p>
                            </div>
                        </Fragment> : null
                    }
                    {stage === 3 ?
                        <Fragment>
                            <div className='number-confirmed'>
                                <div className='content'>
                                    <p className='telephone'>
                                        {`${telephoneCode} ${telephoneNumber}`}
                                    </p>
                                    <p className='number-not-confirmed-yet'>
                                        Number confirmed
                                    </p>
                                </div>
                            </div>
                            <div className='email-password-form'>
                                <form onSubmit={handleSubmit(onRegSubmit)}>
                                    <div className='reg-input-form'>
                                        <p className='reg-input-form--title'>Enter your email</p>
                                        <div>
                                            <input className='email' {...register('email', {required: true})}/>
                                            <div className='reg-input--underscore'/>
                                        </div>
                                    </div>
                                    <div className='reg-input-form'>
                                        <p className='reg-input-form--title'>Set a password</p>
                                        <div>
                                            <input className='password' {...register('password', {required: true})} type='password'/>
                                            <div className='reg-input--underscore'/>
                                        </div>
                                    </div>
                                    <button type='submit' className='register-button' onClick={() => {handleSubmit(onRegSubmit)}}>
                                        <p className='register-button--text'>
                                            Register now
                                        </p>
                                    </button>
                                </form>
                            </div>
                        </Fragment> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Registration