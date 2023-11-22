export interface Equipe {
    image: string;
    fromName: string;
    id: number;
  }

  const equipes: Equipe[] = [
    {
        image: 'url_image_equipe_1',
        fromName: 'Los Angeles Lakers',
        id: 1,
    },
    {
        image: 'url_image_equipe_2',
        fromName: 'Clippers',
        id: 2,
    },
];

  export const getEquipes = () => equipes;

export const getEquipe = (id: number) => equipes.find(m => m.id === id);