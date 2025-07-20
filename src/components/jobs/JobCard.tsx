import {
  Edit,
  Trash2,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  date: string;
  description: string;
  notes: string;
  status: string;
}

const JobCard = ({
  title,
  company,
  location,
  salary,
  status,
  date,
  description,
  notes,
}: JobCardProps) => {
  return (
    <div className="flex border border-gray-300 shadow-md rounded-md justify-between  items-start px-5 py-8">
      <div className="space-y-2">
        <h2 className="text-2xl text-gray-800 font-bold">{title}</h2>
        <div className="flex text-gray-500 text-[12px] items-center justify-between">
          <div className="flex  items-center justify-center">
            <Building2 height={15} />
            <span>{company}</span>
          </div>
          <div className="flex  items-center justify-center">
            <MapPin height={15} />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-500  text-[12px] justify-between">
          <div className="flex  items-center justify-center">
            <DollarSign height={15} />
            <span> {salary}</span>
          </div>
          <div className="flex  items-center justify-center">
            <Calendar height={15} />
            <span>Applied: {date}</span>
          </div>
        </div>
        <p className="text-[15px] text-gray-700">{description}</p>
        <div className="bg-gray-300 p-2 rounded-md">
          <p className="text-[15px] text-gray-900">{notes}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <p>{status}</p>
        <button>
          <Edit />
        </button>
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
