import './about.styles.scss'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">About</div>
            <div className="rectangle"></div>
            <p className="main-text">
                <span className="main-text--bald">
                    Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque<br/>
                </span>
                <span className="main-text--thin">
                  Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat
                  maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing
                  vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
                </span>
            </p>
        </div>
    )
}

export default About