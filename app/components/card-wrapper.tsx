import { Card } from "./card";
import type { Employment } from "app/utils/types";

export const CardWrapper = ({
  title,
  cards,
}: {
  title: string;
  cards: Employment[];
}) => {
  return (
    <section className="w-full">
      <h2 className="my-4">{title}</h2>
      <div className="border-l border-slate-900 dark:border-stone-50 flex flex-col gap-12">
        {cards.map((card) => (
          <Card key={card.id} position={card.position} />
        ))}
      </div>
    </section>
  );
};
