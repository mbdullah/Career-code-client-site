import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetail = () => {
    const {title, company, _id} = useLoaderData();
    
    return (
        <div>
            <h1 className='text-5xl'>{title}</h1>
            <p>{company}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetail;