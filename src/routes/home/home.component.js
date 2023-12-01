import './home.scss'
import Hero from "../../components/hero/hero.component";
import About from "../../components/about/about.component";
import Experience from "../../components/experience/experience.component";
import Services from "../../components/services/services.component";
import Portfolio from "../../components/portfolio/portfolio.component";
import Education from "../../components/education/education.component";
import Skills from "../../components/skills/skills.component";
import CoverLetter from "../../components/cover-letter/cover-letter.component";
import Overlap from "../../components/overlap/overlap.component";
import Footer from "../../components/footer/footer.component";
import Menu from "../../components/menu/menu.component";
import Navigation from "../../components/navigation/navigation.component";

const Home = () => {
    return (
        <div className='home'>
            <div className='page'>
                <Hero/>
                <About/>
                <Experience/>
                <Services/>
                <Portfolio/>
                <Education/>
                <Skills/>
                <CoverLetter/>
                <Overlap/>
                <Footer/>
                <Menu/>
                <Navigation/>
            </div>
        </div>
    )
}

export default Home