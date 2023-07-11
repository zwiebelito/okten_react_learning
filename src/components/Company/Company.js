import React from 'react';
import styles from './Company.css'
const Company = ({user}) => {
    const {company: {name, catchPhrase, bs}} = user;
    return (
        <div>
            <p className={'company'}>company name: {name}, <br/>company catchPhrase: {catchPhrase}, <br/>company bs: {bs}</p>
        </div>
    );
};

export default Company;
