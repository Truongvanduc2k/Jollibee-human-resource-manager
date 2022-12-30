import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useAuth = create(
  devtools((set) => ({
    auth: null,
    BEARER_TOKEN: null,
    DEPARTMENT_ID: null,
    AVATAR_URL: null,
    USER_ID: null,
    ROLE: null,
    FULLNAME: null,
    signIn: (payload) => set(() => {
      localStorage.setItem("adminToken", JSON.stringify(payload));
      return ({
        BEARER_TOKEN: { headers: { 'Authorization': `Bearer ${payload.token}` } },
        DEPARTMENT_ID: payload.departmentId,
        AVATAR_URL: payload.avatarUrl,
        USER_ID: payload._id,
        ROLE: payload.role,
        FULLNAME: payload.fullname
      });
    }, false, '@auth/signIn'),
    signOut: () => set(() => {
      localStorage.removeItem("adminToken");
      return {
        auth: null,
        BEARER_TOKEN: null,
        DEPARTMENT_ID: null,
        AVATAR_URL: null,
        USER_ID: null,
        ROLE: null,
        FULLNAME: null,
      }
    }, false, '@auth/signOut'),
  })),
);

export default useAuth;
