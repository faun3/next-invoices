import { notFound } from "next/navigation";

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
    </main>
  );
};
export default Page;
