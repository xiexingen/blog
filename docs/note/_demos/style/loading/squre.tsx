import React from 'react';
import style from './squre.less';

export default () => {
  return (
    <div className={style.loading}>
      <div className={`${style.squre} ${style['squre-1']}`}></div>
      <div className={`${style.squre} ${style['squre-2']}`}></div>
      <div className={`${style.squre} ${style['squre-3']}`}></div>
      <div className={`${style.squre} ${style['squre-4']}`}></div>
      <div className={`${style.squre} ${style['squre-5']}`}></div>
      <div className={`${style.squre} ${style['squre-6']}`}></div>
      <div className={`${style.squre} ${style['squre-7']}`}></div>
      <div className={`${style.squre} ${style['squre-8']}`}></div>
      <div className={`${style.squre} ${style['squre-9']}`}></div>
    </div>
  );
};
