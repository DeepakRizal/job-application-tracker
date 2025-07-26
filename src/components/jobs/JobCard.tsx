import {
  Edit,
  Trash2,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";
import { useJobContext } from "../../hooks/useJobContext";

type Status = "applied" | "interview" | "offer" | "withdrawn" | "rejected";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  date: string;
  description: string;
  notes: string;
  status: Status;
}

const statusStyles: Record<Status, string> = {
  applied: "bg-blue-100 text-blue-700 border border-blue-300",
  interview: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  offer: "bg-green-100 text-green-700 border border-green-300",
  withdrawn: "bg-red-100 text-red-700 border border-red-300",
  rejected: "bg-gray-100 text-gray-700 border border-gray-300", // optional
};

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  status,
  date,
  description,
  notes,
}: JobCardProps) => {
  const { setIsDelete, setDeleteJobId, handleEdit } = useJobContext();
  function handleEditClick() {
    handleEdit(id);
  }

  function handleDeleteClick() {
    setIsDelete(true);
    setDeleteJobId(id);
  }

  console.log(status);

  return (
    <div className="flex flex-col justify-between gap-4 border border-gray-200 shadow-sm rounded-xl p-5 w-full max-w-sm bg-white">
      {/* Header Row */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {title}
          </h2>
          <span
            className={`text-sm ${
              statusStyles[status] ?? "bg-gray-100 text-gray-600"
            } capitalize`}
          >
            {status}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleEditClick}
            className="text-gray-500 hover:text-emerald-600"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={handleDeleteClick}
            className="text-gray-500 hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Job Info Grid */}
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Building2 size={14} />
          <span>{company}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign size={14} />
          <span>{salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>Applied: {date}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

      {/* Notes */}
      <div className="bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-800">
        {notes}
      </div>
    </div>
  );
};

export default JobCard;
