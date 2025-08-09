import React, { ComponentProps, FC } from "react";
import Button from "./Button";
import { classNameUtils } from "@/lib/utils/class";

type ButtonProps = ComponentProps<typeof Button>;

const variantsVariant: Record<NonNullable<ButtonProps["variant"]>, string> = {
  outline:
    "text-error-600 dark:text-error-500 ring-bg-error-500 dark:ring-error-500",
  primary: "bg-error-50 dark:bg-error-500/15",
};

const DangerButton: FC<ButtonProps> = ({
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <Button
      className={classNameUtils.cn(variantsVariant[variant], className)}
      {...props}
      variant={variant}
    />
  );
};

export default DangerButton;
