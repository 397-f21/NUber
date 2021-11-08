import { database } from './utilities/firebase.js';
import { set, ref } from 'firebase/database';
import React, { useState } from 'react';

const InputPage = ({navigation}) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [netid, setNetid] = useState("");

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }
    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const changeNetidHandler = (e) => {
        setNetid(e.target.value);
    }
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

    const setData = () => {
        const data = {
        "name": name,
        "email": email,
        "netid": netid,
        "date": date,
        "time": time
        };
        const keyinsec = makekey(time, date);
        set(ref(database, '/'+keyinsec), data);
    };
    
    return (
        <>
            <h1>NUber-input-page</h1>

            <label for="fname">Full Name:</label>
            <input type="text" id="fname" onChange={(e) => changeNameHandler(e)} />
            <label for="email">Email:</label>
            <input type="email" id="email" onChange={(e) => changeEmailHandler(e)} />
            <label for="netid">NetID:</label>
            <input type="text" id="netid" onChange={(e) => changeNetidHandler(e)} />

            <label for="airports">Arrival Airport:</label>
            <select id="airports">
                <option value="ORD">O'Hare International Airport</option>
            </select>

            <h3>Enter in your preferred arrival date and time</h3>
            <input type="time" onChange={(e) => changeTimeHandler(e)} />
            <input type="date" date-cy="date" onChange={(e) => changeDateHandler(e)} />

            <button type="button" button-cy="button" onClick={clickHandler}>Submit</button>
            <h6>*By submitting, you agree to NUber storing your information and sharing it with other NU users</h6>
        </>
    );
};

export default InputPage;