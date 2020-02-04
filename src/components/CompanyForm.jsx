import React, { useState, useEffect, useReducer } from 'react';
import ContactsForm from './ContactsForm.jsx';
import axios from 'axios';

export default function CompanyForm() {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [url, setUrl] = useState('');
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name: '',
            about: '',
            url: '',
            contacts: [{
                name: '',
                title: '',
                email: '',
                social: ''
            }]
        }
    );

    const handleChange = e => {
      const name = e.target.name;
      const newValue = e.target.value;

      setUserInput({[name]: newValue});
      console.log(userInput)
    }
    function handleContactChange(e) {
        const name = e.target.name;
        const newValue = e.target.value;
        let oldContacts = userInput.contacts[0];
        oldContacts[name] = newValue;

        setUserInput({contacts: [oldContacts]});
        console.log(userInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/postCompanyInfo', userInput)
        .then(() => {
            console.log('Company info successfully posted!');
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div>
            <form>
            <h3>Company Information:</h3>
                <div>
                    <input type="text" name="name" placeholder="Company Name" onChange={handleChange}></input>
                </div>
                <div>
                    <textarea rows="4" cols="50" name="about" placeholder="Company Description" onChange={handleChange}></textarea>
                </div>
                <div>
                    <input type="text" name="url" placeholder="Company URL" onChange={handleChange}></input>
                </div>
                <h3>Contacts:</h3>
                <div>
                    <ContactsForm handleChange={handleContactChange} />
                </div>
                <button onClick={handleSubmit}>Submit Company</button>
            </form>
        </div>
    )
}