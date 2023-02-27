import { defineConfig } from "dumi";

export default defineConfig({
  // base: '/blog/',
  // publicPath: '/blog/',
  // 国内提速，部分案例会使用不了(如:web worker部分的案例)
  // publicPath: 'https://fastly.jsdelivr.net/gh/xiexingen/blog@gh-pages/', // cdn.jsdelivr.net
  // publicPath: 'https://github.com.cnpmjs.org/xiexingen/blog/tree/gh-pages/',
  favicons: [
    "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  ],

  outputPath: "docs-dist",
  // mode: 'site',
  // more config: https://d.umijs.org/config
  exportStatic: {},
  // styles: [],
  // links: [
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
  //   },
  //   { rel: 'stylesheet', href: '/style.css' },
  // ],
  // copy: ['CNAME'], // 自定义域名,放public文件夹即可
  codeSplitting: {
    jsStrategy: "granularChunks",
  },
  themeConfig: {
    name: "程序有Bug-秘密基地",
    logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
    socialLinks: {
      github: "https://github.com/xiexingen",
    },
    footer: false,
  },
  lessLoader: {
    // modifyVars: userConfig.theme,
    javascriptEnabled: true,
  },
  // ssr: {},
});
