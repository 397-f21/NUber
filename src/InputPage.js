import { database } from './utilities/firebase.js';
import { set, ref } from 'firebase/database';
import React, { useState } from 'react';

const InputPage = ({navigation}) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
//////
    


    const changeTimeHandler = (e) => {
        setTime(e.target.value);
    }

    const changeDateHandler = (e) => {
        setDate(e.target.value);
    }

    const makekey = (time, date) => {
        const currdate = new Date(date + "T" + time);
        return currdate.getTime();
    }

    const { next } = navigation;

    const clickHandler = () => {
        setData();
        next();
    }

    
    
    return (
        <>
            <h1>NUber-input-test</h1>

            
            <h2>Enter in your flight arrival date and time</h2>
            <input type="time" onChange={(e) => changeTimeHandler(e)} />
            <input type="date" date-cy="date" onChange={(e) => changeDateHandler(e)} />

            <button type="button" button-cy="button" onClick={clickHandler}>Button</button>
        </>
    );
};

export default InputPage;