import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.775759ed.mjs';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/index@_@astro.0bb36ce8.mjs');
const _page1  = () => import('./chunks/_slug_@_@astro.6df2e088.mjs');
const _page2  = () => import('./chunks/404@_@astro.3b820f78.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/blog/[slug].astro", _page1],["src/pages/404.astro", _page2]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const c=document.querySelector(\".navbar-nav\"),e=c.querySelectorAll(\"a\"),n=window.location.href;e.forEach(a=>{a.href===n&&a.classList.add(\"active\")});\n"}],"styles":[{"type":"external","src":"/_astro/404.7655a780.css"},{"type":"external","src":"/_astro/index.0d57058f.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const c=document.querySelector(\".navbar-nav\"),e=c.querySelectorAll(\"a\"),n=window.location.href;e.forEach(a=>{a.href===n&&a.classList.add(\"active\")});\n"}],"styles":[{"type":"external","src":"/_astro/404.7655a780.css"},{"type":"external","src":"/_astro/404.fb5207e1.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["E:/Learning/Astro/giv-money/src/pages/404.astro",{"propagation":"none","containsHead":true}],["E:/Learning/Astro/giv-money/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog/[slug].astro":"chunks/pages/_slug_.astro.0da89fef.mjs","/src/pages/index.astro":"chunks/pages/index.astro.9b897310.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.0bb36ce8.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug_@_@astro.6df2e088.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.3b820f78.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.764e522f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.7655a780.css","/_astro/404.fb5207e1.css","/_astro/index.0d57058f.css","/favicon.svg","/images/airbnb.png","/images/google.png","/images/microsoft.png","/images/slack.png","/style/global.css","/style/navbar.css","/style/var.css","/svg/cpu.svg","/svg/dollar-sign.svg","/svg/ornament-left.svg","/svg/ornament-right.svg","/svg/Ornament.svg","/svg/shield.svg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
