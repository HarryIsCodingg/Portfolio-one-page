import './AboutMe.css';
import aboutImage from '../../assets/images/about.png';
import SkillList from "./skills/SkillList";
import designImage from '../../assets/images/design.png';
import deanList from '../../assets/images/deanlist.png';
import frenchCert from '../../assets/images/french.png';
import awsDev from '../../assets/images/AWS-dev.png';
import awsCPC from '../../assets/images/AWS-cpc.png';

const AboutMe = () => {
    return (
        <div className='about-me-wrapper'>
            <div className='font-size-large margin-top'><span className='primary-color'>/</span>about me</div>
            <div className='margin-top who-text'>Who am I?</div>
            <div className='about-me-description-wrapper'>
                <div className='description-text grey-color'>
                    <div>
                        Hello, I’m <span className='white-text'>Harinder Partap Singh</span>!
                    </div>
                    I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    <div>Transforming my creativity and knowledge into a websites has been my passion for over a year.
                        I always strive to learn about the newest technologies and frameworks.
                    </div>
                </div>
                <img src={aboutImage} alt='about' className='about-image'/>
            </div>
            <div className='font-size-large margin-top'><span className='primary-color'>#</span>skills</div>
            <SkillList />
            <div className='achievement-container'>
                <div className='title-wrapper'>
                    <div className='font-size-large margin-top'><span className='primary-color'>#</span>achievements</div>
                    <img src={designImage} alt='design' className='design-image'/>
                </div>
              <div className='images-container'>
                <img src={awsDev} className='certificate-image' alt='certificate'/>
                <img src={awsCPC} className='certificate-image' alt='certificate'/>
                <img src={deanList} className='certificate-image' alt='certificate'/>
                <img src={frenchCert} alt='french certificate' className='french-certificate'/>
              </div>
            </div>
        </div>
    )
}

export default AboutMe;
