/**
 * title: 超出 2 行省略
 * description: 通过-webkit-line-clamp实现
 */
import React from 'react';
import style from './demo1.less';

export default () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>
        2022年放假安排出炉：五一连休5天
        春节国庆均休7天，元旦：2022年1月1日至3日放假，共3天，春节：1月31日至2月6日放假调休，共7天。1月29日（星期六）、1月30日（星期日）上班，清明节：4月3日至5日放假调休，共3天。4月2日（星期六）上班
      </h2>
    </section>
  );
};
