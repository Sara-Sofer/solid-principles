// (DIP) Dependency Inversion Principle - High-level modules should not depend on low-level modules. Both should depend on abstractions.
import { User, UserOutput } from "./IUser";

export interface IUserService {
  addUser(user: User): void;
  updateUser(user: User): void;
  print(user: UserOutput): void;
}
