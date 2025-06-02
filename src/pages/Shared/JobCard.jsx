import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    description,
    company_logo,
    company,
    location,
    salaryRange,
    requirements,
    _id
  } = job;
  const salary = salaryRange || {};
  return (
    <div className="card bg-base-100  shadow-sm border">
      <div className="flex gap-2 items-center px-6 pt-3">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-2xl">{company}</h3>
          <p className="flex items-center gap-1">
            <FaLocationDot /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary : {salary?.min} - {salary?.max} {salary?.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements?.map((req, index) => (
            <div className="badge badge-outline" key={index}>
              {req}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
