import React, {useEffect, useState} from 'react';
import bram from "../img/bram1.png"
import classroom from "../img/classroom.jpg"
import {playAudio} from "../lib/playAudio";

const Hints = ({hints, isFinished, variantID, isTimerActive, amountTime}) => {

    const [showHint, setShowHint] = useState(null);
    const [allHints, setAllHints] = useState(hints);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function getRandomElement(array) {
        const max = array.length;
        return array[Math.floor(Math.random() * max)];
    }

    // while the game is playing
    useEffect(() => {
        // looping the hints
        if (isTimerActive) {
            if (allHints) {
                if (allHints.filter(hint => hint.is_loop === 1).length > 0) {
                    // creating the loop
                    const loop = setInterval(() => {
                        setShowHint(getRandomElement(allHints.filter(hint => hint.is_loop === 1)))
                    }, getRandomInt(5000, 10000));
                    // stopping the loop
                    setTimeout(() => {
                        setShowHint(null)
                        clearInterval(loop)
                    }, (amountTime - 10) * 1000)
                }
            }
        }

        // set the hints
        if (hints) {
            setAllHints(hints)
        }

    }, [isTimerActive, hints])

    // if the game is finished
    useEffect(() => {
        console.log('is it finished', isFinished)
        if (isFinished) {
            if (allHints) {
                if (allHints.filter(hint => hint.is_loop === 0).length > 0) {
                    setTimeout(() => setShowHint(getRandomElement(allHints.filter(hint => hint.is_loop === 0))),
                        variantID === 1 ? amountTime * 1000 : 0)
                }
            }
        }

    }, [isFinished])

    useEffect(() => {
        // play audio of showHint has value
        if (showHint) {
            playAudio(`${process.env.REACT_APP_DASHBOARD_URL}/storage/${showHint.audio}`)
        }
    }, [showHint])


    return (
        <section
            className={`flex flex-col items-center w-full bg-cover h-full min-h-[200px] sm:min-h-[400px] bg-center py-2 sm:py-10`}
            style={{backgroundImage: `url(${classroom})`}}>
            <section className={"px-5 sm:p-0 h-full flex items-start"}>
                <img src={bram} alt={"Bram"} className={"w-auto h-full"}/>

                <p className={`bg-secondary w-full p-4 border text-md md:text-lg bottom-[-1rem] absolute sm:static flex flex-col border-accent ${showHint ? 'visible' : 'invisible'}`}>
                    {showHint && showHint.text}
                </p>

            </section>
        </section>
    );
};

export default Hints;