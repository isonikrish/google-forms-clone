import { create } from "zustand";
import { loggedUser, userLoginData, userSignupData } from "./types.ts";
import axios from "axios";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";

interface AuthState {
  user: loggedUser | null;
  signup: (data: userSignupData) => void;
  login: (data: userLoginData) => void;
  logout: () => void;
  fetchMe: ()=> void;
  createForm: (title: string) => Promise<AxiosResponse<any> | undefined>;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  signup: async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:9294/api/user/signup",
        data,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        set({ user: res.data });
        toast.success("Signed Up");
      }
    } catch (error) {
      toast.error("Error in signing up");
    }
  },
  login: async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:9294/api/user/login",
        data,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        set({ user: res.data });
        toast.success("Logged In");

      }
    } catch (error) {
      toast.error("Error in Log in");
    }
  },
  fetchMe: async () => {
    try {
      const res = await axios.get("http://localhost:9294/api/user/me", {
        withCredentials: true,
      });
      if (res.status === 200) {
        set({ user: res.data });
      }
    } catch (error) {
      console.error("Error in Log in");
    }
  },
  logout: async () => {
    try {
      const res = await axios.post(
        "http://localhost:9294/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        set({ user: null });
        toast.success("Logged Out");

      }
    } catch (error) {
      toast.error("Error in Log out");
    }
  },
  createForm: async(title) =>{
    try {
      const res = await axios.post("http://localhost:9294/api/form/create",{title}, {
        withCredentials: true,
      });
      return res;
    } catch (error) {
      console.error("Error in Log in");
    }
  }
}));
