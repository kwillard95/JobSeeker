import React, { useState, useEffect } from 'react';
import axios from 'axios';

class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: ''
        }
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
                <p>Application Info:
                       <div>
                            <ul>
                                <li type="none">Position Title: {this.state.company.appInfo.title}</li>
                                <li type="none">Date of Application: {this.state.company.appInfo.date.slice(0,10)}</li>
                                <li type="none">Position Duties: {this.state.company.appInfo.duties}</li>
                                <li type="none">Point of Contact: {this.state.company.appInfo.contact}</li>
                            </ul>
                        </div>
                    </p>
            )
        } else {
            return null;
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