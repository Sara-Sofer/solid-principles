import React from "react";
import "./App.css";
import { AdminUser, RegularUser, User } from "./interfaces/IUser";
import { UserService } from "./services/UserService";

const userService = new UserService();

const App: React.FC = () => {
  const users: User[] = [
    new RegularUser(1, "John Doe", "john@example.com"),
    new AdminUser(2, "Jane Doe", "jane@example.com", [
      "create",
      "edit",
      "delete",
    ]),
  ];

  return (
    <div className="App">
      <h1>User Profiles</h1>
      {users.map((user) => {
        // (OCP) open close principal - if a new user type added we dont need to change here
        // we will only add new user class that extends User and there we will have render func.
        // we have render func in each class that dervies from User class
        return user.render(userService);
      })}
    </div>
  );
};

export { App };
