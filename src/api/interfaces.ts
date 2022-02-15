type statusTypes = 'Alive' | 'variants' | 'of' | 'strings';
type genderType = 'Male' | 'Female';

export interface Character {
  id: number;
  name: string;
  status: statusTypes;
  species: string;
  type?: string;
  gender: genderType;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
