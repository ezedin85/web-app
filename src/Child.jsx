import { cn } from "./utils/utils";

export default function Child({ className }) {
  let bigText = true;

  return (
    <h1 className={cn("text-black text-center", className, { "text-4xl": bigText })}>
      This is a text
    </h1>
  );
}
