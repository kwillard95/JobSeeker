import React, { useState, useReducer } from 'react';
import axios from 'axios';
import ResponseInfo from './ResponseInfo.jsx'

export default function ApplicationInfo(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            date: '',
            title: '',
            duties: '',
        }
    )

    const [applied, setApplied] = useState(false);

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;

        setUserInput({ [name]: newValue })
    }

    const saveAppInfo = e => {
        e.preventDefault();
        axios.post('/postAppInfo', { name: props.company.name, appInfo: userInput })
            .then(() => {
                console.log('Successfully updated app info!')
                props.fetch();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onCheckboxClick = (e) => {
        setApplied(!applied);
        if (applied) {
            e.target.checked = "checked";
        } else {
            e.target.checked = "";
        }
    }

const renderAppInfo = () => {
    if (props.company.applied === "true") {
        return (
            <div>
                <div>
                    <input type="checkbox" id="applied" name="applied" checked="checked"></input> Applied
                </div>
                <p>Application Info:
                       <div>
                        <ul>
                            <li type="none">Position Title: {props.company.appInfo.title}</li>
                            <li type="none">Date of Application: {props.company.appInfo.date.slice(0, 10)}</li>
                            <li type="none">Position Duties: {props.company.appInfo.duties}</li>
                            <li type="none">Point of Contact: {props.company.appInfo.contact}</li>
                        </ul>
                    </div>
                </p>
                <div>
                    <ResponseInfo company={props.company} />
                </div>
            </div>
        )
    } else {
        if (applied) {
            return (
                <div>
                    <div>
                        <input type="checkbox" name="applied" defaultChecked={applied} onChange={onCheckboxClick}></input> Applied
                        </div>
                    <div>
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
                    </div>
                </div>)

        } else {
            return <div><input type="checkbox" name="applied" defaultChecked={applied} onChange={onCheckboxClick}></input> Applied</div>;
        }
    }
}

return renderAppInfo();
}