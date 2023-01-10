import Cookies from "js-cookie";
import Router from "next/router";

export const useLogout = () => {
  const logout = () => {
    Cookies.remove("currentUser");
    Router.push("/login");
  };

  return { logout };
};