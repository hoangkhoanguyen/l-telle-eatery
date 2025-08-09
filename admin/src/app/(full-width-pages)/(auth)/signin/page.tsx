import SignInForm from "@/components/auth/SignInForm";
import {BUSINESS} from '@/common/constants/business'
import { Metadata } from "next";

export const metadata: Metadata = {
  title:`Login | ${BUSINESS.name}`,
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
