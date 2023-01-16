import { authService } from "../../services";
import Cookies from "js-cookie";
import { User } from "../../types/user";

const useLogin = () => {
  const login = async (email: string, password: string): Promise<User | undefined> => {
    try {
      const user = await authService.login(email, password);
      if (user) {
        Cookies.set("currentUser", JSON.stringify(user));
      }
      return user as User;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return { login };
};

export default useLogin;