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
        <section className={"z-10 w-full bg-primary sticky flex-col md:flex-row flex items-center md:justify-between top-0 p-5"}>
            <section className={"flex flex-col pb-5 md:pb-0 md:w-1/5"}>
                <Logo/>
            </section>
            <section className={"flex flex-col"}>
                <span className={"text-3xl font-bold"}>Timer:</span>
                <span className={"text-2xl"}>{counter} Seconden</span>
            </section>
        </section>
    );
};

export default Timer;