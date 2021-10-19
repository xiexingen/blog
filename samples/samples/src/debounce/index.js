/**
 * 函数防抖
 * - 支持立即执行
 * - 支持取消功能
 * - 函数可能有返回值
 * @param {function} func 执行的事件
 * @param {number} wait 高频延迟时间 毫秒
 * @param {boolean?} immediate 是否立即执行 【可选】
 * @returns function
 */
function debounce(func, wait, immediate) {
  let timeout;
  const debounced = function () {
    const context = this;
    const args = arguments;

    timeout && clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行，则不再执行
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

(function init() {
  // 定义防抖,立即执行
  const debounceGetUserAction = debounce(getUserAction, 200);
  // 使用防抖绑定
  document.body.onmousemove = debounceGetUserAction;

  // 取消防抖
  // debounceGetUserAction.cancel();

  // 输出鼠标坐标到界面上
  function getUserAction(e) {
    const p = document.createElement('p');
    p.innerText = `clientX:${e.clientX},clientY:${e.clientX}`;
    document.body.appendChild(p);
  }
})();
