import { AdminUserComponent } from "../components/AdminUserComponent";
import { UserComponent } from "../components/UserComponent";
import { IUserService } from "./IUserService";

// (ISP) Interface Segregation Principle - Clients should not be forced to depend on interfaces they do not use
// only if the user want print method he will implement UserOutput interface and if not only User class.
// for example SecuredUser class dont have print method and dont need to implement UserOutput interface.
export interface UserOutput {
  print(): void;
}

export class User {
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  // (LSP) Liskov Subtitution Principle - This method can be overridden by subclasses without breaking the application.
  // even here that we dont have details we return jsx elemnt and not null
  render(userService: IUserService): JSX.Element {
    return <div></div>;
  }
}

class RegularUser extends User implements UserOutput {
  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }
  print(): void {
    console.log(`Regular User: ${this.name}, Email: ${this.email}`);
  }

  render(userService: IUserService) {
    return (
      <UserComponent
        key={this.id}
        user={{ ...this }}
        userService={userService}
      />
    );
  }
}

class AdminUser extends User implements UserOutput {
  adminRights: string[] | undefined;
  constructor(id: number, name: string, email: string, adminRights: string[]) {
    super(id, name, email);
    this.adminRights = adminRights;
  }
  print(): void {
    console.log(
      `Admin User: ${this.name}, Email: ${this.email}, adminRights: ${this.adminRights}`
    );
  }

  render(userService: IUserService) {
    return (
      <AdminUserComponent
        key={this.id}
        user={{ ...this }}
        adminRights={this.adminRights || []}
        userService={userService}
      />
    );
  }
}

class SecuredUser extends User {}

export { RegularUser, AdminUser, SecuredUser };
