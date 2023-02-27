import React from 'react';
import './spinner.less';

export default () => {
  return (
    <div className="style-loading-spinner">
      <div className="outer">
        <div className="inner tl"></div>
        <div className="inner tr"></div>
        <div className="inner br"></div>
        <div className="inner bl"></div>
      </div>
    </div>
  );
};
