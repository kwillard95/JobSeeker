import React, { useState, useEffect } from 'react';
import ContactsForm from './ContactsForm.jsx';
import axios from 'axios';

export default function CompanyForm() {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [url, setUrl] = useState('');
    
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="name" placeholder="Company Name"></input>
                </div>
                <div>
                    <textarea rows="4" cols="50" name="about" placeholder="Company Description"></textarea>
                </div>
                <div>
                    <input type="text" name="url" placeholder="Company URL"></input>
                </div>
                <h3>Contacts:</h3>
                <div>
                    <ContactsForm />
                </div>
                <button>Submit Company</button>
            </form>
        </div>
    )
}