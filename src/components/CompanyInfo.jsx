import React, { useState, useEffect } from 'react';
import axios from 'axios';

class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            applied: false,
            response: false,
        }

        this.onCheckboxClick = this.onCheckboxClick.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.company !== prevProps.company) {
            this.fetchData();
        }
    }

    fetchData() {
        axios.get(`/getCompanyInfo?name=${this.props.company}`)
            .then((response) => {
                this.setState({ company: response.data[0] });
                console.log(this.state.company)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    onCheckboxClick(e) {
        if (e.target.name === 'applied') {
            this.setState({ applied: !this.state.applied });
        } else {
            this.setState({ response: !this.state.response });
        }
    }

    haveApplied() {
        if (this.state.applied) {
            return (
                <form>
                    <div>
                        <input type="text" placeholder="Date" name="date"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Position Applied For" name="date"></input>
                    </div>
                    <div>
                        <textarea rows="4" cols="50" name="duties" placeholder="Position Description"></textarea>
                    </div>
                </form>
            )
        } else {
            return null;
        }
    }

    haveResponded() {
        if (this.state.response) {
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


    renderCompanyInfo() {
        return (
            <div>
                <h3>{this.state.company.name}</h3>

                <p>About: {this.state.company.about}</p>
                <p>Url: {this.state.company.url}</p>
                <p>Contacts: {this.state.company.contacts.map((contact) => {
                    return <div>
                        <ul>
                            <li>{contact.name}</li>
                            <li>{contact.title}</li>
                            <li>{contact.email}</li>
                            <li>{contact.social}</li>
                        </ul>
                    </div>

                })}</p>
                {this.renderAppInfo()}
            </div>

        )
    }

    renderAppInfo() {
        if (this.state.company.applied === "true") {
            return (
                <div>
                    <div>
                        <input type="checkbox" name="applied" checked="checked"></input> Applied
                </div>
                    <p>Application Info:
                       <div>
                            <ul>
                                <li type="none">Position Title: {this.state.company.appInfo.title}</li>
                                <li type="none">Date of Application: {this.state.company.appInfo.date.slice(0, 10)}</li>
                                <li type="none">Position Duties: {this.state.company.appInfo.duties}</li>
                                <li type="none">Point of Contact: {this.state.company.appInfo.contact}</li>
                            </ul>
                        </div>
                    </p>
                    <div>
                        <input type="checkbox" name="response" onChange={this.onCheckboxClick}></input> Response
                </div>
                    <div>
                        {this.haveResponded()}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <input type="checkbox" name="applied" onChange={onCheckboxClick}></input> Applied
                </div>
                    <div>
                        {this.haveApplied()}
                    </div>
                </div>
            )
        }
    }

    render() {
        if (this.state.company !== '') {
            return (
                <div>
                    {this.renderCompanyInfo()}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default CompanyInfo;