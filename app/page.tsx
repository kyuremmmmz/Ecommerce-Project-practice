import  Promos  from "./components/ui/Promo/Promos";
import Promos2 from "./components/ui/Promo/Promos2";
import Sales from "./components/ui/Sales/Sales";

export default function Home() {
  return (
    <div className="grid p-8 h-screen-full  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="border w-fit h-fit mx-auto gap-2">
          <div className="md:flex-row flex flex-col justify-center items-stretch gap-2">
              <Promos />
            <div className=" flex flex-col gap-2">
              <Promos2 />
              <Promos2 />
            </div>
        </div>
      </section>
      <section className=" mx-auto gap-2">
        <div className=" flex justify-center">
          <div className="">
            <Sales />
          </div>
        </div>
      </section>
    </div>
  );
}
