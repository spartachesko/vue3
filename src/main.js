import Vue from 'vue';
import App from './App.vue';

import data from './data';
import ShowMessage from './data2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(data.message);
ShowMessage(data.message);
