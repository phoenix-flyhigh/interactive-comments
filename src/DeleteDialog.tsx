import React from "react";

interface DeleteDialogProps {
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  onDelete,
  onCancel,
}: DeleteDialogProps) => {
  return (
    <div className="absolute flex justify-center items-center w-screen h-screen">
      <div className="bg-white flex flex-col p-4 gap-4 z-10 w-72 lg:w-[320px] rounded-lg">
        <h1 className="text-xl font-semibold">Delete comment</h1>
        <p className="text-grayish-blue md:text-lg text-md">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between">
          <button
            className="flex md:px-4 px-2 py-2 rounded-lg items-center justify-center bg-grayish-blue text-white font-medium"
            onClick={onCancel}
          >
            NO, CANCEL
          </button>
          <button
            className="flex md:px-4 px-2  py-2 rounded-lg items-center justify-center bg-soft-red text-white font-medium"
            onClick={onDelete}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
