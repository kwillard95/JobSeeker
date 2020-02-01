import React, { useState, useEffect } from 'react';

function Companies() {

    return(
        <div>
            <form>
            <input type="text"></input>
            <select>
                <option value="all">All</option>
                <option value="applied">Applied</option>
                <option value="in-progress">In-Progress</option>
            </select>
            <button>Search</button>
            </form>
        </div>
    )
}

export default Companies;