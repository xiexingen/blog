import React from 'react';
import style from './spinner.less';

export default () => {
  return (
    <div className={style.loading}>
      <div className={style.outer}>
        <div className={`${style.inner} ${style.tl}`}></div>
        <div className={`${style.inner} ${style.tr}`}></div>
        <div className={`${style.inner} ${style.br}`}></div>
        <div className={`${style.inner} ${style.bl}`}></div>
      </div>
    </div>
  );
};
