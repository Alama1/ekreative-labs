import './education.styles.scss'
import Timeline from './timeline.component'

const Education = () => {
    return (
        <div className="education">
            <div className="main-div">
                <div className="education-title">Education</div>
                <p className="main-text">
                  <span className="main-text--bald">
                      Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur
                      quisque
                  </span>
                    <span className="main-text--thin">
                      <br/>Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam
                    consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat
                    adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
                    </span>
                </p>
            </div>
            <Timeline/>
        </div>
    )
}

export default Education