import React, { useState, useEffect } from 'react';
import CompanyInfo from './CompanyInfo.jsx';

export default function CompanyList(props) {
   const [companies, setCompanies] = useState(props.companies);
   const [companyWindow, setCompanyWindow] = useState(false);
   const [company, setCompany] = useState('');
   
   useEffect(() => {
    setCompanies(props.companies);
   })

   function handleCompanyClick(name) {
     setCompanyWindow(true);
     setCompany(name);
   }

   function renderWindow() {
     if (companyWindow) {
       return <div>
           <CompanyInfo company={company}/>
       </div>
     } else {
         return null;
     }
   }

   return (
       <div>
           <ul>
           {companies.map((company) => {
           return <u><li id={company.name} style={{cursor: 'pointer'}} onClick={handleCompanyClick.bind(null, company.name)}>{company.name} ({company.title})</li></u>
           })}
           </ul>
           {renderWindow()}
       </div>
   )
}

