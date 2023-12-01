import './navigation.styles.scss'
import {Fragment, useState} from "react";
import About from '../modals/about/about.component'
import Education from '../modals/education/education.component'

const Navigation = () => {
    const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false)
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false)

    return (
        <Fragment>
            <div className="navigation-menu">
                <div className="nav-items">
                    <p onClick={() => setIsAboutMeModalOpen(true)}>About me</p>
                    <p onClick={() => setIsEducationModalOpen(true)}>Education</p>
                </div>
            </div>
            {isAboutMeModalOpen && <About setIsOpen={setIsAboutMeModalOpen} />}
            {isEducationModalOpen && <Education setIsOpen={setIsEducationModalOpen} />}
        </Fragment>
    )
}

export default Navigation