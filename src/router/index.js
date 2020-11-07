import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Blog from '../views/Blog'
import About from '../views/About'

Vue.use(Router)
export default new Router({
  routes:[
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})