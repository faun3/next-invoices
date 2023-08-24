import Image from "next/image";

interface SmallInvoiceProps {
  invoice: {
    id: string;
    imageUri: string;
    totalAmount: number;
    // this is a date object in json string format
    identifiedDate: string;
  };
}

const SmallInvoiceCard = ({ invoice }: SmallInvoiceProps) => {
  return (
    <div>
      <Image src={invoice.imageUri} alt="" height={100} width={100}></Image>
      <div>
        <p>{invoice.totalAmount}</p>
        <p>{invoice.identifiedDate}</p>
      </div>
    </div>
  );
};
export default SmallInvoiceCard;
