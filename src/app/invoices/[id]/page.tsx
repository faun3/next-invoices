import { notFound } from "next/navigation";
import IItem from "@/types/Item";
import DeleteButton from "@/components/DeleteButton";

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

export const deleteOneInvoice = async (id: string) => {
  const res = await fetch(`https://api.arolariu.ro/rest/invoices/${id}`, {
    method: "DELETE",
  });
};

const Page = async ({ params }: PageProps) => {
  const invoice = await getOneInvoice(params.id);
  if (!invoice) {
    return notFound();
  }

  return (
    // dirty hack again
    <main className="min-h-[calc(100vh-11rem)]">
      {/* items table */}
      <div className="py-10 w-full">
        <div className="w-full px-10 py-6 bg-white rounded-xl max-w-[95%] flex flex-col mx-auto">
          <div className="justify-self-start mb-4">
            <h1 className="block text-xl font-bold">Items</h1>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-left font-normal text-gray-500 pb-4">
                  Raw name
                </th>
                <th className="text-right font-normal text-gray-500 pb-4">
                  QTY
                </th>
                <th className="text-right font-normal text-gray-500 pb-4">
                  Price
                </th>
                <th className="text-right font-normal text-gray-500 pb-4">
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
      </div>
      <div className="flex justify-center items-center">
        <div>
          <button className="rounded-xl bg-emerald-600 text-white tracking-wide font-bold px-6 py-2">
            Edit
          </button>
          <DeleteButton id={invoice.id}></DeleteButton>
        </div>
      </div>
    </main>
  );
};
export default Page;
