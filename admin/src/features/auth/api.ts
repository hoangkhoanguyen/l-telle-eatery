import { ROUTES } from "@/common/constants/route";
import { LoginFormData } from "./interface";
import axios from "axios";

export function loginApi(body: LoginFormData) {
  return axios.post(ROUTES.loginApi, body);
}
