import heroImg from '../../assets/unsplash-bxq8pvfp-fy.png'
import './hero.styles.scss'
import CV from './cv.docx'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <div className="hello-i-m-john-doe">Hello<br/>I’m not John Doe</div>
                <p className="a-full-stack">
                    <span className="text-wrapper-37">A full stack allaround designer that tristique est placerat in massa</span>
                    <span className="text-wrapper-38">consectetur quisque</span>
                    <span className="text-wrapper-37">lobortis Vitae faucibus diam consequat maecenas turpis.</span>
                </p>
            </div>
            <button className="div-wrapper"/>
            <a
                href={CV}
                download="Not John Doe's CV"
                target="_blank"
                rel="noreferrer"
                className='div-wrapper'
            >
                <button type="submit" className="download_cv-button">
                    DOWNLOAD CV
                </button>
            </a>
            <img className="hero-image" src={heroImg} alt='Image of me' />
        </div>
    )
}

export default Hero