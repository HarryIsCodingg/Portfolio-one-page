import './HomePage.css';
import LandingImage from '../../assets/images/avatar.png';

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='landing-page-wrapper'>
                <div className='short-description'>
                    <h3 className='short-description-text'>
                        <span className='primary-color'>Founder, lead developer</span> of HomeEatz
                    </h3>
                    <span className='short-description-sub'>
                        I crafts responsive websites where technologies meet creativity
                    </span>
                    <a href='#contacts' className='contact-button link'>Contact me !</a>
                </div>
                <div className='right-column'>
                    <img src={LandingImage} alt="landing" className="responsive-image" />
                    <div className='working-row'><span className='working-icon'></span>
                        <span className='grey-color'>Currently working on </span>my startup Homeeatz
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
