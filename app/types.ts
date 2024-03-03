type User = {
  id: number; // Fix data type
  username: string; // Fix data type
  password: string; // Fix data type
  poeni: number; // Fix data type
  credits: number; // Fix data type
  trenerId: number; // Fix data type
  PlayerUser: PlayerUser[]; // Fix data type
  trener: Trener; // Fix data type
};

type Player = {
  id: number;
  ime: string;
  playerKolo: PlayerKolo[];
  slika: string;
  nadimak: string;
  cena: number;
  PlaerUser: PlayerUser[];
};

type Trener = {
  id: number;
  ime: string;
  slika: string;
  nadimak: string;
  xena: number;
  odeljenje: string;
  users: User[];
  trenerKolo: TrenerKolo[];
};

type Kolo = {
  id: number;
  tip: string;
  trenerKolo: TrenerKolo[];
  playerKolo: PlayerKolo[];
};

type TrenerKolo = {
  trenerId: number;
  trener: Trener;
  koloId: number;
  kolo: Kolo;
  pobeda: boolean;
  Ukupno: number;
};

type PlayerKolo = {
  playerId: number;
  player: Player;
  koloId: number;
  kolo: Kolo;
  poeni: number;
  asistencije: number;
  skokovi: number;
  ukradeneLopte: number;
  blokovi: number;
  ukupno: number;
};

type PlayerUser = {
  playerId: number;
  player: Player;
  userId: number;
  user: User;
  status: Status;
};

enum Status {
  topLeft,
  topRight,
  center,
  bottomLeft,
  bottomRight,
}
export type {
  User,
  Player,
  Trener,
  Kolo,
  TrenerKolo,
  PlayerKolo,
  PlayerUser,
  Status,
};
