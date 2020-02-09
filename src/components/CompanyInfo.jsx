import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppInfoForm from './AppInfoForm.jsx'

class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            // applied: false,
            // response: false
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
                this.setState({ 
                    company: response.data[0]
                 });
                 console.log(this.state.company.applied)

                //  if (response.data[0].applied === 'true') {
                //     this.setState({ 
                //         applied: true
                //      });
                //  }
                //  if (response.data[0].response === 'true') {
                //     this.setState({ 
                //         response: true
                //      });
                //  }
                //  console.log('state', this.state.applied)
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
                <AppInfoForm company={this.state.company} />
            </div>

        )
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