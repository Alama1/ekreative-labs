import './education.styles.scss'

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="timeline-2">
                <div className="ellipse">
                    <div className="ellipse--fill"></div>
                </div>
                <div className="ellipse-2"></div>
                <div className="ellipse-3"></div>
                <div className="ellipse-4"></div>
                <img className="vector"/>
                <img className="vector-2"/>
                <img className="vector-3"/>
            </div>
            <div className="main-text">
                <p className="yearly-part">
                    Placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet est setera nunc
                    setera.
                </p>
                <p className="yearly-part">
                    Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing
                    vulputate
                    phaselluse enim aliquam euismod mauris in vitae.
                </p>
                <p className="yearly-part">
                    Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod lorem
                    ispum.
                </p>
                <p className="yearly-part">
                    Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat
                    maecenas turpis
                    metus sit.
                </p>
            </div>
            <div className="years">
                <div className="year">2022</div>
                <div className="year">2024</div>
                <div className="year">2026</div>
                <div className="year">2028</div>
            </div>
        </div>
    )
}

export default Timeline