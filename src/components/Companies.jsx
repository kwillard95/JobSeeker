import React from 'react';
import axios from 'axios';
import CompanyList from './CompanyList.jsx';


class Companies extends React.Component {
    constructor() {
        super();
        this.state = {
            companies: [],
            search: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.showAllCompanies = this.showAllCompanies.bind(this);
    }

    componentDidMount() {
        axios.get('/getAllCompanies')
        .then((response) => {
            const listOfCompanies = [];
            response.data.map((company) => {
              const obj = {name: company.name}
              if (company.appInfo) {
                  obj.title = company.appInfo.title;
              } else {
                  obj.title = ''
              }
              return listOfCompanies.push(obj);
            })
            console.log('list of comps', listOfCompanies)
            this.setState({companies: listOfCompanies});
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleChange(e) {
      this.state.search = e.target.value;
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        axios.get(`/getSomeCompanies?name=${this.state.search}`)
        .then((response) => {
            const listOfCompanies = [];
            response.data.map((company) => {
                let obj = {name: company.name}
                if (!company.appInfo) {
                    obj.title = ''
                } else {
                    obj.title = company.appInfo.title;
                }
                return listOfCompanies.push(obj);
            })
            this.setState({companies: listOfCompanies});
            document.getElementById('company-search').value = '';
        })
        .catch((err) => {
            console.log(err)
        })
    }

    showAllCompanies(e) {
        e.preventDefault();
        this.componentDidMount();
    }

    render() {
        return(
            <div>
                <form>
                <input type="text" id="company-search" placeholder="Name of Company" onChange={this.handleChange}></input>
                <select>
                    <option value="all">All</option>
                    <option value="applied">Applied</option>
                    <option value="in-progress">In-Progress</option>
                </select>
                <button onClick={this.handleSearchSubmit}>Search</button>
                <button onClick={this.showAllCompanies}>Show All Companies</button>
                </form>
    
                <div>
                    <CompanyList companies={this.state.companies} />
                </div>
            </div>
        ) 
    }
}


export default Companies;