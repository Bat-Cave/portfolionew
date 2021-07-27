import { useEffect, useState } from 'react';
import '../styles/home.css';
import {Link, withRouter} from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";

let Home = () => {
    let [intro, setIntro] = useState('');
    let [showIntro, setShowIntro] = useState(true);
    let [showNav, setShowNav] = useState(false);
    let [showFadeToBlack, setShowFadeToBlack] = useState(false);
    let [destination, setDestination] = useState('Home');
    let [introViewed, setIntroViewed] = useLocalStorage('introViewed', false);
    let introText = ["Hi.", "My name is Rico.", "Welcome to my website."];
    let currIntroText = 0;
    let introDelay = 3000;

    let removeIntro = (string) => {
        let introArray = string.split('');
        let loopOverIntroArray = () => {
            if(introArray.length > 0){
                introArray.pop();
                setIntro((`${introArray.join('')}`));
                setTimeout(() => {
                    loopOverIntroArray();
                }, 100);
            } else {
                currIntroText++;
                if(currIntroText < introText.length){
                    setTimeout(() => {
                        typeIntro(introText[currIntroText]);
                    }, 1500);
                } else {
                    setShowFadeToBlack(true);
                    setIntroViewed(true);
                    setTimeout(() => {
                        setShowIntro(false);
                        setShowNav(true);
                        setShowFadeToBlack(false);
                    }, 1000)
                    setTimeout(() => {
                        moveLinks();
                    }, 1000)
                }
            }
        }
        loopOverIntroArray();
    }

    let typeIntro = (string) => {
        let stringArray = string.split('');
        let curr = 0;
        let currIntro = intro;
        let loopOverStringArray = () => {
            if(curr < stringArray.length){
                currIntro += stringArray[curr];
                setIntro((`${currIntro}`));
                setTimeout(() => {
                    curr++;
                    loopOverStringArray();
                }, 150);
            } else {
                setTimeout(() => {
                    removeIntro(currIntro);
                }, 3000);
            }
        }
        loopOverStringArray();
    }

    let moveLinks = () => {
        let linkList = document.getElementById('links-layer-1');
        let incrementAngle = 30;
        let radius = 150;
        for(let l = 0; l < linkList.children.length ; l++){
            let coords = [0, 0];
            let angle = 225 + (l * incrementAngle);
            coords[0] = radius*Math.sin(angle * (Math.PI / 180));
            coords[1] = radius*Math.cos(angle * (Math.PI / 180));
            linkList.children[l].style.transform = `translate(calc(-50% - ${coords[1]}px), calc(-50% - ${coords[0]}px))`;
        }
    }

    let moveSubLinks = (action) => {
        let linkList = document.getElementById('links-layer-2');
        if(action === 'move'){
            let radius = 90;
            for(let l = 0; l < linkList.children.length ; l++){
                let coords = [0, 0];
                let angle = 245;
                coords[0] = (radius + (50 * l)) * Math.sin(angle * (Math.PI / 180));
                coords[1] = (radius + (23 * l)) * Math.cos(angle * (Math.PI / 180));
                linkList.children[l].style.transform = `translate(calc(-50% - ${coords[1]}px), calc(-50% - ${coords[0]}px))`
            }
        } else {
            for(let l = 0; l < linkList.children.length ; l++){
                linkList.children[l].style.transform = `translate(0px, 0px)`;
            }
        }
    }

    useEffect(() => {
        if(introViewed){
            setTimeout(() => {
                setShowIntro(false);
                setShowNav(true);
                moveLinks();
                setShowFadeToBlack(false);
            }, 100)
        }
        if(showIntro && !introViewed){
            setTimeout(() => {
                typeIntro(introText[0]);
            }, introDelay)
        } else {
            setShowNav(true);
        }
        if(showNav){
            setTimeout(() => {
                moveLinks();
            }, 100)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='home'>
            {showFadeToBlack ? (
                <div id='fadeToBlack'></div>
            ) : null}
            {showIntro ? (
                <code id='intro'>{intro}<span id='blinker'>|</span><button id='skip' onClick={() => {
                    setShowIntro(false);
                    setShowNav(true);
                    setShowFadeToBlack(true);
                    setIntroViewed(true);
                    setTimeout(() => {
                        moveLinks();
                        setShowFadeToBlack(false);
                    }, 100)
                }}>Skip</button></code>
            ) : null}
            {showNav ? (
                <nav>
                    <h3 className='destination'>{destination}</h3>
                    <div className='profilePic'></div>
                    <div className='links' onMouseOut={() => setDestination('Home')}>
                        <ul id='links-layer-1'>
                            <li data-name='Contact' onMouseOver={() => setDestination('Contact')}><Link to='/contact'><i className="fas fa-envelope-open-text"></i></Link></li>
                            <li data-name='Socials' className='hasSubLinks' onMouseOver={() => moveSubLinks('move')} onMouseOut={() => moveSubLinks()}>
                                <Link to='/socials' onMouseOver={() => setDestination('Socials')}><i className="fas fa-user-circle"></i></Link>
                                <ul id='links-layer-2'>
                                    <li onMouseOver={() => setDestination('LinkedIn')}><a href='https://www.linkedin.com/in/richard-l-hancock' target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                    <li onMouseOver={() => setDestination('Facebook')}><a href='https://www.facebook.com/richard.l.hancock' target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                                    <li onMouseOver={() => setDestination('Twitch')}><a href='https://www.twitch.tv/monkeydrumma' target='_blank' rel="noreferrer"><i className="fab fa-twitch"></i></a></li>
                                    <li onMouseOver={() => setDestination('Instagram')}><a href='https://www.instagram.com/uncle.ri.co/' target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </li>
                            <li data-name='Projects' onMouseOver={() => setDestination('Projects')}><Link to='/projects'><i className="fas fa-box-open"></i></Link></li>
                            <li data-name='About' onMouseOver={() => setDestination('About')}><Link to='/about'><i className="fas fa-address-card"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            ) : null}
        </div>
    )
}

export default withRouter(Home);