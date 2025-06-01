import React, { use } from "react";
import { Link } from "react-router";

const MyPostedJobsList = ({ myPostedJobsByPromise }) => {
  const jobs = use(myPostedJobsByPromise);
  return (
    <div>
      <h2>Your {jobs.length} Posted Jobs Available here</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
        
             {
                jobs.map((job, index) => <tr key={job._id}>
              <th>{index+1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td><Link to={`/applications/${job._id}`}>View</Link></td>
            </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
