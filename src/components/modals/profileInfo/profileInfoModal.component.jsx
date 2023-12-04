import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './profileInfoModal.style.scss'
import logo from '../../../assets/Logo.svg'
import closeButton from '../../../assets/Close-button.svg'
import StageBar from "../../stageBar/stageBar.component";
import {useForm} from "react-hook-form";
import ComboBox from "../../telephoneCountryPicker/comboBox.component";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '90%',
        height: '90%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function ProfileInfoModal({ isOpen, setIsOpen, dataCollected }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [stage, setStage] = useState(1)
    const [countriesList, setCountriesList] = useState({
        'Ukraine': ['placeholder', 'placeholder', 'placeholder']
    })
    const [selectedCountryOfBirth, setSelectedCountryOfBirth] = useState('Ukraine')
    const [selectedCityOfBirth, setSelectedCityOfBirth] = useState('')

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries').then((res) => {
            res.json().then((res) => {
                let countriesObject = {}
                res.data.forEach((country) => {
                    countriesObject[country.country] = country.cities
                })
                setCountriesList(countriesObject)
            })
        })
    }, [])

    const firstPageInfo = (data) => {
        console.log(data)
    }
    return (
        <div className=''>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                contentLabel="Modal"
            >
                <div className='profile-info'>
                    <div className='logo'>
                        <img className='logo--image' alt='Logo' src={logo}/>
                        <p className='logo--text'>company name</p>
                    </div>
                    <div className='main-page'>
                        <StageBar stage={stage}/>
                        <div className='main-page-content'>
                            <div className='header'>
                                <p className='header--top'>
                                    Profile info
                                </p>
                                <p className='header--bottom'>
                                    Fill in the data for profile. It will take a couple of minutes. <br/>You only need a passport
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(firstPageInfo)} className='main-page-content'>
                                <div className='agreement'>
                                    <input
                                        type='checkbox'
                                        {...register('hasAgreed', {required:true})}
                                        className='agreement--check-box'
                                    />
                                    <p className='agreement--text'>
                                        I agree with
                                    </p>
                                    <a className='agreement--link'>
                                        Terms of use
                                    </a>
                                </div>
                                <div className='data-input'>
                                    <div className='data-input--header'>
                                        <p className='header--top'>
                                            Personal data
                                        </p>
                                        <p className='header--bottom'>
                                            Specify exactly as in your passport
                                        </p>
                                    </div>
                                    <div className='data-input--name'>
                                        <p className='name--text'>
                                            First name
                                        </p>
                                        <div className='name--input'>
                                            <div className='input--wrapper'>
                                                <input className='name-input' {...register('first-name', { required: true})}/>
                                            </div>
                                            <div className='input--underscore'/>
                                        </div>
                                    </div>
                                    <div className='data-input--name'>
                                        <p className='name--text'>
                                            Second name
                                        </p>
                                        <div className='name--input'>
                                            <div className='input--wrapper'>
                                                <input className='name-input' {...register('last-name', { required: true})}/>
                                            </div>
                                            <div className='input--underscore'/>
                                        </div>
                                    </div>
                                    <div className='date-and-lace-of-birth'>
                                        <div className='date-of-birth'>
                                            <p className='date-of-birth--text'>
                                                Date of birth
                                            </p>
                                            <input type="date" {...register('date-of-birth', {required: true})}/>
                                        </div>
                                        <div className='place-of-birth'>
                                            <p className='place-of-birth--text'>
                                                Place of birth
                                            </p>
                                            <div className='city-and-country'>
                                                <div className='country-select'>
                                                    <p>
                                                        Select country
                                                    </p>
                                                    <ComboBox style={{width: '16rem'}} selectedValue='Ukraine' arrayOfChoices={Object.keys(countriesList)} onCodeSelect={(s) => {setSelectedCountryOfBirth(s)}}/>
                                                </div>
                                                <div className='city-select'>
                                                    <p>
                                                        Select city
                                                    </p>
                                                    <ComboBox style={{width: '16rem'}} selectedValue='Kyiv' arrayOfChoices={countriesList[selectedCountryOfBirth]} onCodeSelect={(s) => {setSelectedCityOfBirth(s)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='itin'>
                                    <div className='itin-input--wrapper'>
                                        <input className='itin-input' {...register('itin', { required: true})}/>
                                    </div>
                                    <div className='itin--underscore'/>
                                    <p className='itin--text'>
                                        Your ITIN
                                    </p>
                                </div>
                                <div className='next-page-button'>
                                    <button type='submit' className='button--text'>
                                        Go next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='close-button'>
                        <img alt='Close button' src={closeButton} onClick={() => {setIsOpen(false)}}/>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProfileInfoModal
