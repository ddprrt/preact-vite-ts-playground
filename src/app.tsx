import { Fragment, h } from "preact";
import { Counter } from "./Counter";
import { Logo } from "./logo";

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          With TypeScript!
        </a>
      </p>
      <Counter />
      <Counter count={1} />
    </>
  );
}
