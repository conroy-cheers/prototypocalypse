import { Post } from "../utils/posts.ts";

export function PostPreview(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t">
      <a href={`/blog/${post.slug}`} class="py-12 group grid sm:grid-cols-3">
        <time>
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="sm:col-span-2">
          <p class="text-2xl font-bold group-hover:underline">{post.title}</p>
          <p class="-mt-0.5 sm:mt-1">{post.description}</p>
        </div>
      </a>
    </li>
  );
}
