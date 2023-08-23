const getInvoices = async () => {
  const res = await fetch(`https://api.arolariu.ro/rest/invoices`);

  if (!res.ok) {
    throw new Error("oops");
  }

  return res.json();
};

const Page = async () => {
  const data = await getInvoices();

  return (
    // this is a gross hack to get stuff to fit on the screen
    // tbh idk how to fix it rn so here it is
    <div className="min-h-[calc(100vh-11rem)]">
      <h1>Wow</h1>
      <h2>{data[0].items[1].rawName}</h2>
    </div>
  );
};
export default Page;
