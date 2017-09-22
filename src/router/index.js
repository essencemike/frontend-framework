import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

// const NODE_ENV = process.env.NODE_ENV;
// const _import = require(`./import_${NODE_ENV === 'production' ? NODE_ENV : 'development'}`);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
