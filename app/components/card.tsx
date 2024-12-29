import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Position = {
  title: string;
  company: string;
  date: string;
  responsibilities: { value: string; id: number }[];
  skills: string;
};
export const Card = ({ position }: { position: Position }) => {
  return (
    <article className="flex flex-col px-8 gap-4 py-4 items-start text-foreground dark:text-background min-h-40 min-w-56">
      <div className="flex justify-between gap-4 w-full">
        <div>
          <h3 className="font-bold">{position.title}</h3>
          <span className="italic">{position.company}</span>
        </div>
        <span>{position.date}</span>
      </div>

      <ul className="list-disc list-inside text-sm">
        {position.responsibilities.map((item) => (
          <li className="list-outside list-none" key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 w-fit text-sm">
        <FontAwesomeIcon icon={faCode} />
        <p>{position.skills}</p>
      </div>
    </article>
  );
};
