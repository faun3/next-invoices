"use client";

interface DeleteButtonProps {
  onClickAction: (id: string) => void;
}

const DeleteButton = ({ onClickAction }: DeleteButtonProps) => {
  return (
    <button
      className="text-red-600 underline ml-5"
      onClick={() => {
        onClickAction;
      }}>
      Delete
    </button>
  );
};
export default DeleteButton;
