import React from "react";
import { UserComponent, UserProps } from "./UserComponent";
import { IUserService } from "../interfaces/IUserService";

interface AdminUserProps extends UserProps {
  adminRights: string[];
  userService: IUserService; // (DIP) Dependency inversion principle  -  we got the interface and not specific implementation
}

const AdminUserComponent: React.FC<AdminUserProps> = ({
  adminRights,
  userService,
  ...userProps
}) => {
  return (
    <div>
      <UserComponent user={userProps.user} userService={userService} />
      <div className="p-4">
        <p>Admin Rights:</p>
        <ul>
          {adminRights.map((right, index) => (
            <li key={index}>{right}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { AdminUserComponent };
