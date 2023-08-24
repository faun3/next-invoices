"use client";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: string;
}

import { deleteOneInvoice } from "@/app/invoices/[id]/page";

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  return (
    <button
      className="text-red-600 underline ml-5"
      onClick={() => {
        deleteOneInvoice(id);
        router.push("/invoices");
      }}>
      Delete
    </button>
  );
};
export default DeleteButton;
