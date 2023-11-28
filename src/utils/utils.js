import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

//merge classes without style conflict & also conditional class name applying
export function cn(...classNames) {
  return twMerge(clsx(classNames));
}