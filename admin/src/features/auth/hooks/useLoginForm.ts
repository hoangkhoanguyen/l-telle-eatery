import { useForm } from "react-hook-form";
import { LoginFormData } from "../interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema";

const useLoginForm = () => {
  return useForm<LoginFormData>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
};

export default useLoginForm;
