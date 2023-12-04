import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './profileInfoModal.style.scss'
import logo from '../../../assets/Logo.svg'
import closeButton from '../../../assets/Close-button.svg'
import mail from '../../../assets/Mail.svg'
import phoneIcon from '../../../assets/phone-icon.svg'
import StageBar from "../../stageBar/stageBar.component";
import {useForm} from "react-hook-form";
import ComboBox from "../../telephoneCountryPicker/comboBox.component";
import SocialNetworkItem from "../../socialNetworkItem/socialNetworkItem.component";

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

function ProfileInfoModal({isOpen, setIsOpen, dataCollected, phoneNumber, email}) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const [stage, setStage] = useState(1)
    const [countriesList, setCountriesList] = useState({
        'Ukraine': ['placeholder', 'placeholder', 'placeholder']
    })
    const [selectedCountryOfBirth, setSelectedCountryOfBirth] = useState('Ukraine')
    const [selectedCityOfBirth, setSelectedCityOfBirth] = useState('Kyiv')
    const [userInfo, setUserInfo] = useState({})
    const [socialMediaArray, setSocialMediaArray] = useState([
        <SocialNetworkItem zIndex='2' onInputChange={(res)=> {addSocialMedia(res)}} selectedByDefault='Skype' smArray={['item1', 'item2', 'item3']}/>,
        <SocialNetworkItem zIndex='1' onInputChange={(res)=> {addSocialMedia(res)}} selectedByDefault='Facebook' smArray={['item1', 'item2', 'item3']}/>
    ])
    const [deliveryCountry, setDeliveryCountry] = useState('Ukraine')
    const [deliveryCity, setDeliveryCity] = useState('Kyiv')

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
        data['city-of-birth'] = selectedCityOfBirth
        data['country-of-birth'] = selectedCountryOfBirth
        setUserInfo(() => {
            return data
        })
        setStage(2)
    }

    const addSocialMedia = (e) => {
        setUserInfo((prevState) => {
            return Object.assign(prevState, e)
        })
    }

    const secondPageInfo = (data) => {
        setUserInfo(() => {
            return data
        })
        setStage(3)
    }

    const thirdPageInfo = (data) => {
        data['delivery-city'] = deliveryCity
        data['delivery-country'] = deliveryCountry
        const fullData = Object.assign(userInfo, data)
        dataCollected(fullData)
        setIsOpen(false)
    }

    const addMoreButtonHandler = () => {
        setSocialMediaArray((prevState) => {
            //TODO fix bug with overflow (z-index)
            return [...prevState, <SocialNetworkItem zIndex={'1'} onInputChange={(res)=> {addSocialMedia(res)}} selectedByDefault='New sm' smArray={['item1', 'item2', 'item3']}/>,
            ]
        })
    }

    return (
        <div className=''>
            <Modal
                isOpen={isOpen.isModalOpen}
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
                                    Fill in the data for profile. It will take a couple of minutes. <br/>You only need a
                                    passport
                                </p>
                            </div>
                            {stage === 1 ?
                                <form onSubmit={handleSubmit(firstPageInfo)} className='main-page-content'>
                                    <div className='agreement'>
                                        <input
                                            type='checkbox'
                                            {...register('hasAgreed', {required: true})}
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
                                                    <input
                                                        className='name-input' {...register('first-name', {required: true})}/>
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
                                                    <input
                                                        className='name-input' {...register('last-name', {required: true})}/>
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
                                                        <ComboBox zIndex='5' selectedValue='Ukraine'
                                                                  arrayOfChoices={Object.keys(countriesList)}
                                                                  onCodeSelect={(s) => {
                                                                      setSelectedCountryOfBirth(s)
                                                                  }}/>
                                                    </div>
                                                    <div className='city-select'>
                                                        <p>
                                                            Select city
                                                        </p>
                                                        <ComboBox zIndex='3' selectedValue='Kyiv'
                                                                  arrayOfChoices={countriesList[selectedCountryOfBirth]}
                                                                  onCodeSelect={(s) => {
                                                                      setSelectedCityOfBirth(s)
                                                                  }}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='itin'>
                                        <div className='itin-input--wrapper'>
                                            <input className='itin-input' {...register('itin', {required: true})}/>
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
                                </form> : null
                            }
                            {stage === 2 ?
                                <form onSubmit={handleSubmit(secondPageInfo)} className='main-page-content'>
                                    <div className='data-input'>
                                        <div className='data-input--header'>
                                            <div className='header--top'>
                                                Contacts
                                            </div>
                                            <div className='header--bottom'>
                                                These contacts are used to inform about orders
                                            </div>
                                        </div>
                                        <div className='data-input--name'>
                                            <div className='name--input'>
                                                <div className='input--wrapper'>
                                                    <img src={mail}/>
                                                    <input
                                                        defaultValue={email} className='name-input' {...register('contact-mail', {required: true})}/>
                                                </div>
                                                <div className='input--underscore'/>
                                            </div>
                                        </div>
                                        <div className='data-input--name'>
                                            <div className='name--input'>
                                                <div className='input--wrapper'>
                                                    <img src={phoneIcon}/>
                                                    <input
                                                        defaultValue={phoneNumber} className='name-input' {...register('contact-phone', {required: true})}/>
                                                </div>
                                                <div className='input--underscore'/>
                                            </div>
                                        </div>
                                        <div className='social-network'>
                                            <div className='social-network--header'>
                                                <div className='header--top'>
                                                    Social network
                                                </div>
                                                <div className='header--bottom'>
                                                    Indicate the desired communication method
                                                </div>
                                            </div>
                                            <div className='social-network--field'>
                                                {
                                                    socialMediaArray
                                                }
                                            </div>
                                            <div className='add-sm-button' onClick={addMoreButtonHandler}>
                                                <p className='button-text'>
                                                    + Add More
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='next-page-button'>
                                        <button type='submit' className='button--text'>
                                            Go next
                                        </button>
                                    </div>
                                </form> : null
                            }
                            {stage === 3 ?
                                <form onSubmit={handleSubmit(thirdPageInfo)} className='main-page-content'>
                                    <div className='data-input'>
                                        <div className='data-input--header'>
                                            <div className='header--top'>
                                                Delivery address
                                            </div>
                                            <div className='header--bottom'>
                                                Used for shipping orders
                                            </div>
                                        </div>
                                        <div className='delivery-input'>
                                            <div className='input-header'>
                                                Address
                                            </div>
                                            <div className='input-with-underscore'>
                                                <input className='input' {...register('delivery-address', {required: true})}/>
                                                <div className='underscore'/>
                                            </div>
                                        </div>
                                        <div className='delivery-input'>
                                            <div className='input-header'>
                                                City
                                            </div>
                                            <ComboBox zIndex='4' selectedValue='Kyiv'
                                                      arrayOfChoices={countriesList[deliveryCountry]}
                                                      onCodeSelect={(s) => {
                                                          setDeliveryCity(s)
                                                      }}/>
                                        </div>
                                        <div className='delivery-country-and-zip'>
                                            <div className='delivery-country-wrapper'>
                                                <div className='delivery-country--text'>
                                                    Country
                                                </div>
                                                <ComboBox zIndex='3' selectedValue='Ukraine'
                                                          arrayOfChoices={Object.keys(countriesList)}
                                                          onCodeSelect={(s) => {
                                                              setDeliveryCountry(s)
                                                          }}/>
                                            </div>
                                            <div className='delivery-country-wrapper'>
                                                <div className='delivery-country--text'>
                                                    Zip code
                                                </div>
                                                <div className='zip-code-input'>
                                                    <input style={{height: '36px'}} {...register('zip-code', {required: true})}/>
                                                    <div className='zip--underscore'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='delivery-input'>
                                            <div className='input-header'>
                                                Optional
                                            </div>
                                            <div className='input-with-underscore'>
                                                <input className='input' {...register('delivery-optional')}/>
                                                <div className='underscore'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='next-page-button'>
                                        <button type='submit' className='button--text'>
                                            Save
                                        </button>
                                    </div>
                                </form> : null
                            }
                        </div>
                    </div>
                    <div className='close-button'>
                        <img alt='Close button' src={closeButton} onClick={() => {
                            setIsOpen(false)
                        }}/>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProfileInfoModal
