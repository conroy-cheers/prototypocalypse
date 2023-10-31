import { Head } from "$fresh/runtime.ts";
import { toChildArray } from "preact";
import { JSX } from "preact/jsx-runtime";
import { site } from "../data/site.ts";

interface HeadOptions {
  title?: string;
  description?: string;
  link?: string;
  children?: JSX.Element | JSX.Element[];
}

export function DefaultHead(options: HeadOptions) {
  const title = options.title || site.title;
  const description = options.description || site.description;
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/* Theme */}
        <meta name="theme-color" content="#000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={site.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={site.ogImage} />

        {...toChildArray(options.children)}
      </Head>
    </>
  );
}
