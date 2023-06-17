import React, {useEffect, useState} from 'react';

const Recording = () => {
    const [isVisible, setIsVisible] = useState(false)



    useEffect(() => {
        setTimeout(() => setIsVisible(!isVisible), 500);
    }, [isVisible])
    return (
        <section className={`flex justify-between gap-5 items-center`}>
            <span className={`p-5 bg-tertiary rounded-2xl ${isVisible ? "visible" : "invisible"}`}></span>
            <span>Recording.....</span>
        </section>

    );
};

export default Recording;