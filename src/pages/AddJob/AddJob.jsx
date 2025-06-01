import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AddJob = () => {
  const {user} = useAuth();
  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = data;
    // Process Currency
    newJob.salaryRange = { min, max, currency };
    // Process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((req) => req.trim());
    // Process requirements
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());
    newJob.status = 'active';

    console.log(newJob);

    // Sent All data to database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Add your Job and publish successfully!",
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
    <div>
      <h1 className="text-5xl">Please Add an job</h1>
      <form onSubmit={handleAddAJob}>
        {/* Basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input className="btn filter-reset" type="radio" aria-label="All" />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On Site"
              aria-label="On Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
          </div>
        </fieldset>

        {/* Job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Sells</option>
          </select>
        </fieldset>

        {/*application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">applicationDeadline</legend>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div>
              <label className="label mb-2">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label mb-2">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label mb-2">Currency</label>
              <select
                defaultValue="currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Job Requirements (Separate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Job Responsibilities (Separate by comma)"
          ></textarea>
        </fieldset>

        {/* HR Related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            defaultValue={user.email}
            readOnly
            className="input"
            placeholder="HR Email"
          />

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />
        </fieldset>

        {/* Submit Button */}
        <input type="submit" className="btn btn-primary " value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
