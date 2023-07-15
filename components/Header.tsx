import { site } from "../data/site.ts";

export function Header() {
  return (
    <header class="px-3 py-3 bg-green-900 h-16 flex items-center">
      <div class="px-4 max-w-screen-md">
        <a href="/" class="text-2xl font-bold hover:text-underline text-purple-50">
        {site.title}
        </a>
      </div>
    </header>
  );
}
