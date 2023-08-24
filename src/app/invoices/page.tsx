import SmallInvoiceCard from "@/components/SmallInvoiceCard";
import { SmallInvoice } from "@/components/SmallInvoiceCard";

const getInvoices = async () => {
  const res = await fetch(`https://api.arolariu.ro/rest/invoices`);

  if (!res.ok) {
    throw new Error("oops");
  }

  return res.json();
};

const Page = async () => {
  const data = (await getInvoices()) as SmallInvoice[];

  return (
    // this is a gross hack to get stuff to fit on the screen
    // tbh idk how to fix it rn so here it is
    <div className="min-h-[calc(100vh-11rem)]">
      {data.map((invoice) => {
        return <SmallInvoiceCard key={invoice.id} invoice={invoice} />;
      })}
    </div>
  );
};
export default Page;
