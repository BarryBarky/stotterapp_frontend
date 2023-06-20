import React from 'react';
import BasicTextButton from "../components/buttons/BasicTextButton";
import {useNavigate} from "react-router-dom";
import Logo from "../components/Logo";

const Instructions = () => {
    const navigate = useNavigate();
    return (
        <section className={"flex bg-primary w-full flex-col gap-10 items-center h-full p-5"}>
            <section>
                <Logo/>
            </section>
            <section className={"p-5 bg-white w-full flex flex-col gap-10 shadow items-center"}>
                <h1 className={"text-2xl text-center font-bold text-accent"}>Instructies</h1>
                <ul className={"text-accent flex flex-col gap-5"}>
                    <section className={"flex flex-col gap-2"}>
                        <li className={"font-bold"}>Stap 1:</li>
                        <li>
                            Zorg ervoor dat je de browser Chrome gebruikt voor de beste ervaring.
                        </li>
                    </section>
                    <section className={"flex flex-col gap-2"}>
                        <li className={"font-bold"}>Stap 2:</li>
                        <li>
                            Zorg ervoor dat je een goede microfoon bij de hand hebt, als je woorden gaat inspreken.
                        </li>
                    </section>
                </ul>
                <BasicTextButton text={"Begrepen"} handler={() => navigate('/levels')} classes={"w-fit"}/>
            </section>

        </section>
    );
};

export default Instructions;