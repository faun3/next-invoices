// import Image from "next/image";
import { BiSolidPencil } from "react-icons/bi";

export interface SmallInvoice {
  id: string;
  imageUri: string;
  totalAmount: number;
  // this is a date object in json string format
  identifiedDate: string;
}
interface SmallInvoiceProps {
  invoice: SmallInvoice;
}

const SmallInvoiceCard = ({ invoice }: SmallInvoiceProps) => {
  const dateText = new Date(invoice.identifiedDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
  return (
    <div className="bg-white rounded-xl my-5 mx-auto p-4 flex flex-row justify-between w-[95%] lg:w-[60%]">
      {/* the image can't be displayed because of its content type; instead of linking it downloads to the user's downloads folder  */}
      {/* <Image src={invoice.imageUri} alt="" height={100} width={100}></Image> */}
      <p className="font-bold">
        {" "}
        Invoice ID:&nbsp;
        <span className="text-gray-600 font-normal">{invoice.id}</span>
      </p>
      <div className="flex flex-row gap-6 items-center">
        <div className="flex-col flex align-end">
          <p className="block w-fit">
            🇩🇰 &nbsp;
            <span className="text-emerald-600 font-bold text-lg">
              {invoice.totalAmount}
            </span>
            &nbsp;kr
          </p>
          <p>Added on: {dateText}</p>
        </div>
        <div>
          <BiSolidPencil className="w-8 h-8 cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};
export default SmallInvoiceCard;
