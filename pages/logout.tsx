import { useLogout } from "../hooks/auth/useLogout";
import { useEffect } from "react";

export default function LogoutPage() {
  const { logout } = useLogout();
  useEffect(() => {
    // Log out the user
    // You will need to replace "logout" with your own logout function
    logout();

    // Redirect the user to the homepage after logging out
  }, []);

  return null;
}
