declare type Event = {
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