import '../styles/projects.css';
import {Link, withRouter} from 'react-router-dom';
import devmountain from '../images/devmountain.png';
import omadi from '../images/omadi.png';
import ezworkpc from '../images/Cheese.png';
import crandall from '../images/crandall.png';
import twitch from '../images/twitch.png';


import Iframe from 'react-iframe';



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

    const toggleDetails = i => {
        let detail = document.getElementsByClassName('project-description')[i];
        if(detail.style.display === 'none'){
            detail.style.display = 'flex';
            setTimeout(() => {
                detail.style.opacity = '1';
            }, 100)
        } else {
            detail.style.opacity = '0';
            setTimeout(() => {
                detail.style.display = 'none';
            }, 500)

        }
    }

    return (
        <div className='projects'>
            <Link to='/'>Back</Link>
            <div className='scroll-to-container'>
                <button name='Alder' onClick={(e) => executeScroll('wizard')}><i className="fas fa-hat-wizard"></i><span>Alder</span></button>
                <button name='DevMountain' onClick={(e) => executeScroll('devmountain')}><img src={devmountain} alt='DevMountain'/><span>DevMountain</span></button>
                <button name='Omadi' onClick={(e) => executeScroll('omadi')}><img src={omadi} alt='Omadi'/><span>Omadi</span></button>
                <button name='ezworkpc' onClick={(e) => executeScroll('ezworkpc')}><img src={ezworkpc} alt='ezworkpc'/><span>ezworkpc</span></button>
                <button name='Crandall' onClick={(e) => executeScroll('reciperequest')}><img src={crandall} alt='Crandall'/><span>Crandall</span></button>
                <button name='Twitch' onClick={(e) => executeScroll('twitchbot')}><img src={twitch} alt='Twitch'/><span>Twitch</span></button>
            </div>
            <Element className='project'>
                <div className='project-container'>
                    <div className='project-description'>
                    <h3>You've found my projects</h3>
                        <p>I've added a few of the projects I have done recently. Some of the projects you can play with on the page and others don't have much other than a description, mostly because they wouldn't work on their own.</p>
                        <p>For the best experience, I suggest using a computer.</p>
                        <p>You can quickly navigate with the navigation buttons on the left side (for desktop) or on top (for mobile)</p>
                    </div>
                </div>
            </Element>
            <Element name='wizard' className='project'>
                <div className='project-info'>
                    <h3>Troubleshooting Wizard</h3>
                    <div>
                        <span data-html>HTML</span>
                        <span data-css>CSS</span>
                        <span data-javascript>Javascript</span>
                    </div>
                    <p>Created: 2019</p>
                    <p className='project-status'>Status: Hosted on company wiki for employee use</p>
                </div>
                <div className='project-container'>
                    <span onClick={(e) => {
                            e.preventDefault()
                            toggleDetails(1)
                            e.target.innerText === "Show Project" ? e.target.innerText = "Show Details" : e.target.innerText = "Show Project";
                        }}>Show Project</span>
                    <div className='project-description'>
                        <h3>Troubleshooting Wizard</h3>
                        <p>The Troubleshooting Wizard is a tool I created to help tech support agents troubleshoot malfunctioning alarm system equipment fast. I made the Troubleshooting Wizard while working as a tech support Supervisor for Alder Home Security. Troubleshooting documentation was scarce, and being on the phone with an upset customer trying to figure out how to fix their issue can be stressful, so a few co-workers and I decided to create a troubleshooting guide. I had been teaching myself web development after being inspired from a small online course for Python. At the time, I learned that we would be significantly expanding our call center. We needed a quick way to bring new agents up to speed. I wanted to test the things I had been learning by creating a quick way to find documentation . The Troubleshooting Wizard is still being used today by tech support agents at Alder.</p>
                        <br></br>
                        <p>I had to use any resources I could find to produce the Troubleshooting Wizard. Images were very helpful in the troubleshooting process, and many times I would take pictures of the alarm equipment and adjust the image to meet my needs.</p>
                        <br></br>
                        <p>The snippet of the project I included walks you through clearing a tamper alert on a sensor. Agents will select the appropriate sensor and follow the given steps.</p>
                    </div>
                    <Iframe src="http://localhost:3000/projectFiles/troubleshootingWizard.html"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="wizard"
                        display="initial"
                        position="relative"
                        onClick={(e) => console.log(e)}/>
                </div>
            </Element>
            <Element name='devmountain' className='project'>
                <div className='project-info'>
                        <h3>Nutrification</h3>
                        <div>
                            <span data-html>HTML</span>
                            <span data-css>CSS</span>
                            <span data-javascript>Javascript</span>
                            <span data-react>React</span>
                            <span data-node>Node.js</span>
                            <span data-redux>Redux</span>
                            <span data-postgresql>PostgreSQL</span>
                        </div>
                        <p>Created: 2019-2020</p>
                        <p className='project-status'>Status: Not Hosted</p>
                    </div>
                    <div className='project-container'>
                        <span onClick={(e) => {
                                e.preventDefault()
                                toggleDetails(2)
                                e.target.innerText === "Show Project" ? e.target.innerText = "Show Details" : e.target.innerText = "Show Project";
                            }}>Show Project</span>
                        <div className='project-description'>
                            <h3>Nutrification</h3>
                            <p>Nutrification was my final project for graduation at DevMountain. DevMountain was a 13-week coding bootcamp where we learned React, Node, PostgreSQL, and more. I was in a cohort of about 25 other students. At the end of our time at DevMountain we presented our final projects and then our instructors would award projects that were the most technical, had the best UI, best overall, and more. My project won best overall in my cohort.</p>
                            <p>Nutrification was a program that would take your weight, height, activity level, age, and gender to calculate your recommended daily intake for calories, protein, carbs, fat, and water. Unfortunately, Nutrification is no longer hosted.</p>
                        </div>
                        <Iframe src="http://localhost:3000/projectFiles/nutrificationLogo.html"
                            width="100%"
                            height="100%"
                            id="myId"
                            className="wizard"
                            display="initial"
                            position="relative"
                            onClick={(e) => console.log(e)}/>
                    </div>
            </Element>
            <Element name='omadi' className='project'>
                <div className='project-info'>
                    <h3>Omadi Agent Extension</h3>
                    <div>
                        <span data-html>HTML</span>
                        <span data-css>CSS</span>
                        <span data-javascript>Javascript</span>
                    </div>
                    <p>Created: 2020</p>
                    <p className='project-status'>Status: Not Hosted</p>
                </div>
                <div className='project-container'>
                    <span onClick={(e) => {
                            e.preventDefault()
                            toggleDetails(3)
                            e.target.innerText === "Show Project" ? e.target.innerText = "Show Details" : e.target.innerText = "Show Project";
                        }}>Show Project</span>
                    <div className='project-description'>
                        <h3>Omadi Agent Extension (OAE)</h3>
                        <p>Towards the end of my time at DevMountain, Covid-19 started to spread rapidly and finding a job was tough. I eventually settled for a training/tech support job for Omadi, a web-based towing sowftware company headquartered in Lehi, UT. I worked at Omadi for about a year when half of the company was laid off due to Covid. I was among those laid off.</p>
                        <p>While at Omadi, I noticed there were some tasks that were repettative and time consuming, like restoring thousands of tow records, enabling/disabling features, and more. I decided to make a browser extension to handle some of those tasks. My extension cut down tasks that would take a couple weeks to about an hour.</p>
                        <p>There isn't much that you can see OAE do without the right circumstances, but you can see how the UI looked. It followed a similar style to other elements on Omadi's website. Hovering over the tool would reveal menu options you would select to perform certain functions.</p>
                    </div>
                    <Iframe src="http://localhost:3000/projectFiles/popup.html"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="wizard"
                        display="initial"
                        position="relative"
                        onClick={(e) => console.log(e)}/>
                </div>
            </Element>
            <Element name='ezworkpc' className='project'>
                <div className='project-info'>
                    <h3>ezworkpc</h3>
                    <div>
                        <span data-html>HTML</span>
                        <span data-css>CSS</span>
                        <span data-javascript>Javascript</span>
                        <span data-react>React</span>
                        <span data-axios>Axios</span>
                        <span data-emailjs>EmailJS</span>
                    </div>
                    <p>Created: 2021</p>
                    <p className='project-status'>Status: Hosted @&nbsp;<a href='https://www.ezworkpc.com/home' target='_blank' rel='noreferrer'>ezworkpc.com</a></p>
                </div>
                <div className='project-container'>
                    <span onClick={(e) => {
                            e.preventDefault()
                            toggleDetails(4)
                            e.target.innerText === "Show Project" ? e.target.innerText = "Show Details" : e.target.innerText = "Show Project";
                        }}>Show Project</span>
                    <div className='project-description'>
                        <h3>ezworkpc</h3>
                        <p>I started building pc's in 2017, but I have gotten more serious about it in the last year and a half. My brother-in-law runs an insurance agency and when he was getting started, he asked me to build several workstation computers for his employees. He suggested I make the website to help the flow of ordering computers easier and more manageable.</p>
                        <p>I used EmailJS and a Google sheets API to keep customers up to date and keep track of orders.</p>
                    </div>
                    <Iframe src="https://www.ezworkpc.com/home"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="wizard"
                        display="initial"
                        position="relative"
                        style={{background: "#ffffff"}}
                        onClick={(e) => console.log(e)}/>
                </div>
            </Element>
            <Element name='reciperequest' className='project'>
                <div className='project-info'>
                    <h3>Recipe Request System</h3>
                    <div>
                        <span data-html>HTML</span>
                        <span data-css>CSS</span>
                        <span data-javascript>Javascript</span>
                        <span data-php>PHP</span>
                        <span data-mysql>MySQL</span>
                    </div>
                    <p>Created: 2021</p>
                    <p className='project-status'>Status: Hosted on company site for employee use</p>
                </div>
                <div className='project-container'>
                    <span onClick={(e) => {
                            e.preventDefault()
                            toggleDetails(5)
                            e.target.innerText === "Show Project" ? e.target.innerText = "Show Details" : e.target.innerText = "Show Project";
                        }}>Show Project</span>
                    <div className='project-description'>
                        <h3>Recipe Request System</h3>
                        <p>After being laid off from Omadi, I took up some projects with my step-dad's company Crandall Corporate Dieticians. They are "the nation's largest provider of nutritional consulting and menu services to senior living communities and hospitals." (<a style={{
                        height: "auto"}} href='https://consultingrd.com/about/' target='_blank' rel='noreferrer'>read more</a>)</p>
                        <p>This project allows communites and hospitals to easily request a new recipe to be added to their menu. The majority of the project is written in PHP, which I had to no experience with prior to this project. I picked up the language as fast as I could and was able to deliver the project.</p>
                    </div>
                    <Iframe src="http://localhost:3000/projectFiles/recipeRequestLogo.html"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="wizard"
                        display="initial"
                        position="relative"
                        style={{background: "#ffffff"}}
                        onClick={(e) => console.log(e)}/>
                </div>
            </Element>
            <Element name='twitchbot' className='project'>
                <div className='project-info'>
                    <h3>Twitch Bot / Monkeydrumma.com</h3>
                    <div>
                        <span data-html>HTML</span>
                        <span data-css>CSS</span>
                        <span data-javascript>Javascript</span>
                        <span data-react>React</span>
                        <span data-node>Node</span>
                    </div>
                    <p>Created: 2021</p>
                    <p className='project-status'>Status: Hosted on company site for employee use</p>
                </div>
                <div className='project-container'>
                    <span onClick={(e) => {
                            e.preventDefault()
                            toggleDetails(6)
                            e.target.innerText === "Show Project" ? e.target.innerText = "Show Details" : e.target.innerText = "Show Project";
                        }}>Show Project</span>
                    <div className='project-description'>
                        <h3>Twitch Streaming</h3>
                        <p>I started streaming on Twitch on June 9th, 2020. At the time, I was playing a lot of Modern Warfare 3 and being accused of hacking. I decided to start streaming to show the "hackusators" that I was not hacking. But instead of them watching me, I ended up loving streaming.</p>
                        <p>One of the unique things about streaming is that the software you use to set up your stream suppors browser sources. I instantly began making overlays, animations, and call to actions to show on stream. I also created a twitch chat bot that has a whole lot of commands.</p>
                        <p>I created a website that shows items my viewers could buy with gems they earn from watching my stream.</p>
                        <p>I recently surpassed 100 followers on Twitch, and to celebrate, I created a boss battle for my viewers to play. Viewers would have to type commands in order in my chat to defeat the boss. Chat messages were read by my bot and if the message included the correct commands, a bomb barrel would be thrown at the boss. Everything was made with HTML, CSS, and JavaScript.</p>
                    </div>
                    <Iframe src="https://www.monkeydrumma.com/shop"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="wizard"
                        display="initial"
                        position="relative"
                        style={{background: "#ffffff"}}
                        onClick={(e) => console.log(e)}/>
                </div>
            </Element>
        </div>
    )
}

export default withRouter(Projects);