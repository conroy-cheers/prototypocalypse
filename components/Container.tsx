import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  class?: string;
}

export function Container(props: Props) {
  return <div class={`px-4 mx-auto max-w-screen-md ${props.class}`}>{props.children}</div>;
}
