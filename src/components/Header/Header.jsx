import './header.scss';

import Logo from "../../assets/Images/logo.png";
import Swimming from "../../assets/Images/swimming.png"
import Meditate from "../../assets/Images/meditate.png"
import Dumbbells from "../../assets/Images/dumbbells.png"
import Cycling from "../../assets/Images/cycling.png"

/**
 * Header (navbars) of the application
 * @returns Header.jsx
 */
function Header() {
    return (
        <div>
            <nav className='topNav'>
                <ul className='topNav__list'>
                    <li><img className='topNav__list--img' src={Logo} alt="Logo" /></li>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
            <nav className='sideNav'>
                <ul className='sideNav__list'>
                    <li><img className='sideNav__list--img' src={Meditate} alt="meditate" /></li>
                    <li><img className='sideNav__list--img' src={Swimming} alt="swimming" /></li>
                    <li><img className='sideNav__list--img' src={Cycling} alt="cycling" /></li>
                    <li><img className='sideNav__list--img' src={Dumbbells} alt="dumbbells" /></li>
                </ul>
                <p className='sideNav__list--text'>Copyright, SportSee 2020</p>
            </nav>
        </div>
    )
}

export default Header