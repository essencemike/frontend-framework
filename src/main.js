// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';

// css文件
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'element-ui/lib/theme-default/index.css';

// 入口组件，以及路由、vuex
// 生产环境的错误日志
import '@/production';
import '@/permission';
import App from './App';
import router from './router';
import store from './store';

import components from './components';
import directives from './directive';
import filters from './filters';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Object.keys(components).forEach(key => Vue.component(key, components[key]));

Object.keys(directives).forEach(key => Vue.directive(key, directives[key]));

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
