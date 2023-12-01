import './footer.styles.scss'
import {Outlet} from "react-router-dom";
import {Fragment} from "react";
import Navigation from "../navigation/navigation.component";

const Footer = () => {
    return (
        <Fragment>
            <Navigation/>
            <div className='nav-margin'>
                <Outlet/>
                <div className='footer'>I'm a footer</div>
            </div>
        </Fragment>
    )
}

export default Footer