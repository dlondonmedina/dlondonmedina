import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Projects from '@/views/Projects'
import Blog from '@/views/Blog'

Vue.use(Router)

const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes 
})

export default router