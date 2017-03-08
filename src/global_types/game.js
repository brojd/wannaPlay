declare type Game = {
  _id: string,
  city: string,
  address: string,
  imgUrl: string,
  level: string,
  maxNbOfPlayers: number,
  description: string,
  ownerId: string,
  participantIds: Array<string>
};

declare type Games = Array<Game>;