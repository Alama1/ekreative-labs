import './portfolio.styles.scss'

import image1 from '../../assets/rectangle-268.png'
import image2 from '../../assets/rectangle-269.png'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-title-wrapper">
                <div className="portfolio-title">Portfolio</div>
            </div>
            <div className="main-section">
                <div className="images">
                    <img className="image" src={image1}/>
                    <img className="image" src={image2}/>
                </div>
                <p className="skills-wrapper">
                    <span className="skill-number">01</span>
                    <span className="skill-text">Fashion</span>
                </p>
                <p className="skills-wrapper">
                    <span className="skill-number">02</span>
                    <span className="skill-text">Art</span>
                </p>
                <p className="skills-wrapper">
                    <span className="skill-number">03</span>
                    <span className="skill-text">Design</span>
                </p>
                <p className="skills-wrapper">
                    <span className="skill-number">04</span>
                    <span className="skill-text">Styling</span>
                </p>
            </div>
        </div>
    )
}

export default Portfolio