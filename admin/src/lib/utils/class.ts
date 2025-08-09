import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNameUtils = { cn: (...args: ClassValue[]) => twMerge(clsx(args)) };
