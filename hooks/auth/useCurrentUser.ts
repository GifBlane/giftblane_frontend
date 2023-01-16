import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User } from "../../types/user";
import { authService } from "../../services";

const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = Cookies.get("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const refetchUser = async (userId: string) => {
    try {
      const userInfo = await authService.getMe(userId);
      const currentUser = Cookies.get("currentUser");

      if (userInfo && currentUser) {
        const newUser = {
          ...JSON.parse(currentUser),
          email: userInfo.username,
          avatar: userInfo.avatar,
        };
        Cookies.set("currentUser", JSON.stringify(newUser));
        setUser(newUser);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { user, refetchUser };
};

export default useCurrentUser;