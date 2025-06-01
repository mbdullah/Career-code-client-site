import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const data = useLoaderData();

  const handleUpdateStatus = (e, ap_id) => {
    console.log(e.target.value, ap_id);

    axios
      .patch(`http://localhost:3000/applications/${ap_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Status Update successfully!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-10">
      <h2>
        {data.length} Applications for : {job_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant</th>
              <th>Resume</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.applicant}</td>
                <td>{app.resume}</td>
                <td>
                  <select
                    onChange={(e) => handleUpdateStatus(e, app._id)}
                    defaultValue={app.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
