import User from '../Entities/User';
import Repository from './../../Data/Repositories/Repository';

class GetUser {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async getUser(): Promise<User> {
    const UserData = await this.repository.Find<User>();
    return UserData;
  }
}

export default GetUser;
