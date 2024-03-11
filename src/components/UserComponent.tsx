import React from "react";
import { IUserService } from "../interfaces/IUserService";
import { UserDetailsComponent } from "./UserDetailsComponent";
import { User } from "../interfaces/IUser";

export interface UserProps {
  user: User;
  userService: IUserService; // (DIP) Dependency inversion principle  - we got the interface and not specific implementation
}

const UserComponent: React.FC<UserProps> = ({ user, userService }) => {
  // Use userService to interact with user data

  return (
    <div className="p-4 border rounded shadow">
      <UserDetailsComponent user={user} />
      <button onClick={() => userService.updateUser(user)}>updateUser</button>
    </div>
  );
};

export { UserComponent };
