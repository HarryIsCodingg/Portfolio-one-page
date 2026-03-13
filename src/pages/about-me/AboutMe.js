import './AboutMe.css';
import aboutImage from '../../assets/images/about.png';
import SkillList from "./skills/SkillList";
import designImage from '../../assets/images/design.png';
import deanList from '../../assets/images/deanlist.png';
import awsCloudDevCert from '../../assets/images/aws-certified-developer-associate.png';
import awsCloudPractCert from '../../assets/images/aws-certified-cloud-practitioner.png';
import frenchCert from '../../assets/images/french.png';
import ExperienceList from "./work-experience-list/ExperienceList";

const AboutMe = () => {

    const awsDevCertLink = 'https://www.credly.com/badges/300cd8d3-3e6e-432c-9e73-20ff8ff9485c';
    const awsPractCertLink = 'https://www.credly.com/badges/a4c7f00d-45fe-49c8-b328-73f8d9c76632';
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
            <ExperienceList />
            <div className='font-size-large margin-top'><span className='primary-color'>#</span>skills</div>
            <SkillList />
            <div className='achievement-container'>
              <div className='title-wrapper'>
                <div className='font-size-large margin-top'><span className='primary-color'>#</span>certificates</div>
                <img src={designImage} alt='design' className='design-image'/>
              </div>
              <div className='images-container'>
                <div className='aws-image-wrapper'>
                  <img src={awsCloudDevCert} className='aws-image' alt='certificate'/>
                  <a className='aws-link-button' href={awsDevCertLink} target='_blank'>View Credentials</a>
                </div>
                <div className='aws-image-wrapper'>
                  <img src={awsCloudPractCert} className='aws-image' alt='certificate'/>
                  <a className='aws-link-button' href={awsPractCertLink} target='_blank'>View Credentials</a>
                </div>
                <img src={deanList} className='certificate-image' alt='certificate'/>
                <img src={frenchCert} alt='french certificate' className='french-certificate'/>
              </div>
            </div>
        </div>
    )
}

export default AboutMe;
