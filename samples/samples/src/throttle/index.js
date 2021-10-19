/**
 * 函数节流
 * - 支持立即执行
 * - 支持取消功能
 * - 函数可能有返回值
 * @param {function} func 执行的事件
 * @param {number} wait 高频延迟时间 毫秒
 * @param options.trailing // 是否可以立即执行一次
 * @param options.leading // 结束调用的时候是否还要执行一次
 * @returns function
 */
function throttle(func, wait, options) {
  let timeout, context, args;
  let previous = 0;
  if (!options) {
    options = {};
  }

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function () {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  return throttled;
}

(function init() {
  // 定义节流,立即执行
  const throttleGetUserAction = throttle(getUserAction, 1000);
  // 使用节流绑定
  document.body.onmousemove = throttleGetUserAction;

  // 取消节流
  // throttleGetUserAction.cancel();

  // 输出鼠标坐标到界面上
  function getUserAction(e) {
    const p = document.createElement('p');
    p.innerText = `clientX:${e.clientX},clientY:${e.clientX}`;
    document.body.appendChild(p);
  }
})();
