export interface IUser {
  id: number;
  name: string;
  lastname: null | string;
  email: null | string;
  type_id: number | null;
  createdAt: Date;
  updatedAt: Date;
}