import './menu.styles.scss'
import group from '../../assets/group.png'

const Menu = () => {
    return(
        <div className="menu">
            <div className="social-media">
                <a href="https://linkedin.com">LINKEDIN</a>
                <a href="https://twitter.com/">TWITTER</a>
                <a href="https://www.instagram.com/">INSTAGRAM</a>
                <a href="https://www.facebook.com/">FACEBOOK</a>
            </div>
            <div className="menu-text">JOHN DOE</div>
            <img className="menu-icon" src={group}/>
        </div>
    )
}

export default Menu