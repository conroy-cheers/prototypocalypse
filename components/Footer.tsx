import { Container } from "./Container.tsx"
import { site, settings } from "../data/site.ts"
export function Footer(){
  return(
    <footer class="w-full pt-10 pb-4">
      <Container>
      <div class="text-center">
        <p>
          &copy; {new Date().getFullYear()} {site.copyrightName} • <a class="hover:text-underline" href={site.viewSourceUrl}>View Source</a>
        </p>
      </div>
      </Container>
    </footer>
  )
}