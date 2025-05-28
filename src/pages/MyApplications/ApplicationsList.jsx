import React, { use, useState } from "react";
import ApplicationsRow from "./ApplicationsRow";
import Swal from "sweetalert2";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const initial = use(myApplicationsPromise);
  const [applicationsList, setApplicationList] = useState(initial);

  const handleDeleteApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/applications/${id}`, {
            method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = applicationsList.filter(application => application._id !== id)
              setApplicationList(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1>Your Applications is so far : {applicationsList.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <p>#</p>
                </label>
              </th>
              <th>Name</th>
              <th>Linkedin & Github</th>
              <th>Resume</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applicationsList.map((application, index) => <ApplicationsRow
                key={application._id}
                application = {application}
                index = {index}
                handleDeleteApplication = {handleDeleteApplication}
                >
                </ApplicationsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
