import React, { useState, useEffect } from 'react';
import axios from 'axios';

class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {}
        }
    }

    componentDidMount() {
      axios.get(`/getCompanyInfo?name=${this.props.company}`)
      .then((response) => {
          this.setState({company: response.data[0]});
          console.log(this.state.company.contacts)
      })
      .catch((err) => {
          console.log(err);
      })
    }

    // renderCompanyInfo() {
    //   return (
    //      <div>

    //      </div> 
    //   )
    // }

    render() {
        return (
            <div>
              {this.state.company.name}
              {this.state.company.about}
              {this.state.company.url}
              {/* {this.state.company.contacts.map((contact) => {
                  for (var key in contact) {
                      return <div>{key}: {contact[key]}</div>
                  }
              })} */}
            </div>
          
        )
    }
}

export default CompanyInfo;