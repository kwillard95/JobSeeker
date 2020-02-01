import React from 'react';
import axios from 'axios';
import CompanyList from './CompanyList.jsx'

class Companies extends React.Component {
    constructor() {
        super();
        this.state = {
            companies: [],
            search: '',
        }
    }

    componentDidMount() {
        axios.get('/getAllCompanies')
        .then((response) => {
            const listOfCompanies = [];
            response.data.map((company) => {
              return listOfCompanies.push({name: company.name, title: company.appInfo.title})
            })
            this.setState({companies: listOfCompanies});
            // console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
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
    
                <div>
                    <CompanyList companies={this.state.companies} />
                </div>
            </div>
        )
    }
}


export default Companies;