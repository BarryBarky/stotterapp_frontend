import React, {useEffect, useState} from 'react';
import Timer from "../components/Timer";
import Hints from "../components/Hints";
import Controls from "../components/Controls";
import getAllLevels from "../lib/getAllLevels";
import {useNavigate} from "react-router-dom";

const Levels = () => {
    const [levelCounter, setLevelCounter] = useState(0);
    const [attempts, setAttempts] = useState(null);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [levels, setLevels] = useState([]);

    const navigate = useNavigate();

    // fetch data
    useEffect(() => {
        getAllLevels().then(
            data => {
                setLevels(data.data)
            }
        );
    }, [])

    // set attempts
    useEffect(() => {
        if (levels.length > 0) {
            console.log('filling attempts')
            setAttempts(levels[levelCounter].attempts)
        }
    }, [levels, levelCounter])

    const skipLevel = () => {
        if (levelCounter < (levels.length - 1)) {
            // if it's between the first and the latest level
            const newLevelCounter = levelCounter + 1
                setLevelCounter(newLevelCounter)
                setAttempts(levels[newLevelCounter].attempts)
        } else {
            // there are no levels left
            navigate('/einde')
        }
    }

    const levelUp = () => {
        if (levelCounter < (levels.length - 1)) {
            console.log('new level?');
            // if it's between the first and the latest level
            const newLevelCounter = levelCounter + 1
            if (levels[levelCounter].variant.id === 1) {
                setTimeout(() => {
                    setLevelCounter(newLevelCounter)
                    setAttempts(levels[newLevelCounter].attempts)
                }, levels[levelCounter].time * 1000)
            } else {
                setLevelCounter(newLevelCounter)
                setAttempts(levels[newLevelCounter].attempts)
            }
        } else {
            // there are no levels left
            navigate('/einde')
        }
    }

    // levels controls
    useEffect(() => {
        if (isFinished && attempts > 0) {
            console.log('ìs finished')
            const newAttempts = attempts - 1;
            if (newAttempts <= 0 ) {
                // if the level is finished all attempts are gone
                console.log(levelCounter, levels.length)
                levelUp()
            } else {
                // if there are still attempts remaining...
                setAttempts(
                    newAttempts
                )
            }
        }
    }, [isFinished])


    useEffect(() => {

    }, [attempts])
        return (
            <section className={"flex bg-primary w-full flex-col justify-between items-center h-full"}>
                <Timer amount={levels[levelCounter]?.time} setIsFinished={setIsFinished} isTimerActive={isTimerActive}
                       setIsTimerActive={setIsTimerActive}/>
                <Hints isTimerActive={isTimerActive} variantID={levels[levelCounter]?.variant.id}
                       hints={levels[levelCounter]?.hints} isFinished={isFinished} amountTime={levels[levelCounter]?.time}/>
                <Controls variantId={levels[levelCounter]?.variant.id} title={levels[levelCounter]?.title}
                          isFinished={isFinished} setIsTimerActive={setIsTimerActive} text={levels[levelCounter]?.text}
                          setIsFinished={setIsFinished} amountTime={levels[levelCounter]?.time} skipLevel={skipLevel}/>
            </section>
        );
};

export default Levels;