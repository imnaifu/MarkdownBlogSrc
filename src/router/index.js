import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import me from '../components/me';
import resume from '../components/resume';
import blog from '../components/blog';

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: me },
        { path: '/me', name: 'me', component: me },
        { path: '/resume', name: 'resume', component: resume },
        { path: '/blog', name: 'blog', component: blog },
    ]
})
