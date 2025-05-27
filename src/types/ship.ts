
export interface Ship {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  description: string;
  image?: string;
  owner: string;
  specifications?: {
    crew?: string;
    cargo?: string;
    role?: string;
    length?: string;
    beam?: string;
    height?: string;
  };
}
