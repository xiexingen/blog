import React from 'react';
import style from './fill.less';

export default () => {
  return (
    <div className={style.loading}>
      <div className={`${style.fill}`}></div>
    </div>
  );
};
