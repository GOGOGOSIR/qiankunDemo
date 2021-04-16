import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.use(VueRouter)
Vue.config.productionTip = false;

let router = null;
let instance = null;

function render ({ data = {}, container } = {}) {
  router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
  });
  // 同步主应用的用户信息到子应用中
  instance = new Vue({
    router,
    store,
    data () {
      return {
        parentRouter: data.router,
        parentVuex: data.store,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#appVueHash') : '#appVueHash');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap () {
  // console.log('vue app bootstraped');
}

export async function mount (props) {
  // console.log('props from main framework', props.data);
  render(props);
}

export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
