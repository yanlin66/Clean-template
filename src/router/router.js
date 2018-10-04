import App from '../App';

const loading = r => require.ensure([], () => r(require('../page/index/loading')), 'loading');
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index');

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
      {
        path: '',
        redirect: '/loading'
      },
      //loading
      {
        path: '/loading',
        component: loading
      },
      //首页
      {
        path: '/index',
        component: index
      },
    ]
}]
