import ButtonViewAll from "./components/ui/Buttons/ButtonViewAll";
import Category from "./components/ui/Category/Category";
import SingleCategory from "./components/ui/Category/SingleCategory";
import  Promos  from "./components/ui/Promo/Promos";
import Promos2 from "./components/ui/Promo/Promos2";
import ExploreProducts from "./components/ui/Sales/ExploreProducts";
import Sales from "./components/ui/Sales/Sales";
import BestSellingProducts from "./components/ui/SellingProducts/BestSellingProducts";

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
      <section className=" mx-auto w-fit gap-2 border-b-2">
        <div className=" flex justify-center">
          <div className="">
            <Sales />
            <ButtonViewAll/>
          </div>
        </div>
      </section>
      <section className=" mx-auto w-fit gap-2 border-b-2">
        <div className=" flex justify-center">
          <div className="">
            <Category />
          </div>
        </div>
      </section>
      <section className=" mx-auto w-fit gap-2 border-b-2">
        <div className=" flex justify-center">
          <div className=" mb-16">
            <BestSellingProducts />
            <SingleCategory/>
          </div>
        </div>
      </section>
      <section className=" mx-auto w-fit gap-2">
        <div className=" flex justify-center">
          <div className="">
            <ExploreProducts/>
          </div>
        </div>
      </section>
    </div>
  );
}
