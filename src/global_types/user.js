declare type User = {
  id?: number,
  first_name: string,
  last_name: string,
  link: string,
  gender: string,
  imgUrl: string,
  loggedIn: boolean
};

declare type Users = Array<User>;