import Vue from 'vue'
import Router from 'vue-router'
//导航的一级组件
import Index from '@/components/Index'//@代表src下面的
import Gzh from '@/components/Gzh'
import AboutUs from '@/components/AboutUs'
//加载主题相关的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Weex from '@/components/topics/Weex'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
import Api from '@/components/topics/Api'
import Study from '@/components/topics/Study'
//加载主题详情组件
import Topic from '@/components/topics/Topic'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'/',
      		component:All,
      	},
        {
          path:'good',
          component:Good,
        },
        {
          path:'weex',
          component:Weex,
        },
        {
          path:'share',
          component:Share,
        },
        {
          path:'ask',
          component:Ask,
        },
        {
          path:'job',
          component:Job,
        },
        {
          path:'api',
          component:Api,
        },
        {
          path:'study',
          component:Study,
        },
        {
          path:'topic/:id',
          component:Topic,
        },
      ]
    },
    {
      path: '/gzh',
      name: 'Gzh',
      component: Gzh
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/*',
  
      component:Index
    },
  ]
})