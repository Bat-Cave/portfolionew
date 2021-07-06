import { useEffect, useState } from 'react';
import '../styles/home.css';

let Home = () => {

    let [intro, setIntro] = useState('');
    let introText = ["Hi.", "My name is Rico.", "Welcome to my website."];
    let currIntroText = 0;
    let introDelay = 4000;

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

    useEffect(() => {
        setTimeout(() => {
            typeIntro(introText[0]);
        }, introDelay)
    }, [])

    return (
        <div className='home'>
            <code id='intro'>{intro}<span id='blinker'>|</span></code>
        </div>
    )
}

export default Home;