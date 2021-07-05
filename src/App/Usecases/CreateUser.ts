import Repository from '../../Data/Repositories/Repository';
import User from '../Entities/User';

class CreateUser {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  async createUser(data: User): Promise<User> {
    const UserData = await this.repository.Create<User>(data);
    return UserData;
  }
}

export default CreateUser;
