import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/frontend-study/',
  // publicPath: '/frontend-study/',
  publicPath: 'https://cdn.jsdelivr.net/gh/xiexingen/frontend-study@gh-pages/',
  // publicPath:
  //   'https://github.com.cnpmjs.org/xiexingen/frontend-study/tree/gh-pages/',
  title: '程序有Bug-前端笔记',
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
});
