import React from 'react';
import Logo from "../components/Logo";
import BasicTextButton from "../components/buttons/BasicTextButton";
import {useNavigate} from "react-router-dom";

const End = () => {
    const navigate = useNavigate();
    return (
        <section className={"flex bg-primary w-full flex-col gap-10 items-center h-full p-5"}>
            <section>
                <Logo/>
            </section>
            <section className={"p-5 bg-white w-full flex flex-col gap-10 shadow items-center"}>
                <h1 className={"text-2xl text-center font-bold text-accent"}>Einde</h1>
                <ul className={"text-accent flex flex-col gap-5"}>
                    <section className={"flex flex-col gap-2"}>
                        <li>
                            Vervelend hé, als je onderbroken word terwijl je aan het praten bent
                        </li>
                    </section>
                </ul>
                <BasicTextButton text={"Opnieuw spelen"} handler={() => navigate('/levels')} classes={"w-fit"}/>
            </section>

        </section>
    );
};

export default End;