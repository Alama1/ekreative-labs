import './menu.styles.scss'
import group from '../../assets/group.png'

const Menu = () => {
    return(
        <div className="menu">
            <div className="LINKEDIN-TWITTER">
                <a href="https://linkedin.com">LINKEDIN</a>
                <a href="https://twitter.com/">TWITTER</a>
                <a href="https://www.instagram.com/">INSTAGRAM</a>
                <a href="https://www.facebook.com/">FACEBOOK</a>
            </div>
            <div className="text-wrapper-36">JOHN DOE</div>
            <img className="group-2" src={group}/>
        </div>
    )
}

export default Menu