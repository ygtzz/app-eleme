import shopping from './views/shopping.vue';
import goods from './views/shopping/goods.vue';
import comment from './views/shopping/comment.vue';
import merchant from './views/shopping/merchant.vue';

export default [
    { path: '/', redirect:'/shopping' },
    { path: '/shopping', component: shopping, name:'shopping',redirect:{name:'goods'},
      children:[
          {path:'goods',component:goods,name:'goods'},
          {path:'comment',component:comment,name:'comment'},
          {path:'merchant',component:merchant,name:'merchant'}
      ]
    }
];