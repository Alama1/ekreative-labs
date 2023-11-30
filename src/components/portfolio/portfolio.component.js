import './portfolio.styles.scss'

import image1 from '../../assets/rectangle-268.png'
import image2 from '../../assets/rectangle-269.png'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-2">
                <div className="text-wrapper-33">Portfolio</div>
            </div>
            <div className="accordions">
                <div className="images">
                    <img className="rectangle-15" src={image1}/>
                    <img className="rectangle-15" src={image2}/>
                </div>
                <p className="div-3">
                    <span className="text-wrapper-34">01</span>
                    <span className="text-wrapper-35">Fashion</span>
                </p>
                <p className="div-3">
                    <span className="text-wrapper-34">02</span>
                    <span className="text-wrapper-35">Art</span>
                </p>
                <p className="div-3">
                    <span className="text-wrapper-34">03</span>
                    <span className="text-wrapper-35">Design</span>
                </p>
                <p className="div-3">
                    <span className="text-wrapper-34">04</span>
                    <span className="text-wrapper-35">Styling</span>
                </p>
            </div>
        </div>
    )
}

export default Portfolio