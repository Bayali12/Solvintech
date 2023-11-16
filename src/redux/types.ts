export interface IUser {
  _id: string;
  index: number;
  picture: string;
  age: number;
  name: string;
  email: string;
  phone: string;
  about: string;
}

export interface IUserState {
  data: Array<IUser>;
  currentUser: IUser | null;
  totalUsers: number;
  startIndex: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}
