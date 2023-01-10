import Cookies from "js-cookie";

export function getAuthorizationHeader() {
  const currentUser = Cookies.get("email");

  return {
    Authorization: `Bearer ${JSON.parse(currentUser || "")?.token || ""}`,
  };
}