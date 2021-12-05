// 导入 Vue 及 vue-router
import Vue from 'vue';
import Router from 'vue-router';

// 这是 Vue 中使用插件的固定模式，
// 我们之后还会与他见面。
Vue.use(Router);

// 导入这个路由下使用的组件
// 我们还没有写首页，就用 Vue 的欢迎界面吧。
// @ 指向的目录是 src.
// import HelloWorld from '@/components/HelloWorld.vue';

const Home = () => import('@/components/Home/home')

const router = new Router({
    routes: [
        {
            path: '/', // 这是配置的路径 / 表示根目录，你可以配置/abcd 来测试效果
            name: 'home', // 指定一个路由的名字可以省很多事，当然这是可选项
            // 在这里添加导入的组件
            component: Home,
            // 本质上只是一个对象，所以可以填任意数据，
            // 本实验中为了统一，额外的属性都将放到 meta 里。
            meta: {
                title: '在线做实验，高效学编程 - 实验楼',
            },
        },
    ],
    mode: 'history'
});

/* 在每次路由变化时调用 */
router.afterEach((to) => {
    // 设置当前页面的 title 为 meta 中我们设置的 title.
    document.title = to.meta.title
})

// 导出我们刚刚配置好的路由信息
export default router;