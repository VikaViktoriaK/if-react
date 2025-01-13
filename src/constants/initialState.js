import { authStatuses } from "./authStatuses";

export const INITIAL_STATE = {
  auth: {
    status: authStatuses.loggedOut,
  },
  user: {
    id: null,
    email: null,
    name: null,
  },
};
