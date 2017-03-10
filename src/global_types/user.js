declare type User = {
  id?: number,
  name: string,
  surname: string,
  profileUrl: string,
  loggedIn: boolean
};

declare type Users = Array<User>;