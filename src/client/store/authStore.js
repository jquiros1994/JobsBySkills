import { reactive, readonly } from 'vue';

const state = reactive({
  isLoggedIn: false,
  userType: null,
  userData: null,
});

const methods = {
  login(type, data) {
    state.isLoggedIn = true;
    state.userType = type;
    state.userData = data;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', type);
    localStorage.setItem('userData', JSON.stringify(data));
  },
  logout() {
    state.isLoggedIn = false;
    state.userType = null;
    state.userData = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
  },
  initializeStore() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const type = localStorage.getItem('userType');
    const data = localStorage.getItem('userData');
    if (loggedIn === 'true' && type && data) {
      state.isLoggedIn = true;
      state.userType = type;
      state.userData = JSON.parse(data);
    }
  }
};

export default {
  state: readonly(state),
  methods,
};
