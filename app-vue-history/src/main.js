
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render ({ container, data } = {}) {
  console.log(data, '====data====')
  router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
  });
  if (!window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__) {
    // 同步主应用的用户信息到子应用中
    instance = new Vue({
      router,
      store,
      data () {
        return {
          parentRouter: data.router,
        }
      },
      render: h => h(App),
    }).$mount('#appVueHistory');
  } else {
    const cachedInstance = window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__

    // 让当前路由在最初的 Vue 实例上可用
    router.apps.push(...cachedInstance.cachedRoute.apps)

    instance = new Vue({
      router,
      data () {
        return {
          parentRouter: data.router,
        }
      },
      render: () => cachedInstance._vnode // 从最初的 Vue 实例上获得 _vnode
    })

    // 缓存最初的 Vue 实例
    instance.cachedInstance = cachedInstance

    router.onReady(() => {
      const { fullPath } = router.currentRoute
      const { fullPath: oldFullPath } = cachedInstance.$router.currentRoute
      // 当前路由的 fullPath 和上一次卸载时不一致，则切换至新路由
      if (fullPath !== oldFullPath) {
        cachedInstance.$router.replace(fullPath)
      }
    })

    instance.$mount('#appVueHistory')
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
//测试全局变量污染
window.a = 1;
export async function bootstrap () {
  console.log('vue app bootstraped');
}

export async function mount (props) {
  console.log('props from main framework', props);
  render(props);
  // 测试一下 body 的事件，不会被沙箱移除
  // document.body.addEventListener('click', e => console.log('document.body.addEventListener'))
  // document.body.onclick = e => console.log('document.body.addEventListener')
}

export async function unmount () {
  const cachedInstance = instance.cachedInstance || instance
  window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ = cachedInstance
  if (!cachedInstance._vnode.data.keepAlive) cachedInstance._vnode.data.keepAlive = true
  cachedInstance.cachedRoute = {
    apps: [...instance.$router.apps]
  }
  instance.$destroy()
  router = null
  instance.$router.apps = []
}
