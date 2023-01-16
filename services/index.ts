import { AuthService } from "./auth.service";

export const authService = new AuthService(process.env.API_HOST+"/auth");