import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useAuth = create(
  devtools((set) => ({
    payload: null,
    signIn: (payload) => set(() => {
      localStorage.setItem("adminToken", JSON.stringify(payload));
      return ({ payload: payload });
    }, false, '@auth/signIn'),
    signOut: () => set(() => {
      localStorage.removeItem("adminToken");
      return { payload: null }
    }, false, '@auth/signOut'),
  })),
);

export default useAuth;
