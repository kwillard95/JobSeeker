import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Companies from './Companies.jsx';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/companies">Companies</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/companies">
                        <Companies />
                    </Route>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
