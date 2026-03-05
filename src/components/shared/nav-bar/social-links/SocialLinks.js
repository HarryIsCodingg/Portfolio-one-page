import './SocialLinks.css';
import { Icon } from '@iconify/react';

const SocialLinks = () => {
    return (
        <>
            <a href='https://linkedin.com/in/harinder-partap-singh-007a82198' target='_blank' rel='noreferrer'>
                <Icon icon='line-md:linkedin' fontSize={28} className='social-link'/>
            </a>
            <a href='https://github.com/HarryIsCodingg' target='_blank' rel='noreferrer'>
                <Icon icon='line-md:github-loop' fontSize={28} color='white' className='social-link'/>
            </a>
        </>
    )
}

export default SocialLinks;
