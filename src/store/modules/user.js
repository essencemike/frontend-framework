import * as TYPES from '../constants';

export default {
  state: {
    user: {},
  },
  mutations: {
    [TYPES.USER_SIGNIN](state, user) {
      state.user = Object.assign({}, user);
    },
  },
  actions: {
    [TYPES.USER_SIGNIN]({ commit }, user) {
      commit(TYPES.USER_SIGNIN, user);
    },
  },
};
