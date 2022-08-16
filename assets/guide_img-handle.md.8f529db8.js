import{_ as e,c as s,o as a,a as o}from"./app.ebd64f67.js";const D=JSON.parse('{"title":"Asset Handling","description":"","frontmatter":{},"headers":[{"level":2,"title":"Public Files","slug":"public-files"},{"level":2,"title":"Base URL","slug":"base-url"}],"relativePath":"guide/img-handle.md"}'),n={name:"guide/img-handle.md"},t=o(`<h1 id="asset-handling" tabindex="-1">Asset Handling <a class="header-anchor" href="#asset-handling" aria-hidden="true">#</a></h1><p>All Markdown files are compiled into Vue components and processed by <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">Vite</a>. You can, <strong>and should</strong>, reference any assets using relative URLs:</p><div class="language-md"><button class="copy"></button><span class="lang">md</span><pre><code><span class="line"><span style="color:#89DDFF;">![</span><span style="color:#C3E88D;">An image</span><span style="color:#89DDFF;">](</span><span style="color:#A6ACCD;text-decoration:underline;">./img/hero.png</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>You can reference static assets in your markdown files, your <code>*.vue</code> components in the theme, styles and plain <code>.css</code> files either using absolute public paths (based on project root) or relative paths (based on your file system). The latter is similar to the behavior you are used to if you have used <code>vue-cli</code> or webpack&#39;s <code>file-loader</code>.</p><p>Common image, media, and font filetypes are detected and included as assets automatically.</p><p>All referenced assets, including those using absolute paths, will be copied to the dist folder with a hashed file name in the production build. Never-referenced assets will not be copied. Similar to <code>vue-cli</code>, image assets smaller than 4kb will be base64 inlined.</p><p>All <strong>static</strong> path references, including absolute paths, should be based on your working directory structure.</p><h2 id="public-files" tabindex="-1">Public Files <a class="header-anchor" href="#public-files" aria-hidden="true">#</a></h2><p>Sometimes you may need to provide static assets that are not directly referenced in any of your Markdown or theme components (for example, favicons and PWA icons). The <code>public</code> directory under project root (<code>docs</code> folder if you&#39;re running <code>vitepress build docs</code>) can be used as an escape hatch to provide static assets that either are never referenced in source code (e.g. <code>robots.txt</code>), or must retain the exact same file name (without hashing).</p><p>Assets placed in <code>public</code> will be copied to the root of the dist directory as-is.</p><p>Note that you should reference files placed in <code>public</code> using root absolute path - for example, <code>public/icon.png</code> should always be referenced in source code as <code>/icon.png</code>.</p><h2 id="base-url" tabindex="-1">Base URL <a class="header-anchor" href="#base-url" aria-hidden="true">#</a></h2><p>If your site is deployed to a non-root URL, you will need to set the <code>base</code> option in <code>.vitepress/config.js</code>. For example, if you plan to deploy your site to <code>https://foo.github.io/bar/</code>, then <code>base</code> should be set to <code>&#39;/bar/&#39;</code> (it should always start and end with a slash).</p><p>All your static asset paths are automatically processed to adjust for different <code>base</code> config values. For example, if you have an absolute reference to an asset under <code>public</code> in your markdown:</p><div class="language-md"><button class="copy"></button><span class="lang">md</span><pre><code><span class="line"><span style="color:#89DDFF;">![</span><span style="color:#C3E88D;">An image</span><span style="color:#89DDFF;">](</span><span style="color:#A6ACCD;text-decoration:underline;">/vue.svg</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>You do <strong>not</strong> need to update it when you change the <code>base</code> config value in this case.</p><p>However, if you are authoring a theme component that links to assets dynamically, e.g. an image whose <code>src</code> is based on a theme config value:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;img :src=&quot;theme.logoPath&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>In this case it is recommended to wrap the path with the <a href="./api.html#withbase"><code>withBase</code> helper</a> provided by VitePress:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">withBase</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> theme </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useData</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">withBase</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">logoPath</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,20),l=[t];function p(c,r,i,d,u,y){return a(),s("div",null,l)}var F=e(n,[["render",p]]);export{D as __pageData,F as default};
