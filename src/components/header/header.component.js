import './header.style.scss'

const Header = () => {
    return(
        <div className='header'>
            <a className='logo'>
                MY SUPER COLORS
            </a>
            <div className='header-menu'>
                <a className='header-menu--author'>About author</a>
                <a className='header-menu--subscribe'>Subscribe</a>
            </div>
        </div>
    )
}

export default Header