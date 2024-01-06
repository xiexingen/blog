import { defineConfig } from "dumi";

export default defineConfig({
  // base: '/blog/',
  // publicPath: '/blog/',
  // 国内提速，部分案例会使用不了(如:web worker部分的案例)
  // publicPath: 'https://fastly.jsdelivr.net/gh/xiexingen/blog@gh-pages/', // cdn.jsdelivr.net
  // publicPath: 'https://github.com.cnpmjs.org/xiexingen/blog/tree/gh-pages/',
  favicons: [
    "https://avatars.githubusercontent.com/u/7939085",
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
  // codeSplitting: {
  //   jsStrategy: "granularChunks",
  // },
  themeConfig: {
    name: "程序有Bug",
    hd: { rules: [] },
    rtl: true,
    logo: "https://avatars.githubusercontent.com/u/7939085",
    socialLinks: {
      github: "https://github.com/xiexingen",
    },
    footer: `Open-source MIT Licensed | Copyright © 2021-present Powered by 程序有Bug`,
    prefersColor: { default: 'auto' },
  },
  // lessLoader: {
  //   // modifyVars: userConfig.theme,
  //   javascriptEnabled: true,
  // },
  // ssr: {},
});
