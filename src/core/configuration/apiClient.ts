import axios from "axios";
import { navigateTo } from "../state/navigationStore";
import useToastStore from "../state/toastStore";

export const axiosClient = axios.create({
  // baseURL: " http://196.189.188.229:4151/API/v1.0/vacancy",//local
  baseURL: "https://196.189.188.229:4152/API/v1.0/vacancy", //prod
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data && response?.data?.status === "failed") {
      const errorMessage = response?.data?.message;
      if (errorMessage === "Session time out. Please login and try again.") {
        import("../state/toastStore").then(() => {
          import(
            "../../features/authentication/presentation/state/authStore"
          ).then(({ useAuthStore }) => {
            const authStore = useAuthStore.getState();
            const toastStore = useToastStore.getState();

            authStore.signOut();
            toastStore.addToast(errorMessage, "error");
            navigateTo("/signin");
          });
        });
      }
    }
    return response;
  },
  (error) => {
    const errorMessage = error.response?.data?.message;
    console.log("status", error);

    if (errorMessage === "Session time out. Please login and try again.") {
      import("../state/toastStore").then(() => {
        import(
          "../../features/authentication/presentation/state/authStore"
        ).then(({ useAuthStore }) => {
          const authStore = useAuthStore.getState();
          const toastStore = useToastStore.getState();

          authStore.signOut();
          toastStore.addToast(errorMessage, "error");
          navigateTo("/signin");
        });
      });
    }

    return Promise.reject(error);
  }
);



