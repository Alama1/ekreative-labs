import './footer.styles.scss'
import BE from '../../assets/BE.svg'
import FB from '../../assets/FB.svg'
import X from '../../assets/X.svg'
import YT from '../../assets/YT.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="icons">
                    <a href='https://www.behance.net/'><img src={BE} className="sm-icon"/></a>
                    <a href='https://www.facebook.com/'><img src={FB} className="sm-icon"/></a>
                    <a href='https://twitter.com/'><img src={X} className="sm-icon"/></a>
                    <a href='https://www.youtube.com/'><img src={YT} className="sm-icon"/></a>
                </div>
                <div className="text">
                    © Carlo CIccarelli 2022.
                </div>
            </div>
        </div>
    );
}

export default Footer