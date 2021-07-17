import '../styles/projects.css';
import {Link, withRouter} from 'react-router-dom';
import devmountain from '../images/devmountain.png';
import omadi from '../images/omadi.png';
import ezworkpc from '../images/Cheese.png';
import crandall from '../images/crandall.png';
import twitch from '../images/twitch.png';
let Scroll   = require('react-scroll');
let Element  = Scroll.Element;
let scroller = Scroll.scroller;

let Projects = () => {
    const executeScroll = (name) => {
        scroller.scrollTo(name, {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: 0,
        })
    };
    return (
        <div className='projects'>
            Coming Soon
            <Link to='/'>Back</Link>
            <div className='scroll-to-container'>
                <button name='Alder' onClick={(e) => executeScroll('wizard')}><i className="fas fa-hat-wizard"></i><span>Alder</span></button>
                <button name='DevMountain' onClick={(e) => executeScroll('devmountain')}><img src={devmountain} alt='DevMountain'/><span>DevMountain</span></button>
                <button name='Omadi' onClick={(e) => executeScroll('omadi')}><img src={omadi} alt='Omadi'/><span>Omadi</span></button>
                <button name='ezworkpc' onClick={(e) => executeScroll('ezworkpc')}><img src={ezworkpc} alt='ezworkpc'/><span>ezworkpc</span></button>
                <button name='Crandall' onClick={(e) => executeScroll('reciperequest')}><img src={crandall} alt='Crandall'/><span>Crandall</span></button>
                <button name='Twitch' onClick={(e) => executeScroll('twitchbot')}><img src={twitch} alt='Twitch'/><span>Twitch</span></button>
            </div>
            <Element name='wizard' className='project'>
                <h3>Title</h3>
                <p>Technologies Used</p>
                <p>Link or "Not Hosted"</p>
                <div className='project-container'>
                    
                </div>
            </Element>
            <Element name='devmountain' className='project'>
                <h3>Title</h3>
                <p>Technologies Used</p>
                <p>Link or "Not Hosted"</p>
                <div className='project-container'>
                    
                </div>
            </Element>
            <Element name='omadi' className='project'>
                <h3>Title</h3>
                <p>Technologies Used</p>
                <p>Link or "Not Hosted"</p>
                <div className='project-container'>
                    
                </div>
            </Element>
            <Element name='ezworkpc' className='project'>
                <h3>Title</h3>
                <p>Technologies Used</p>
                <p>Link or "Not Hosted"</p>
                <div className='project-container'>
                    
                </div>
            </Element>
            <Element name='reciperequest' className='project'>
                <h3>Title</h3>
                <p>Technologies Used</p>
                <p>Link or "Not Hosted"</p>
                <div className='project-container'>
                    
                </div>
            </Element>
            <Element name='twitchbot' className='project'>
                <h3>Title</h3>
                <p>Technologies Used</p>
                <p>Link or "Not Hosted"</p>
                <div className='project-container'>
                    
                </div>
            </Element>
        </div>
    )
}

export default withRouter(Projects);