import { UserDTO } from 'src/model/user';

export abstract class IUserRepository {
  abstract createUser(user: UserDTO): Promise<UserDTO>;
  abstract getUserById(id: string): Promise<UserDTO>;
  abstract getAllUsers(): Promise<UserDTO[]>;
  // update, getByEmail, delete
}
