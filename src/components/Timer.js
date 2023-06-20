import React, {useEffect, useState} from 'react';
import Logo from "./Logo";

const Timer = ({isTimerActive, setIsFinished, setIsTimerActive, amount}) => {
    const [counter, setCounter] = useState(5)
    useEffect(() => {
        if (amount) {
            setCounter(amount)
        }
    }, [amount])

    useEffect(() => {
        if (isTimerActive) {
            if (counter === 0) {
                setCounter(amount)
            }
            setTimeout(() => setCounter(counter - 1), 1000);
        }
        if (counter === 1) {
            setIsFinished(true)
            setIsTimerActive(false)
        }

    }, [counter, isTimerActive, setIsFinished, setIsTimerActive, amount])
    return (
        <section className={"z-10 w-full gap-10 bg-secondary shadow sticky flex-col md:flex-row flex items-center md:justify-between top-0 p-5"}>
            <Logo classes={"w-1/3 md:w-1/4 lg:w-1/6"}/>
            <section className={"flex flex-col items-center md:items-start"}>
                <span className={"text-xl"}>Tijd:</span>
                <span className={"text-xl"}><span className={"font-bold text-2xl"}>{counter}</span> Seconden</span>
            </section>
        </section>
    );
};

export default Timer;