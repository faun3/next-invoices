import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import il1 from "@/public/il1.jpg";
import il2 from "@/public/il2.jpg";
import il3 from "@/public/il3.jpg";

export default function Home() {
  return (
    <main className="block h-fit">
      <div className="w-full overflow-hidden">
        <div className="bg-slate-900 h-[5rem]"></div>
        <div className="w-[95%] mx-auto bg-white rounded-xl relative -top-[5rem] px-10 py-10">
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
            <div className="grid grid-cols-2 gap-6 items-center justify-center place-content-center">
              <ImageCard src={il1}>view all of your invoices</ImageCard>
              <ImageCard src={il2}>
                get a detailed view of a single invoice
              </ImageCard>
              <ImageCard src={il3}>edit and delete an invoice</ImageCard>
              <div className="relative h-full flex flex-col justify-center items-center">
                <Link
                  href={"/invoices"}
                  className="bg-slate-900 rounded-lg text-xl font-bold text-white text-center hover:bg-blue-700 transition-all absolute z-10 w-[75%] h-[75%] inline-flex items-center justify-center">
                  Try Inverator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
