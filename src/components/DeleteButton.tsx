"use client";

interface DeleteButtonProps {
  id: string;
}

import { deleteOneInvoice } from "@/app/invoices/[id]/page";

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <button
      className="text-red-600 underline ml-5"
      onClick={() => {
        deleteOneInvoice(id);
      }}>
      Delete
    </button>
  );
};
export default DeleteButton;
