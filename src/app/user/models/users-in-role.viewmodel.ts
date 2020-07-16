import { User } from './user.model';
export interface UsersInRole {
  roleId: string;
  users: User[];
}
