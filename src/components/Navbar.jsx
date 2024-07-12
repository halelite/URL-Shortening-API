import logo from '../assets/images/logo.svg';
import menu from "../assets/images/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { useEffect, useRef, useState } from 'react';

function Navbar() {

    const [menuActive, setMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);
    const ref = useRef();

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 376) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        })
    });

    useEffect(() => {
        if(isMobile) {
            if(menuActive) {
                ref.current.style.display = 'flex';
            } else {
                ref.current.style.display = 'none';
            }
        } else {
            ref.current.style.display = 'flex';
        }
    }, [menuActive]);

    return (
        <div className='nav'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div ref={ref} className='options'>
                <ul className='pages'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>

                <div className='sign-in-up'>
                    <div className="login">Login</div>
                    <div className="sign-up">Sign Up</div>
                </div>
            </div>
            <img onClick={() => setMenuActive(curr => !curr)} className="menu" src={menu} alt="manu" />
        </div>
    )
}

export default Navbar