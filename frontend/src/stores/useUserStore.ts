import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}

type Token = string | null;

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User, token: Token) => void;
  logout: () => void;
  token: Token;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: localStorage.getItem("token") ?? null,
      login: (user, token) => {
        set({ user, isAuthenticated: true, token });
        if (token) {
          localStorage.setItem("token", token);
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false, token: null });
        localStorage.removeItem("token");
      },
    }),
    { name: "user-storage" }
  )
);
