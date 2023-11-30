import './education.styles.scss'
import Timeline from './timeline.component'

const Education = () => {
    return (
        <div className="education">
            <div className="div-2">
                <div className="text-wrapper">Education</div>
                <p className="dolor-sit-amet">
                  <span className="text-wrapper-8">
                      Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur
                      quisque
                  </span>
                    <span className="text-wrapper-9">
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