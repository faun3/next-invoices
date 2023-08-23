import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute w-full">
      <div className="bg-slate-900 h-[5rem]"></div>
      <div className="w-[95%] mx-auto bg-white rounded-xl relative -top-[5rem] px-10 py-6">
        <h1 className="text-3xl font-bold text-center mb-2 mt-2">
          Inverator is an app that allows you to easily manage your invoices.
        </h1>
        <h2 className="mb-10 text-center text-gray-600">
          Get ready for hassle free invoice management. <br />
          With Inverator, tracking your invoices to help with budgeting is so
          easy, it almost feels fun.
        </h2>
        <div>
          <h3 className="text-xl font-bold">
            With Inverator&apos; easy to use interface you can:
          </h3>
          <ul>
            <li>view all of your invoices</li>
            <li>get a detailed view of a single invoice</li>
            <li>edit an invoice&apos;s data</li>
            <li>delete an invoice</li>
          </ul>
          <div className="mx-auto w-fit ">
            <Link
              href={"/invoices"}
              className="bg-slate-900 px-8 py-6 rounded-full text-xl font-bold text-white inline-block text-center mx-auto  hover:bg-blue-700 transition-all">
              Try Inverator
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
