import reconitionIcon from '../assets/images/icon-brand-recognition.svg';
import customizeIcon from '../assets/images/icon-fully-customizable.svg';
import recordIcon from '../assets/images/icon-detailed-records.svg';

function Statistics() {
    return (
        <div className='pros'>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>

            <div className="statistics">
                <div className="line-beneath"></div>
                <div className='items brand-recognition'>
                    <div className='icon'>
                        <img src={reconitionIcon} alt="brand recognition" />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='items detailed-records'>
                    <div className='icon'>
                        <img src={recordIcon} alt="detailed-records" />
                    </div>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>
                </div>
                <div className='items customizable'>
                    <div className='icon'>
                        <img src={customizeIcon} alt="customizable" />
                    </div>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>
                </div>

            </div>
        </div>
    )
}

export default Statistics