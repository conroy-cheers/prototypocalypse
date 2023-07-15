import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";
import Counter from "../islands/Counter.tsx";

export function HomeHeader() {
  return (
    <header class="bg-green-900 relative min-h-[25vh]">
      <Container class="h-full flex flex-col">
        <div class="mt-auto py-1 lg:py-2">
          <p class="text-5xl lg:text-7xl font-bold text-purple-50">
            {site.title}
          </p>
        </div>
        <div class="pb-5">
          <p class="text-3xl lg:text-4xl text-purple-50">
            {site.description}
          </p>
        </div>
      </Container>
    </header>
  );
}
