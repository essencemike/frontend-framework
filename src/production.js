import Vue from 'vue';
import errLog from './store/errLog';

// 生产环境的错误日志
if (process.env === 'production') {
  Vue.config.errorHandler = (err, vm) => {
    console.groupCollapsed(window.location.href);
    console.log(err);
    console.groupEnd();

    errLog.pushLog({
      err,
      url: window.location.href,
      vm,
    });
  };
}
