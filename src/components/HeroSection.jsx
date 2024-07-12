import heroImg from '../assets/images/illustration-working.svg';

function HeroSection() {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>More than just shorter links</h1>

                <p>Build your brand’s recognition and get detailed insights 
                on how your links are performing.</p>

                <button className="start-btn">Get Started</button>
            </div>
            <img src={heroImg} alt="hero" />
        </div>
    )
}

export default HeroSection