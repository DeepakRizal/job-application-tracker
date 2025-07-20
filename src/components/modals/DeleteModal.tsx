import type React from "react";
import type { JobApplicationList } from "../../types/type";

interface DeleteModalProps {
  onDelete: React.Dispatch<React.SetStateAction<JobApplicationList>>;
  id: string | null;
  onCancel: (value: boolean) => void;
}

const DeleteModal = ({ onDelete, id, onCancel }: DeleteModalProps) => {
  function handleCancel() {
    onCancel(false);
  }

  function handleDelete() {
    onDelete((prevData) => prevData.filter((job) => job.id !== id));
    onCancel(false);
  }

  return (
    <div className="fixed bg-black/50 inset-0  backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white rounded-md space-y-10 shadowmd px-15 py-10">
        <h2 className="text-2xl">Are you sure you want to delete?</h2>

        <div className="flex item-center justify-center gap-5">
          <button
            onClick={handleCancel}
            className="rounded-sm px-6 py-1 text-gray-900 bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="rounded-sm px-6 py-1 text-white bg-red-500 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
