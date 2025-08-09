import React, { FC } from "react";

const ErrorMessage: FC<{ message?: string }> = ({ message }) => {
  return <p className={`mt-1.5 text-xs text-error-500`}>{message}</p>;
};

export default ErrorMessage;
