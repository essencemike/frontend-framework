import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui';
import moxios from 'moxios';

import App from './Hello';

Vue.use(Vuex);
Vue.use(Element);

describe('App.vue', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());
  it('name is app', () => {
    expect(App.name).to.be.equal('hello');
  });
});
