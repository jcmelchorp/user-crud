import { v4 as uuid } from 'uuid';
export interface Role {
  id: uuid;
  name: string;
  isActive: boolean;
  dateCreated?: Date;
  dateModified?: Date;
  userIds: string[];
}
