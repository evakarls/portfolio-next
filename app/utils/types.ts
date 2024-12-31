export type Position = {
  title: string;
  company: string;
  date: string;
  responsibilities: { value: string; id: number }[];
  skills: string;
};

export type Employment = {
  id: number;
  position: Position;
};
