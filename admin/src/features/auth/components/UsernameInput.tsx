import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import { FormFieldProps } from "@/types/global";
import React, { FC } from "react";

const UsernameInput: FC<FormFieldProps<string>> = ({
  value,
  error,
  onChange,
  label = "Username",
}) => {
  return (
    <div>
      <Label>
        {label} <span className="text-error-500">*</span>
      </Label>
      <Input
        error={!!error}
        hint={error?.message}
        defaultValue={value}
        onChange={onChange && ((e) => onChange(e.target.value))}
      />
    </div>
  );
};

export default UsernameInput;
