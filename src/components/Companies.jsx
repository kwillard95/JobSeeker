import React from 'react';
import axios from 'axios';
import CompanyList from './CompanyList.jsx';
import CompanyForm from './CompanyForm.jsx';

class Companies extends React.Component {
    constructor() {
        super();
        this.state = {
            companies: [],
            search: '',
            form: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.showAllCompanies = this.showAllCompanies.bind(this);
        this.handleAddCompany = this.handleAddCompany.bind(this);
    }

    componentDidMount() {
        axios.get('/getAllCompanies')
        .then((response) => {
            const listOfCompanies = [];
            response.data.map((company) => {
              return listOfCompanies.push({name: company.name, title: company.appInfo.title})
            })
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
              return listOfCompanies.push({name: company.name, title: company.appInfo.title})
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

    handleAddCompany(e) {
        e.preventDefault();
        this.setState({form: true})
    }

    listOfCompanies() {
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
                <button onClick={this.handleAddCompany}>Add A New Company</button>
                </form>
    
                <div>
                    <CompanyList companies={this.state.companies} />
                </div>
            </div>
        )
    }

    render() {
        if (!this.state.form) {
           return <div>{this.listOfCompanies()}</div> 
        } else {
            return <div>
              <CompanyForm />
            </div>
        }
    }
}


export default Companies;