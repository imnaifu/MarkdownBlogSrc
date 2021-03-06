import Vue from 'vue';
import Router from 'vue-router';
import me from '../components/me';
import resume from '../components/resume';
import blog from '../components/blog';
import blog_default from '../components/blog_default';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', redirect: '/me'},
        { path: '/me', name: 'me', component: me },
        { path: '/resume', name: 'resume', component: resume },
        { path: '/blog', name: 'blog', component: blog_default},
        { path: '/blog/:title', name: 'blog_title', component: blog},        
    ]
})
