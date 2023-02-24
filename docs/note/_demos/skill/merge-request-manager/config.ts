import { noop } from 'lodash';
import {
  CACHE_POLICY,
  CACHE_EXPIRED_TIME,
  DEFAULT_MAX_COMBO_SIZE,
  DEFAULT_COMBO_INTERVAL,
} from './constants';

export default {
  /**
   * 缓存策略
   */
  cachePolicy: CACHE_POLICY.NETWORK_FIRST,

  /**
   * 缓存过期时间(毫秒)
   */
  expiredTime: CACHE_EXPIRED_TIME,

  /**
   * 是否开启组合
   */
  isCombo: false,

  /**
   * 最大组合长度
   */
  maxComboSize: DEFAULT_MAX_COMBO_SIZE,

  /**
   * 组合间隔时间
   */
  comboInterval: DEFAULT_COMBO_INTERVAL,

  /**
   * 异常时兜底的鉴权返回数据
   */
  fallbackResult: false,

  /**
   * 请求处理器
   */
  requestHandler: noop,
};
