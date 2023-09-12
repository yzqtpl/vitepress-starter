import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.67729bda.js";const h=JSON.parse('{"title":"这是plugin的side1","description":"","frontmatter":{},"headers":[],"relativePath":"tutor/side1.md","filePath":"tutor/side1.md"}'),p={name:"tutor/side1.md"},e=l(`<h1 id="这是plugin的side1" tabindex="-1">这是plugin的side1 <a class="header-anchor" href="#这是plugin的side1" aria-label="Permalink to &quot;这是plugin的side1&quot;">​</a></h1><p>VitePress comes with its default theme providing many features out of the box. Learn more about each feature on its dedicated page listed below.</p><p>If you don&#39;t find the features you&#39;re looking for, or you would rather create your own theme, you may customize VitePress to fit your requirements.</p><h2 id="using-a-custom-theme" tabindex="-1">Using a Custom Theme <a class="header-anchor" href="#using-a-custom-theme" aria-label="Permalink to &quot;Using a Custom Theme&quot;">​</a></h2><p>You can enable a custom theme by adding the <code>.vitepress/theme/index.js</code> file (the &quot;theme entry file&quot;).</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ docs</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─ theme</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │  └─ index.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ docs</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─ theme</span></span>
<span class="line"><span style="color:#24292e;">│  │  │  └─ index.js</span></span>
<span class="line"><span style="color:#24292e;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#24292e;">│  └─ index.md</span></span>
<span class="line"><span style="color:#24292e;">└─ package.json</span></span></code></pre></div><p>A VitePress custom theme is simply an object containing three properties and is defined as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Theme</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Layout</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Vue 3 component</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">NotFound</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">enhanceApp</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ctx</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EnhanceAppContext</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EnhanceAppContext</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">app</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Vue 3 app instance</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">router</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// VitePress router instance</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">siteData</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">SiteData</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Theme</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Layout</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Vue 3 component</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">NotFound</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">enhanceApp</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ctx</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EnhanceAppContext</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EnhanceAppContext</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">app</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Vue 3 app instance</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">router</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// VitePress router instance</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">siteData</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">SiteData</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The theme entry file should export the theme as its default export:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Layout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./Layout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Layout,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// this is a Vue 3 functional component</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">NotFound</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;custom 404&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">enhanceApp</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">router</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">siteData</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// app is the Vue 3 app instance from \`createApp()\`.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// router is VitePress&#39; custom router. \`siteData\` is</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// a \`ref\` of current site-level metadata.</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Layout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./Layout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  Layout,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// this is a Vue 3 functional component</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">NotFound</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;custom 404&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">enhanceApp</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">app</span><span style="color:#24292E;">, </span><span style="color:#E36209;">router</span><span style="color:#24292E;">, </span><span style="color:#E36209;">siteData</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// app is the Vue 3 app instance from \`createApp()\`.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// router is VitePress&#39; custom router. \`siteData\` is</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// a \`ref\` of current site-level metadata.</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>...where the <code>Layout</code> component could look like this:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- .vitepress/theme/Layout.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Custom Layout!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- this is where markdown content will be rendered --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Content</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- .vitepress/theme/Layout.vue --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Custom Layout!&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- this is where markdown content will be rendered --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Content</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>The default export is the only contract for a custom theme. Inside your custom theme, it works just like a normal Vite + Vue 3 application. Do note the theme also needs to be .</p><p>To distribute a theme, simply export the object in your package entry. To consume an external theme, import and re-export it from the custom theme entry:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Theme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;awesome-vitepress-theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Theme</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Theme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;awesome-vitepress-theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Theme</span></span></code></pre></div><h2 id="extending-the-default-theme" tabindex="-1">Extending the Default Theme <a class="header-anchor" href="#extending-the-default-theme" aria-label="Permalink to &quot;Extending the Default Theme&quot;">​</a></h2><p>If you want to extend and customize the default theme, you can import it from <code>vitepress/theme</code> and augment it in a custom theme entry. Here are some examples of common customizations:</p><h3 id="registering-global-components" tabindex="-1">Registering Global Components <a class="header-anchor" href="#registering-global-components" aria-label="Permalink to &quot;Registering Global Components&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">DefaultTheme,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">enhanceApp</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// register global components</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyGlobalComponent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/* ... */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">DefaultTheme,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">enhanceApp</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">app</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// register global components</span></span>
<span class="line"><span style="color:#24292E;">    app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyGlobalComponent&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/* ... */</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Since we are using Vite, you can also leverage Vite&#39;s <a href="https://vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noreferrer">glob import feature</a> to auto register a directory of components.</p><h3 id="customizing-css" tabindex="-1">Customizing CSS <a class="header-anchor" href="#customizing-css" aria-label="Permalink to &quot;Customizing CSS&quot;">​</a></h3><p>The default theme CSS is customizable by overriding root level CSS variables:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./custom.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> DefaultTheme</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./custom.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> DefaultTheme</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* .vitepress/theme/custom.css */</span></span>
<span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-c-brand</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#646cff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-c-brand-light</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#747bff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* .vitepress/theme/custom.css */</span></span>
<span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-c-brand</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#646cff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-c-brand-light</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#747bff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>See <a href="https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css" target="_blank" rel="noreferrer">default theme CSS variables</a> that can be overridden.</p><h3 id="layout-slots" tabindex="-1">Layout Slots <a class="header-anchor" href="#layout-slots" aria-label="Permalink to &quot;Layout Slots&quot;">​</a></h3><p>The default theme&#39;s <code>&lt;Layout/&gt;</code> component has a few slots that can be used to inject content at certain locations of the page. Here&#39;s an example of injecting a component into the before outline:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MyLayout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./MyLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">DefaultTheme,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// override the Layout with a wrapper component that</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// injects the slots</span></span>
<span class="line"><span style="color:#E1E4E8;">  Layout: MyLayout</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MyLayout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./MyLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">DefaultTheme,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// override the Layout with a wrapper component that</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// injects the slots</span></span>
<span class="line"><span style="color:#24292E;">  Layout: MyLayout</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!--.vitepress/theme/MyLayout.vue--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">Layout</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> DefaultTheme</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Layout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">aside-outline-before</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      My custom sidebar top content</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Layout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!--.vitepress/theme/MyLayout.vue--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">Layout</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> DefaultTheme</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Layout</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">aside-outline-before</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      My custom sidebar top content</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Layout</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Or you could use render function as well.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MyComponent </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./MyComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">DefaultTheme,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">Layout</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(DefaultTheme.Layout, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;aside-outline-before&#39;</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(MyComponent)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MyComponent </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./MyComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">DefaultTheme,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">Layout</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(DefaultTheme.Layout, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;aside-outline-before&#39;</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(MyComponent)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Full list of slots available in the default theme layout:</p><ul><li>When <code>layout: &#39;doc&#39;</code> (default) is enabled via frontmatter: <ul><li><code>doc-before</code></li><li><code>doc-after</code></li><li><code>aside-top</code></li><li><code>aside-bottom</code></li><li><code>aside-outline-before</code></li><li><code>aside-outline-after</code></li><li><code>aside-ads-before</code></li><li><code>aside-ads-after</code></li></ul></li><li>When <code>layout: &#39;home&#39;</code> is enabled via frontmatter: <ul><li><code>home-hero-before</code></li><li><code>home-hero-after</code></li><li><code>home-features-before</code></li><li><code>home-features-after</code></li></ul></li></ul>`,33),o=[e];function t(c,r,y,i,E,d){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};