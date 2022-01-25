import Vue from 'vue';
import App from './App.vue';

import data from './data';
import data2 from './data2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(data.message);
alert(data2.ShowMessage);
