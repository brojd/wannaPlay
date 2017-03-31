const Game = {
  _id: ObjectId,
  city: String,
  address: String,
  imgUrl: String,
  level: String,
  maxNbOfPlayers: Number,
  description: String,
  ownerId: String,
  participantIds: [String]
};

const User = {
  id: String,
  name: String,
  surname: String,
  profileUrl: String
};

const Place = {
  _id: ObjectId,
  city: String,
  address: String,
  imgUrl: String,
  description: String,
  prices: [String]
};
