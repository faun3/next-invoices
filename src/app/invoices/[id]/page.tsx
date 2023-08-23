import { notFound } from "next/navigation";
import IItem from "@/types/Item";

type PageProps = {
  params: {
    id: string;
  };
};

const getOneInvoice = async (id: string) => {
  const res = await fetch(`https://api.arolariu.ro/rest/invoices/${id}`);
  if (!res.ok) return undefined;
  return res.json();
};

const Page = async ({ params }: PageProps) => {
  const invoice = await getOneInvoice(params.id);
  if (!invoice) {
    return notFound();
  }

  console.log(invoice);

  return (
    <main>
      <h1>Invoice {params.id}</h1>
      <h2>...</h2>
      {/* items table */}
      <div className="w-full px-10 py-6 bg-slate-200 rounded-lg max-w-[95%] flex flex-col mx-auto">
        <div className="justify-self-start mb-4">
          <h1 className="block text-xl font-bold">Items</h1>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left font-normal text-gray-500 pb-6">
                Raw name
              </th>
              <th className="text-right font-normal text-gray-500">QTY</th>
              <th className="text-right font-normal text-gray-500">Price</th>
              <th className="text-right font-normal text-gray-500">
                Total price
              </th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item: IItem, idx: number) => {
              return (
                <tr key={idx}>
                  <td className="pb-2">{item.rawName}</td>
                  <td className="text-right">{item.quantity}</td>
                  <td className="text-right">{item.price}</td>
                  <td className="text-right">{item.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default Page;
