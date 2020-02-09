import React, { useState, useReducer } from 'react';
import axios from 'axios';

export default function AppInfoForm(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            date: '',
            title: '',
            duties: '',
        }
    )
    
    // const [applied, setApplied] = useState(props.applied);
    // const [response, setResponse] = useState(props.response);
    // console.log('props', props.applied);
    // console.log('state', applied)

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;

        setUserInput({ [name]: newValue })
    }

    const saveAppInfo = e => {
        e.preventDefault();
        axios.post('/postAppInfo', { name: props.name, appInfo: userInput })
            .then(() => {
                console.log('Successfully updated app info!')
                setApplied(!applied);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onCheckboxClick = (e) => {
        if (e.target.name === 'applied') {
            // setApplied({ applied: !applied });
            props.applied = !props.applied;
        } 
        else {
            // setResponse({ response: !response });
            props.response = !props.response;
        }
    }

    // const haveApplied = () => {
    //     if (this.state.applied) {
    //         return (
    //             <div>
    //                 <AppInfoForm name={this.state.company.name} applied={this.state.company.applied} />
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // }

    const haveResponded = () => {
        if (props.response) {
            return (
                <form>
                    <div>
                        <input type="text" placeholder="Stage 1" name="stage1"></input>
                    </div>
                    <div>
                        <input type="date" name="stage1Date"></input>
                    </div>
                    <div>
                        <textarea rows="4" cols="50" name="stage1Notes" placeholder="Stage 1 Notes"></textarea>
                    </div>
                </form>
            )
        } else {
            return null;
        }
    }

    const renderAppInfo = () => {
        if (props.applied) {
            console.log('here applied')
            return (
                <div>
                    <div>
                        <input type="checkbox" name="applied" checked="checked"></input> Applied
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
                        <input type="checkbox" name="response" onChange={onCheckboxClick}></input> Response
                </div>
                    <div>
                        {haveResponded()}
                    </div>
                </div>
            )
        } else {
            console.log('here not applied')
            return (
                <div>
                    <div>
                        <input type="checkbox" name="applied" onChange={onCheckboxClick}></input> Applied
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
                </div>
            )
        }
    }


  return renderAppInfo();
    // if (props.company.applied) {
    //     return <div><CompanyInfo /></div>
    // } else {
    //     return (
    //         <form>
    //             <div>
    //                 <input type="date" placeholder="Date" name="date" onChange={handleChange}></input>
    //             </div>
    //             <div>
    //                 <input type="text" placeholder="Position Applied For" name="title" onChange={handleChange}></input>
    //             </div>
    //             <div>
    //                 <textarea rows="4" cols="50" name="duties" placeholder="Position Description" onChange={handleChange}></textarea>
    //             </div>
    //             <button onClick={saveAppInfo}>Save Application Info</button>
    //         </form>
    //     )
    // }
}