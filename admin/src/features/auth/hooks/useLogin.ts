import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api";

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginApi,
  });
};

export default useLogin;
