export type CharacterType = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: true;
  hogwartsStaff: false;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};
