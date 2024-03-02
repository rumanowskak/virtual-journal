import {atom} from 'recoil';


export interface User {
  id?: string;
  email: string|null;
  password: string|null,
  username:string|null;
}
export const UserState = atom({
    key: 'User',
    default: {} as User
  });