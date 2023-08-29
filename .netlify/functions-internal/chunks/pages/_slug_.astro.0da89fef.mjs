import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, u as unescapeHTML, F as Fragment } from '../astro.775759ed.mjs';
import { w as wpquery } from './404.astro.24805ff3.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                         */
const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await wpquery({
    query: `
      query Post {
        posts {
          nodes {
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
                srcSet
                sizes
                altText
              }
            }
            content
            author {
              node {
                name
              }
            }
          }
        }
      }
    `
  });
  return data.data.posts.nodes.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section>
  <img${addAttribute(post.featuredImage.node.mediaItemUrl, "src")}${addAttribute(post.featuredImage.node.alt, "alt")}>

  <h1>${post.title}</h1>

  <p class="byline">Written by ${post.author.node.name}</p>

  ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(post.content)}` })}

  <p>
    <a href="/blog/">&larr; back to all posts</a>
  </p>
</section>`;
}, "E:/Learning/Astro/giv-money/src/pages/blog/[slug].astro", void 0);

const $$file = "E:/Learning/Astro/giv-money/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
