import './stageBar.style.scss'
import activeIndicator from '../../assets/Active-indicator.svg'
import defaultIndicator from '../../assets/Default-indicator.svg'
import {Fragment} from "react";


const StageBar = ({ stage }) => {
    const addActiveIndicator = () => {
        return (
            <Fragment>
                <div className='active-line'/>
                <img src={activeIndicator} alt='Active indicator'/>
            </Fragment>
        )
    }
    const addDefaultIndicator = () => {
        return (
            <Fragment>
                <div className='default-line'/>
                <img src={defaultIndicator} alt='Default indicator'/>
            </Fragment>
        )
    }

    const drawStage = () => {
        if (stage === 1) {
            return (
                <Fragment>
                    {addDefaultIndicator()}
                    {addDefaultIndicator()}
                </Fragment>
            )
        }
        if (stage === 2) {
            return (
                <Fragment>
                    {addActiveIndicator()}
                    {addDefaultIndicator()}
                </Fragment>
            )
        }
        if (stage === 3) {
            return (
                <Fragment>
                    {addActiveIndicator()}
                    {addActiveIndicator()}
                </Fragment>
            )
        }
    }

    return(
        <div className='stage-bar'>
            <img src={activeIndicator} alt='Active indicator'/>
            {drawStage()}
        </div>
    )
}

export default StageBar