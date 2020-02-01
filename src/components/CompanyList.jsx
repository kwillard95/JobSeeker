import React, { useState, useEffect } from 'react';

export default function CompanyList(props) {
   const [companies, setCompanies] = useState(props.companies);

   useEffect(() => {
    setCompanies(props.companies);
   })

   return (
       <div>
           <ul>
           {companies.map((company) => {
           return <li>{company.name} ({company.title})</li>
           })}
           </ul>
       </div>
   )
}

