import { X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import type { JobApplicationList, JobApplication } from "../../types/type";
import ErrorMessage from "../ErrorMessage";

interface JobAddModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
  onAddJob: React.Dispatch<React.SetStateAction<JobApplicationList>>;
  jobToEdit?: JobApplication | null;
  onUpdateJob?: (value: JobApplication) => void;
}
const JobAddModal = ({
  open,
  onClose,
  onAddJob,
  jobToEdit,
  onUpdateJob,
}: JobAddModalProps) => {
  const [formData, setFormData] = useState<JobApplication>({
    id: JSON.stringify(Date.now()),
    title: "",
    company: "",
    location: "",
    salaryRange: "",
    status: "applied",
    appliedDate: "",
    jobDescription: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleClose() {
    onClose(false);
  }

  function handleChange(value: string, identifier: string) {
    setFormData((prevData) => ({ ...prevData, [identifier]: value }));
  }

  function validateFrom(data: JobApplication) {
    const newErrors: Record<string, string> = {};

    if (!data.title.trim()) newErrors.title = "Title is required!";
    if (!data.company.trim()) newErrors.company = "Company is required!";
    if (!data.location.trim()) newErrors.location = "Location is required!";
    if (!data.salaryRange.trim())
      newErrors.salaryRange = "Salary range is required!";
    if (!data.appliedDate.trim())
      newErrors.appliedDate = "Applied date is required!";
    if (!data.jobDescription.trim())
      newErrors.jobDescription = "Job description is required!";
    if (!data.notes.trim()) newErrors.notes = "Notes is required!";

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateFrom(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (jobToEdit) {
      if (onUpdateJob) {
        onUpdateJob(formData);
      }
    } else {
      onAddJob((prevJobs: JobApplicationList) => [...prevJobs, formData]);
    }
    setFormData({
      id: "",
      title: "",
      company: "",
      location: "",
      salaryRange: "",
      status: "",
      appliedDate: "",
      jobDescription: "",
      notes: "",
    });

    onClose(false);
  }

  useEffect(() => {
    if (jobToEdit) {
      setFormData(jobToEdit);
    }
  }, [jobToEdit]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-100 max-h-[90vh]  overflow-y-auto mx-5 md:mx-0 relative px-8 py-2 md:py-5 rounded-md w-[95%] md:w-[450px] ">
            <button
              onClick={handleClose}
              className="absolute cursor-pointer top-4 right-4"
            >
              <X />
            </button>
            <h1 className="text-gray-800 font-bold text-center text-2xl">
              Add Your Job
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-1 md:space-y-3 mt-4"
            >
              <div className="flex flex-col space-y-1">
                <label htmlFor="company">Title:</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter the company name"
                  name="title"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                  value={formData.title}
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                />
                <ErrorMessage errorMessage={errors.title} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Enter the company name"
                  name="company"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                  value={formData.company}
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                />
                <ErrorMessage errorMessage={errors.company} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  name="location"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                  value={formData.location}
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                />
                <ErrorMessage errorMessage={errors.location} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="salary">Salary Range:</label>
                <input
                  type="text"
                  id="salary"
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                  name="salaryRange"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                  value={formData.salaryRange}
                />
                <ErrorMessage errorMessage={errors.salaryRange} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                  name="status"
                  value={formData.status}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                  <option value="withdrawn">Withdrawn</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="appliedDate">Applied Date:</label>
                <input
                  type="date"
                  id="appliedDate"
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                  name="appliedDate"
                  value={formData.appliedDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                />
                <ErrorMessage errorMessage={errors.appliedDate} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="jobDescription">Job Description:</label>
                <textarea
                  id="jobDescription"
                  className=" border px-1  py-2 border-gray-400 rounded-sm outline-none"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                />
                <ErrorMessage errorMessage={errors.jobDescription} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="notes">Notes:</label>
                <input
                  type="text"
                  id="notes"
                  placeholder="Enter where you have applied from"
                  className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
                  name="notes"
                  value={formData.notes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, e.target.name)
                  }
                />
                <ErrorMessage errorMessage={errors.notes} />
              </div>
              <div className="flex items-center justify-center">
                <button className="px-10 py-2  bg-green-700 text-white text-sm rounded-sm">
                  {jobToEdit ? "Update" : "Sumit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobAddModal;
