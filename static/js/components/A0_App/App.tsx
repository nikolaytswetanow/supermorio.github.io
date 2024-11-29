import React from 'react';
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {FirstScreen} from "../B0_FirstScreen/FirstScreen";
import {BurgerMenu} from "../A2_BurgerMenu/BurgerMenu";
import {Presel} from "../B1_Presel/Presel";
import {Aboot} from "../B2_Aboot/Aboot";
import {RunningString} from "../B3_RunningString/RunningString";
import {HowToBuy} from "../B4_HowToBuy/HowToBuy";
import {Tookanomix} from "../B5_Tookanomix/Tookanomix";
import {Images} from "../B6_Images/Images";
import {Bot} from "../B7_Bot/Bot";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <BurgerMenu/>
            <FirstScreen/>
            <Presel/>
            <Aboot/>
            <RunningString/>
            {/*<Bot/>*/}
            <HowToBuy/>
            {/*<Tookanomix/>*/}
            <Images/>
        </div>
    );
}

