import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {

    this.instance = axios.create({
      baseURL: url,
      timeout: 300000,
      timeoutErrorMessage: "Time out!",
    });

  }

  login = async (email: string, password: string) => {
    const res = await this.instance.post("/login", {
        email,
        password,
      });

      return {
        name: res.data.body.name,
        email: res.data.body.email,
        token: res.data.body.token,
      };
  };

  getMe = async (userId: string) => {
    return this.instance
      .get(`/users/${userId}`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        return res.data.body;
      });
  };

}