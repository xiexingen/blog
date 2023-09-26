/**
 * title: 虚拟渲染
 * description: 元素高度不固定的虚拟列表
 */
import React from 'react';
import { generateData } from '../bigdata'
import DynamicSizeList from './components/dynamic-size-list'

const list = generateData(10000);

// 模拟一些图片数据
const imgs = [
  'https://img0.baidu.com/it/u=797215555,3360325923&fm=253&fmt=auto&app=138&f=PNG?w=452&h=500',
  'https://img2.baidu.com/it/u=3388533778,1205101016&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F7cfe7823-6865-44c2-ba9f-cfcf37762bd9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695862729&t=9fc9eb3bbe540ab3158b8b2df232985b',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fd6bd55d7-b0c1-460b-810a-4cd684389e36%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695862729&t=396ac64ad5ff06cfb050ca4f13d716b2',
  'https://i0.hdslb.com/bfs/article/f93c38ebe3cb16e622702108261e764f12860e42.jpg',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F07%2F20140407215440_HHeUt.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695862728&t=c1833a63ae9814079dd4ad664592ecf7',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F14%2F20200814183322_glqmz.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695862728&t=e4a56b36c8c20a03a9ee9261f48e91c6'
]

export default () => {
  return (
    <DynamicSizeList
      height={300}
      dataSource={list}
      defaultItemHeight={40}
      renderItem={({ data, index, style }) => {
        return (
          <div className={`item ${index % 2 == 0 ? 'list-item-even' : 'list-item-odd'}`} style={style}>
            {data.id} - {data.name} - {data.age} - {data.address} -{data.salary}
            <img src={imgs[index % imgs.length]} style={{ width: '100%', height: '100%' }} />
          </div>
        )
      }}
    />
  );
};
