import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            goals: {}
        }
    }

    componentDidMount() {
        axios.get('/getGoals')
            .then((response) => {
                this.setState({ goals: response.data[0] })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h3>Daily Targets: </h3>
                <ul>
                    <li type="none">Completed Applications: {this.state.goals.app}</li>
                    <li type="none">Completed Toy Problems: {this.state.goals.toy}</li>
                    <li type="none">Completed Trivia Questions: {this.state.goals.trivia}</li>
                    <li type="none">Completed Behavioral Questions: {this.state.goals.behavioral}</li>
                </ul>
            </div>
        )
    }
}

export default Dashboard;