import Promos from "./components/ui/Promo/Promos";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2">
        <Promos/>
      </main>
    </div>
  );
}
