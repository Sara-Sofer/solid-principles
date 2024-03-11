import { User, UserOutput } from "../interfaces/IUser";
import { IUserService } from "../interfaces/IUserService";

class UserService implements IUserService {
  addUser(user: User) {
    console.log("User added", user);
  }

  updateUser(user: User) {
    console.log("User updated", user);
  }

  print(user: UserOutput) {
    // (OCP) open close principal - if a new user type added we dont need to change this print function
    // we will only add new user class that extends UserOutput interface and there we will have print func.
    user.print();
  }
}

export { UserService };
