import { defineConfig } from 'dumi';

export default defineConfig({
  // base: '/blog/',
  // publicPath: '/blog/',
  // 国内提速，部分案例会使用不了(如:web worker部分的案例)
  // publicPath: 'https://fastly.jsdelivr.net/gh/xiexingen/blog@gh-pages/', // cdn.jsdelivr.net
  // publicPath: 'https://github.com.cnpmjs.org/xiexingen/blog/tree/gh-pages/',
  title: '程序有Bug-秘密基地',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  exportStatic: {},
  //mfsu: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  styles: [
    `
    .markdown table td:first-child {
      font-weight: 500;
      background: #fcfcfc;
    }
    .markdown table td > a:not(:last-child) {
      margin-right: 18px;
    }
    .markdown table td > a:not(:last-child)::after {
      position: absolute;
      margin: 0 6px 0 8px;
      color: #bbb;
      content: '|';
      pointer-events: none;
    }`,
  ],
  // links: [
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
  //   },
  //   { rel: 'stylesheet', href: '/style.css' },
  // ],
  // copy: ['CNAME'], // 自定义域名,放public文件夹即可
  navs: {
    'en-US': [
      { title: '笔记', path: '/note' },
      { title: 'Docker', path: '/docker' },
      { title: 'Rust', path: '/rust' },
      { title: '随笔', path: '/articles' },
      { title: '珍藏', path: '/collection' },
      {
        title: '其他',
        children: [
          {
            title: '个人博客(老的)',
            path: 'http://old-blog.xxgtalk.cn',
          },
          {
            title: '博客园(已经不玩了)',
            path: 'https://www.cnblogs.com/xiexingen',
          },
          {
            title: '手撕ahooks',
            path: 'https://xiexingen.github.io/hand-tear-ahooks/hooks/async/use-request',
          },
          {
            title: 'Wetrial',
            path: 'https://github.com/wetrial',
          },
        ],
      },
      { title: 'GitHub', path: 'https://github.com/xiexingen' },
    ],
  },
  webpack5: {},
});
