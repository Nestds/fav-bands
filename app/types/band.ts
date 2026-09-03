export type BandMember = {
  name: string;
  role: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  description: string;
  image: string;
  members: BandMember[];
};