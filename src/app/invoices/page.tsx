const getInvoices = async () => {
  const res = await fetch(`https://api.arolariu.ro/rest/invoices`);

  if (!res.ok) {
    throw new Error("oops");
  }

  return res.json();
};

const Page = async () => {
  const data = await getInvoices();

  console.log(data);
  console.log(data[0].items[1].rawName);

  return (
    <div>
      <h1>Wow</h1>
      <h2>{data[0].items[1].rawName}</h2>
    </div>
  );
};
export default Page;
