import { User } from "firebase/auth";
import { createContext, Dispatch, SetStateAction } from "react";

export const AuthContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}>({
  user: null,
  setUser: () => null,
});
