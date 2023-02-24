/**
 * title: 内容自适应行数
 * description: 高度固定，让内容部分自适应剩余空间，flex就很好
 */
import React from 'react';
import style from './demo2.less';

export default () => {
  return (
    <section className={style.container}>
      <h2>2022年放假安排出炉：五一连休5天</h2>
      <article className={style.content}>
        一、元旦：2022年1月1日至3日放假，共3天。
        二、春节：1月31日至2月6日放假调休，共7天。1月29日（星期六）、1月30日（星期日）上班。
        三、清明节：4月3日至5日放假调休，共3天。4月2日（星期六）上班。
        四、劳动节：4月30日至5月4日放假调休，共5天。4月24日（星期日）、5月7日（星期六）上班。
      </article>
    </section>
  );
};
