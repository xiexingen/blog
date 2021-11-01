/**
 * 函数防抖
 *  - 支持立即执行
 *  - 支持取消
 *  - 函数可能有返回值
 * @param func 执行的函数
 * @param wait 高频执行延迟时间 毫秒
 * @param immediate 是否立即执行(默认为false)
 */
export function debounce(
  func: Function,
  wait: number,
  immediate: boolean = false,
) {
  let timeout;
  const debounced = function () {
    // 注意写法，此处使用非箭头函数，里面使用的this指向调用的对象
    // @ts-ignore
    const context = this;
    const args = arguments;
    // 如果有，则清空之前的
    timeout && clearTimeout(timeout);
    if (immediate) {
      // 第一次是否立即执行,此处只要第一次进入会满足
      if (timeout === undefined) {
        func.apply(context, args);
      }
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
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

/**
 * 函数节流
 *  - 支持立即执行
 *  - 支持取消
 *  - 函数可能有返回值
 * @param func 执行的函数
 * @param wait 高频执行延迟时间 毫秒
 * @param {
 *  trailing:false, // 是否可以立即执行一次
 *  leading:false ,// 结束调用的时候是否还要执行一次
 * }
 */
export function throttle(
  func: Function,
  wait: number,
  options?: {
    trailing?: boolean;
    leading?: boolean;
  },
) {
  let timeout, context, args;
  let previous = 0;
  if (!options) {
    options = {
      leading: false,
      trailing: false,
    };
  }

  const later = function () {
    previous = options?.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function () {
    const now = new Date().getTime();
    if (!previous && options?.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    // @ts-ignore
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
    } else if (!timeout && options?.trailing !== false) {
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
