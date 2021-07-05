import Repository from '@src/Data/Repositories/Repository';
import User from '@src/App/Entities/User';
import CreateUser from '../Usecases/CreateUser';
import GetUser from '../Usecases/GetUser';

class UserService {
  private repository: Repository;
  private getUser: GetUser;
  private createUser: CreateUser;

  constructor(repository: Repository) {
    this.repository = repository;
    this.getUser = new GetUser(this.repository);
    this.createUser = new CreateUser(repository);
  }

  async CreateUser(data: User): Promise<User> {
    const User = await this.createUser.createUser(data);

    return User;
  }

  async GetUser(): Promise<User> {
    const User = await this.getUser.getUser();

    return User;
  }
}
export default UserService;
