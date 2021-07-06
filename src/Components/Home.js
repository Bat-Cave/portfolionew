import { useEffect, useState } from 'react';
import '../styles/home.css';

let Home = () => {

    let [intro, setIntro] = useState('');
    let [showIntro, setShowIntro] = useState(true);
    let [showNav, setShowNav] = useState(false);
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
                    setShowIntro(false);
                    setShowNav(true);
                    setTimeout(() => {
                        moveLinks();
                    }, 100)
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
        let radius = 140;
        for(let l = 0; l < linkList.children.length ; l++){
            let coords = [0, 0];
            let angle = 225 + (l * incrementAngle);
            coords[0] = radius*Math.sin(angle * (Math.PI / 180));
            coords[1] = radius*Math.cos(angle * (Math.PI / 180));
            linkList.children[l].style.transform = `translate(calc(-50% - ${coords[1]}px), calc(-50% - ${coords[0]}px))`
            console.log(`X: ${coords[0]}, Y: ${coords[1]}`);
        }
    }

    useEffect(() => {
        if(showIntro){
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
            {showIntro ? (
                <code id='intro'>{intro}<span id='blinker'>|</span></code>
            ) : null}
            {showNav ? (
                <nav>
                    <div className='profilePic'>Rico</div>
                    <div className='links'>
                        <ul id='links-layer-1'>
                            <li>C</li>
                            <li>S
                                <ul className='links-layer-2'>
                                    <li>li</li>
                                    <li>fb</li>
                                    <li>t</li>
                                    <li>i</li>
                                </ul>
                            </li>
                            <li>P</li>
                            <li>A</li>
                        </ul>
                    </div>
                </nav>
            ) : null}
        </div>
    )
}

export default Home;