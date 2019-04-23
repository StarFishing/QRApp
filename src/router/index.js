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
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/work'
    },
    {
      path: '/work',
      component: work
    },
    {
      path: '/progress',
      component: progress
    },
    {
      path: '/self',
      component: self
    }
  ]
})
