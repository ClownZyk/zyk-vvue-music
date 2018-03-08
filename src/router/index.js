import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from 'components/index/index'
import Task from 'components/task/task'
import Know from 'components/know/know'
import Center from 'components/center/center'
import UserCenter from 'components/user-center/user-center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/task',
      component: Task
    },
    {
      path: '/know',
      component: Know
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
