import './Startup.css';
import startupImage from '../../assets/images/startup.svg';
import {Icon} from "@iconify/react";

const Startup = () => {

    return (
        <div className='startup-wrapper'>
            <div className='font-size-large margin-top'><span className='primary-color'>/</span>startup</div>
            <div className='margin-top'>
                <span className='primary-color'>Founded, developed</span> minimal viable product for <a href='https://www.homeeatz.com/' className='homeeatz-link' target='_blank' rel='noreferrer'>HomeEatz</a>, a centralized platform which connects
                home-based chefs with potential customers.
            </div>
            <a href='https://www.homeeatz.com/' className='link nav-link' target='_blank' rel='noreferrer'>
                <img src={startupImage} alt='startup' className='startup-image margin-top'/>
            </a>
            <div className='explore-button-wrapper'>
                <a href='https://www.homeeatz.com/' className='card-button startup-button link' target='_blank' rel='noreferrer'>Explore HomeEatz
                    <Icon icon='streamline:interface-arrows-horizonal-scroll-point-move-scroll-horizonal' fontSize={24}/>
                </a>
            </div>
        </div>
    )
}

export default Startup;
