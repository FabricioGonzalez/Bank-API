import { Users } from '@Entities/index';

export interface UserUsecases {

  saveUser<Users>(model: Users, data: Users): void;
  findUser(model: Users, data: Users): Users;
  findDetailedUser(model: Users, data: Users): Users;
  updateUser(model: Users, data: Users): Users;
  deleteUser(model: Users, data: Users): void;
  
}