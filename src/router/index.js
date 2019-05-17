import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const work = resolve => {
  import('components/work/work').then(module => {
    resolve(module)
  })
}
const progress = resolve => {
  import('components/progress/progress').then(module => {
    resolve(module)
  })
}
const self = resolve => {
  import('components/self/self').then(module => {
    resolve(module)
  })
}

const login = resolve => {
  import('components/login/login').then(module => {
    resolve(module)
  })
}
const summaryCase = resolve => {
  import('components/summaryCase/summaryCase').then(module => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/work',
      component: work,
      name: 'Home',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/progress/:id',
      component: progress,
      children: [
        {
          path: 'getprogress',
          component: summaryCase
        }
      ]
    },
    {
      path: '/self',
      component: self
    }
  ]
})
