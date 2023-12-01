import heroImg from '../../assets/unsplash-bxq8pvfp-fy.png'
import './hero.styles.scss'
import CV from './cv.docx'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <div className="hero-title">Hello<br/>I’m not John Doe</div>
                <p className="main-text">
                    <span className="main-text--thin">A full stack allaround designer that tristique est placerat in massa</span>
                    <span className="main-text--bald"> consectetur quisque </span>
                    <span className="main-text--thin">lobortis Vitae faucibus diam consequat maecenas turpis.</span>
                </p>
            </div>
            <button className="button-wrapper"/>
            <a
                href={CV}
                download="Not John Doe's CV"
                target="_blank"
                rel="noreferrer"
                className='button-wrapper'
            >
                <button type="submit" className="download-cv--button">
                    DOWNLOAD CV
                </button>
            </a>
            <img className="hero-image" src={heroImg} alt='Image of me' />
        </div>
    )
}

export default Hero