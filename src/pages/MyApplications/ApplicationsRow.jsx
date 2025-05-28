import React from "react";

const ApplicationsRow = ({ application, index, handleDeleteApplication}) => {
  const { linkedin, resume, github, company, title, company_logo, _id } =
    application;
  
  return (
    <tr>
      <th>
        <label>
          <p>{index + 1}</p>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>
        {linkedin}
        <br />
        <span className="badge badge-ghost badge-sm">{github}</span>
      </td>
      <td>{resume}</td>
      <th>
        <button
          onClick={() => handleDeleteApplication(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ApplicationsRow;
