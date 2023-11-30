import './education.styles.scss'

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="timeline-2">
                <div className="overlap-group">
                    <div className="ellipse"></div>
                </div>
                <div className="ellipse-2"></div>
                <div className="ellipse-3"></div>
                <div className="ellipse-4"></div>
                <img className="vector"/>
                <img className="vector-2"/>
                <img className="vector-3"/>
            </div>
            <div className="timeline-text">
                <p className="p">
                    Placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet est setera nunc
                    setera.
                </p>
                <p className="text-wrapper-10">
                    Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing
                    vulputate
                    phaselluse enim aliquam euismod mauris in vitae.
                </p>
                <p className="text-wrapper-10">
                    Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod lorem
                    ispum.
                </p>
                <p className="text-wrapper-10">
                    Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat
                    maecenas turpis
                    metus sit.
                </p>
            </div>
            <div className="years">
                <div className="text-wrapper-11">2022</div>
                <div className="text-wrapper-11">2024</div>
                <div className="text-wrapper-11">2026</div>
                <div className="text-wrapper-11">2028</div>
            </div>
        </div>
    )
}

export default Timeline