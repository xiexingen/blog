import React from 'react';
import style from './absolute-margin.less';

export default () => {
  return (
    <div className={style.container}>
      <div className={style.children}></div>
    </div>
  );
};
