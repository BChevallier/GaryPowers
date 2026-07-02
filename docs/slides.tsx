import JSX from "docs/jsx.ts";
import { presentation } from "docs/sections/presentation.tsx";

export function slides() {
  return <div class="slides">{presentation()}</div>;
}
