export interface Joueur {
    nom: string;
    position: string;
    numero: number;
    equipeId: number;
    MJ : number;
    PPM: number;
    RPM: number;
    PDPM: number;
    MPM: number;
    EFF: number;
    FG: number;
    ThreeP: number;
    LF: number;
}

const joueurs: Joueur[] = [
    {
        nom: "LeBron James",
        position: 'Ailier fort',
        numero: 23,
        equipeId: 1,
        MJ : 10,
        PPM: 10,
        RPM: 20,
        PDPM: 20,
        MPM: 10,
        EFF: 20,
        FG: 10,
        ThreeP: 2,
        LF: 10,
      },
    {
        nom: 'Stephen Curry',
        position: 'Ailier fort',
        numero: 20,
        equipeId: 1,
        MJ : 12,
        PPM: 25,
        RPM: 5,
        PDPM: 10,
        MPM: 30,
        EFF: 28,
        FG: 45,
        ThreeP: 40,
        LF: 90,
    },
    {
        nom: 'Giannis Antetokounmpo',
        position: 'Meneur de jeu',
        numero: 3,
        equipeId: 1,
        MJ : 11,
        PPM: 30,
        RPM: 15,
        PDPM: 8,
        MPM: 32,
        EFF: 32,
        FG: 55,
        ThreeP: 25,
        LF: 78,
    },
    {
        nom: 'Kevin Durant',
        position: 'Pivot',
        numero: 10,
        equipeId: 1,
        MJ : 9,
        PPM: 28,
        RPM: 7,
        PDPM: 12,
        MPM: 34,
        EFF: 30,
        FG: 50,
        ThreeP: 38,
        LF: 88,
    },
    {
        nom: 'Kawhi Leonard',
        position: 'Pivot',
        numero: 30,
        equipeId: 1,
        MJ : 12,
        PPM: 27,
        RPM: 8,
        PDPM: 5,
        MPM: 33,
        EFF: 29,
        FG: 48,
        ThreeP: 35,
        LF: 87,
    },
    {
        nom: 'James Harden',
        position: 'Pivot',
        numero: 2,
        equipeId: 2,
        MJ : 11,
        PPM: 32,
        RPM: 6,
        PDPM: 11,
        MPM: 36,
        EFF: 31,
        FG: 47,
        ThreeP: 37,
        LF: 89,
    },
    {
        nom: 'Luka Doncic',
        position: 'Pivot',
        numero: 8,
        equipeId: 2,
        MJ : 9,
        PPM: 29,
        RPM: 9,
        PDPM: 11,
        MPM: 35,
        EFF: 31,
        FG: 52,
        ThreeP: 33,
        LF: 87,
    },
];

export const getJoueurs = () => joueurs;

export const getJoueursEquipe = (equipeId: number) => joueurs.filter(joueur => joueur.equipeId === equipeId);
