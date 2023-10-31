import { AppProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div
        class="min-h-screen grid grid-cols-1"
        style="grid-template-rows: auto 1fr auto;"
      >
        <Component />
        <Footer />
      </div>
    </>
  );
}
