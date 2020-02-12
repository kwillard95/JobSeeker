import React, { useState, useReducer } from 'react';
import axios from 'axios';

export default function ResponseInfo(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            stage: '',
            date: '',
            notes: '',
        }
    )

    const [response, setResponse] = useState(false);

    const saveResponseInfo = e => {
        e.preventDefault();
        const userInputArray = [userInput]
        axios.post('/postResponseInfo', { name: props.company.name, stageInfo: userInputArray })
            .then(() => {
                console.log('Successfully updated response info!')
                // props.fetch();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;

        setUserInput({ [name]: newValue })
    }

    const onCheckboxClick = (e) => {
        setResponse(!response);
    }

    const haveResponded = () => {
        if (props.company.response === "true") {
            return (
                <div>
                    <div>
                        <input type="checkbox" id="applied" name="applied" checked="checked"></input> Response
                </div>
                    <p>Stage Info:
                       <div>
                            {props.company.stageInfo.map((stage) => {
                                return (<ul>
                                    <li type="none">Stage: {stage.stage}</li>
                                    <li type="none">Scheduled Date: {stage.date.slice(0, 10)}</li>
                                    <li type="none">Stage Notes: {stage.notes}</li>
                                </ul>)
                            })}
                        </div>
                    </p>
                    <button>Add Another Stage</button>
                </div>
            )
        } else {
            if (response) {
                return (
                    <form>
                        <div>
                            <input type="checkbox" name="response" checked='checked' onChange={onCheckboxClick}></input> Response
                        </div>
                        <div>
                            <input type="text" placeholder="Stage 1" name="stage" onChange={handleChange}></input>
                        </div>
                        <div>
                            <input type="date" name="date" onChange={handleChange}></input>
                        </div>
                        <div>
                            <textarea rows="4" cols="50" name="notes" placeholder="Stage 1 Notes" onChange={handleChange}></textarea>
                        </div>
                        <button onClick={saveResponseInfo}>Submit</button>
                    </form>
                )
            } else {
                return (
                    <div>
                        <input type="checkbox" name="response" checked="" onChange={onCheckboxClick}></input> Response
                </div>)
            }
        }
    }

    return haveResponded();
}