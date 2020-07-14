import { v4 as uuid } from 'uuid';
export interface User {
  id: uuid;
  firstName: string;
  lastName?: string;
  username?: string;
  passwordHash?: string;
  email?: string;
  rolesIds?: string[];
  coursesIds?: string[];
  photoUrl?: string;
  dateOfBirth?: Date;
  gender: 'male' | 'female' | 'unspecified';
  isOnline?: boolean;
  isTeacher?: boolean;
  isStudent?: boolean;
  isAdmin?: boolean;
  isActive?: boolean;
  dateCreated?: Date;
  dateModified?: Date;
}
