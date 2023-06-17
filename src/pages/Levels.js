import React, {useEffect, useState} from 'react';
import Timer from "../components/Timer";
import Hints from "../components/Hints";
import Controls from "../components/Controls";
import getAllLevels from "../lib/getAllLevels";

const Levels = () => {
    const [levelCounter, setLevelCounter] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [levels, setLevels] = useState([]);

    // fetch data
    useEffect( () => {
        getAllLevels().then(
            data => {
                setLevels(data.data)
            }
        );
    }, [])

    // levels controls
    useEffect( () => {
        if (isFinished) {
            setAttempts(
                attempts + 1
            )
        }
    }, [isFinished])

    useEffect( () => {
        if (attempts === 3) {
            // commenting the next line for now ....
            // setAttempts(0)
            if (levelCounter < levels.length) {
                if (levels[levelCounter].variant.id === 1) {
                    setTimeout(() => setLevelCounter(levelCounter + 1), levels[levelCounter].time * 1000)
                } else {
                    setLevelCounter(levelCounter + 1)
                }
            }

        }
    }, [attempts])

    return (
        <section className={"flex bg-primary w-full flex-col justify-between items-center h-full"}>
            <Timer amount={levels[levelCounter]?.time} setIsFinished={setIsFinished} isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive}/>
            <Hints isTimerActive={isTimerActive} variantID={levels[levelCounter]?.variant.id} hints={levels[levelCounter]?.hints} isFinished={isFinished} amountTime={levels[levelCounter]?.time}/>
            <Controls variantId={levels[levelCounter]?.variant.id} title={levels[levelCounter]?.title} isFinished={isFinished} setIsTimerActive={setIsTimerActive} text={levels[levelCounter]?.text} setIsFinished={setIsFinished} amountTime={levels[levelCounter]?.time}/>
        </section>
    );
};

export default Levels;