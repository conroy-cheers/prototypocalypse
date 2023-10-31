import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { DefaultHead } from "../../components/DefaultHead.tsx";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";
import { Header } from "../../components/Header.tsx";
import { ServerCodePage } from "../_404.tsx";

interface Data {
  post: Post | null;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    return ctx.render({ ...ctx.state, post });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const gfmExtraCSS = `
  ul {
    list-style-type: disc
  }
  ol {
    list-style-type: decimal
  }
  `;
  const { post } = props.data;
  return post
    ? (
      <>
        <DefaultHead title={post.title} />
        <Header />
        <Container>
          <p class="font-bold text-5xl pt-20">{post.title}</p>
          <time class="inline-block mt-4">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
          <style>{gfmExtraCSS}</style>
          <article
            class="markdown-body mt-10"
            dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
          />
        </Container>
      </>
    )
    : (
      <ServerCodePage
        serverCode={404}
        codeDescription={"We couldn't find the post you're looking for."}
      />
    );
}
