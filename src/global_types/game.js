declare type GameType = {
  id: number,
  name: string,
  imgUrl: string
};

declare type GameTypes = Array<GameType>;

declare type Game = {
  _id: string,
  city: string,
  address: string,
  gameTypeId: number,
  level: string,
  maxNbOfPlayers: number,
  description: string,
  ownerId: string,
  participantIds: Array<string>
};

declare type Games = Array<Game>;