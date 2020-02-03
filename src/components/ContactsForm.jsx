import React, { useState, useEffect } from 'react';

export default function CompanyForm() {
    return (
        <div>
            <input type="text" name="name" placeholder="Contact Name"></input>
            <input type="text" name="title" placeholder="Contact Title"></input>
            <input type="text" name="title" placeholder="Contact Email"></input>
            <input type="text" name="title" placeholder="Contact LinkedIn URL"></input>
        </div>
    )
}