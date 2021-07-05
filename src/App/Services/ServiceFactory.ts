import UserService from './UserServices';

class ServiceFactory {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

/*   async UserGet(){

  } */

}

export default ServiceFactory;
