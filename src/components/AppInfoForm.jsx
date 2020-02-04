import React, { useState, useReducer } from 'react';
import axios from 'axios';
import CompanyInfo from './CompanyForm.jsx'

export default function AppInfoForm(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            date: '',
            title: '',
            duties: ''
        }
    )
    const [applied, setApplied] = useState(false)

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;

        setUserInput({[name]: newValue})
    }

    const saveAppInfo = e => {
        e.preventDefault();
        axios.post('/postAppInfo', {name: props.name, appInfo: userInput})
        .then(() => {
            console.log('Successfully updated app info!')
            setApplied(!applied);
            
        })
        .catch((err) => {
            console.log(err);
        })
    }

    if (applied) {
        return <div><CompanyInfo /></div>
    } else {
        return (
            <form>
            <div>
                <input type="date" placeholder="Date" name="date" onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" placeholder="Position Applied For" name="title" onChange={handleChange}></input>
            </div>
            <div>
                <textarea rows="4" cols="50" name="duties" placeholder="Position Description" onChange={handleChange}></textarea>
            </div>
            <button onClick={saveAppInfo}>Save Application Info</button>
        </form>
        )
    }
}