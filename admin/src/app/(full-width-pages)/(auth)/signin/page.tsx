import SignInForm from "@/features/auth/components/SignInForm";
import { BUSINESS } from "@/common/constants/business";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Login | ${BUSINESS.name}`,
  description: `This is Signin Page | ${BUSINESS.name}`,
};

export default function SignIn() {
  return <SignInForm />;
}
