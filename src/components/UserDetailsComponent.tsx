import React from "react";
import { User } from "../interfaces/IUser";

interface UserDetailsProps {
  user: User;
}
// (SRP) Single Responsibility Principle - This component Responsible only of output the user details.

const UserDetailsComponent: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export { UserDetailsComponent };
