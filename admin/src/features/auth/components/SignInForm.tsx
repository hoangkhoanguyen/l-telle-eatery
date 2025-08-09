"use client";
import Button from "@/components/ui/button/Button";
import React from "react";
import { Controller } from "react-hook-form";
import PasswordInput from "./PasswordInput";
import useLoginForm from "../hooks/useLoginForm";
import UsernameInput from "./UsernameInput";
import { LoginFormData } from "../interface";
import useLogin from "../hooks/useLogin";

export default function SignInForm() {
  const { control, handleSubmit } = useLoginForm();

  const { mutate, isPending } = useLogin();

  const onLogin = (data: LoginFormData) => {
    console.log("login", data);
    mutate(data);
  };
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your username and password to sign in!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="space-y-6">
                <Controller
                  control={control}
                  name="username"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <UsernameInput
                      value={value}
                      onChange={onChange}
                      error={error}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <PasswordInput
                      label="Password"
                      value={value}
                      onChange={onChange}
                      error={error}
                    />
                  )}
                />
                <div>
                  <Button
                    onClick={handleSubmit(onLogin)}
                    className="w-full"
                    size="sm"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
