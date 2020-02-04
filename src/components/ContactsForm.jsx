import React, { useState, useEffect } from 'react';

export default function CompanyForm(props) {
    return (
        <div>
            <input type="text" name="name" placeholder="Contact Name" onChange={props.handleChange}></input>
            <input type="text" name="title" placeholder="Contact Title" onChange={props.handleChange}></input>
            <input type="text" name="email" placeholder="Contact Email" onChange={props.handleChange}></input>
            <input type="text" name="social" placeholder="Contact LinkedIn URL" onChange={props.handleChange}></input>
        </div>
    )
}