import { types } from "mobx-state-tree";

const UserModel = types.model({
  id: types.identifierNumber,
  name: types.string,
  email: types.string,
});
export { UserModel };
