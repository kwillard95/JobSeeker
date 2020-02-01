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
                <Link to="/">Home</Link>  |  <Link to="/companies">Companies</Link>
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
