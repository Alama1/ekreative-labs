import "./about.styles.scss";
import React, {Fragment} from "react";

const About = ({ setIsOpen }) => {
    return (
        <Fragment>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered-about'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h5 className='heading'>About me modal</h5>
                    </div>
                    <div className='modalContent'>
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
                </div>
            </div>
        </Fragment>
    );
};

export default About;