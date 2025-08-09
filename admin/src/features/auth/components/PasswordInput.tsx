"use client";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import React, { FC, useState } from "react";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import { FormFieldProps } from "@/types/global";
import ErrorMessage from "@/components/form/input/ErrorMessage";

const PasswordInput: FC<FormFieldProps<string>> = ({
  value,
  error,
  onChange,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label>
        {label} <span className="text-error-500">*</span>{" "}
      </Label>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          error={!!error}
          // hint={error?.message}
          defaultValue={value}
          onChange={onChange && ((e) => onChange(e.target.value))}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
        >
          {showPassword ? (
            <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
          ) : (
            <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
          )}
        </span>
      </div>
      <ErrorMessage message={error?.message} />
    </div>
  );
};

export default PasswordInput;
