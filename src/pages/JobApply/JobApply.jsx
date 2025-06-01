import React from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      status: "active",
      linkedin,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your Application has been submitted!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-4xl">Apply Job for..</h1>
      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Linkedin Link</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="Your Linkedin Link"
            required
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Your Github Link"
            required
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Your Resume Link"
          />

          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
