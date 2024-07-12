import logo from '../assets/images/logo2.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className='footer-links'>
                    <div className="footer-item">
                        <h5>Features</h5>
                        <a href="#">Link Shortening</a>
                        <a href="#">Branded Links</a>
                        <a href="#">Analytics</a>
                    </div>
                    
                    <div className="footer-item">
                        <h5>Resources</h5>
                        <a href="#">Blog</a>
                        <a href="#">Developers</a>
                        <a href="#">Support</a>
                    </div>

                    <div className="footer-item">
                        <h5>Company</h5>
                        <a href="#">About</a>
                        <a href="#">Our Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <div className="social-icons">
                    <a id='facebook' href="#">
                        <img src={facebookIcon} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                    <a href="#">
                        <img src={pinterestIcon} alt="pinterest" />
                    </a>
                    <a href="#">
                        <img src={instagramIcon} alt="instagram" />
                    </a>
                </div>
            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.frontendmentor.io/profile/halelite">Hale</a>.
            </div>
        </div>
    )
}

export default Footer