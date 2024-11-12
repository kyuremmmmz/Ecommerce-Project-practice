import Promos from "./components/ui/Promo/Promos";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center">
        <div className=" grid grid-cols-2 gap-1">
          <Promos />
          <div className=" grid grid-cols-1 gap-2">
            <div className='flex flex-row justify-center items-center gap-2'>
              <div className=' h-60 w-96 bg-black'>
                fsdfs
              </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-2'>
              <div className=' h-60 w-96 bg-black'>
                fsdfs
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
