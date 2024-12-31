import { Footer, CardWrapper } from "./components";
import { employments } from "./utils/data";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:w-2/3 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-col gap-2 items-start">
          <h1>Eva Þóra Karlsdóttir</h1>
          <span>Forritari</span>
        </div>
        <CardWrapper title="Reynsla" cards={employments} />
      </main>
      <Footer />
    </div>
  );
}
