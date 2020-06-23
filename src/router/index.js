// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Index from '../views/index.vue'
// Vue.use(VueRouter)
// import { LoadingBar } from 'view-design';
// Vue.use(LoadingBar);


const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/position',
        name: 'Position',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "position" */ '../views/position.vue')
    },
    {
        path: '/product',
        name: 'Product',
        component: () =>
            import ( /* webpackChunkName: "product" */ '../views/product.vue')
    }, {
        path: '/school',
        name: 'School',
        component: () =>
            import ( /* webpackChunkName: "product" */ '../views/school.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "product" */ '../views/login.vue')
    }
]

const router = new VueRouter({
        linkActiveClass: 'on',
        mode: 'history',
        routes
    })
    // router.beforeEach((to, from, next) => {
    //     LoadingBar.start();
    //     next();
    // });

// router.afterEach(route => {
//     LoadingBar.finish();
// });


export default router