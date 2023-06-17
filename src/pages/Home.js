import React from 'react';
import Logo from "../components/Logo";
import background from "../img/gras.png"
import bram from "../img/bram.png"
import BasicTextButton from "../components/buttons/BasicTextButton";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <section className={"bg-cover w-full flex justify-center items-center  h-full"} style={{backgroundImage: `url(${background})`}}>
            <section className={"relative flex h-4/5 flex-col items-center justify-between"}>
                <section className={"relative w-1/3"}>
                    <Logo/>
                </section>
                <section className={"flex flex-col h-2/3 gap-10 items-center"}>
                    <BasicTextButton text={"Start"} handler={() => navigate('/levels')} classes={"text-3xl"}/>
                    <section className={"relative w-4/6"}>
                        <img src={bram} alt={"bram"}/>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Home;