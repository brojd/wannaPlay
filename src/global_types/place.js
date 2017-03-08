declare type Place = {
  _id: string,
  city: string,
  address: string,
  imgUrl: string,
  description: string,
  prices: Array<string>
};

declare type Places = Array<Place>;