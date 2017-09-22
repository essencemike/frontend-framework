import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from './router';
// import getComponentByPath from './utils/common';
// import store from './store';

// const NODE_ENV = process.env.NODE_ENV;

// function isSameSystem(system, systems) {
//   return systems.some(item => item === system);
// }

// function hasPermission(permission, permissions) {
//   return permissions.some(item => item === permission);
// }

// 配置router切换时，显示进度条
// 以后还可以配置权限验证
NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
  NProgress.start();
  // if (to.meta.system && to.meta.auth &&
  //   isSameSystem(store.getters.system, to.meta.system) &&
  //   hasPermission(to.meta.auth, store.getters.permissions)) {
  //   next();
  // } else {
  //   if (NODE_ENV === 'production') {
  //     window.location.href = '/403';
  //   }
  //   next();
  // }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
