import { create } from "zustand";
import {
  editForm as editForms,
  loggedUser,
  userLoginData,
  userSignupData,
  Viewform,
} from "./types.ts";
import axios from "axios";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";

interface AuthState {
  user: loggedUser | null;
  signup: (data: userSignupData) => void;
  login: (data: userLoginData) => void;
  logout: () => void;
  fetchMe: () => void;
  createForm: (title: string) => Promise<AxiosResponse<any> | undefined>;
  editForm: editForms | null;
  getEditForm: (id: number | undefined) => void;
  publishForm: (questions: any, id: number) => void;
  userForms: editForms[] | null;
  getAllForms: () => void;
  form: Viewform | null;
  getForm: (id: any) => void;
  createResponse: (formId: number | undefined, answers: any) => void;
  getResponses: (id: number) => void;
  responses: any | null;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  editForm: null,
  userForms: null,
  form: null,
  responses: null,
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
  createForm: async (title) => {
    try {
      const res = await axios.post(
        "http://localhost:9294/api/form/create",
        { title },
        {
          withCredentials: true,
        }
      );
      return res;
    } catch (error) {
      console.error("Error in creating form");
    }
  },
  getEditForm: async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:9294/api/form/get-form/${id}`,
        {
          withCredentials: true,
        }
      );
      set({ editForm: res.data });
    } catch (error) {
      console.error("Error in getting form");
    }
  },
  publishForm: async (questions, id) => {
    try {
      const res = await axios.put(
        `http://localhost:9294/api/form/publish-form/${id}`,
        { questions },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        toast.success("Form Published");
      }
    } catch (error) {
      console.error("Error in getting form");
    }
  },
  getAllForms: async () => {
    try {
      const res = await axios.get(
        `http://localhost:9294/api/form/getAllForms`,
        {
          withCredentials: true,
        }
      );
      set({ userForms: res.data });
    } catch (error) {
      console.error("Error in getting forms");
    }
  },

  getForm: async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:9294/api/form/view-form/${id}`,
        {
          withCredentials: true,
        }
      );
      set({ form: res.data });
    } catch (error) {
      console.error("Error in getting form");
    }
  },
  createResponse: async (formId, answers) => {
    try {
      const res = await axios.post(
        "http://localhost:9294/api/form/create-response",
        { formId, answers },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        toast.success("Responded");
      }
    } catch (error) {
      console.error("Error in creating form");
    }
  },
  ///get-responses/:id
  getResponses: async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:9294/api/form/get-responses/${id}`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        set({ responses: res.data });
      }
    } catch (error) {
      console.error("Error in getting responses");
    }
  },
}));
