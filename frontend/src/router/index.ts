import Vue from 'vue';
import Router from 'vue-router';
import paths from './paths'
import IRoute from "@/interface/IRoute";

const route = (option: IRoute) => {
  const { path, view, name } = option

  return {
    name: name || view,
    path,
    component: (resovle: any) => import(`@/views/${view}.vue`).then(resovle)
  }
}

Vue.use(Router)

// Create a new router
export default new Router({
  mode: 'history',
  routes: paths.map(path => {
    const option: IRoute = {
      path: path.path,
      view: path.view,
      name: path.name
    }
    return route(option)
  }).concat([
    { path: '*', redirect: '/home' },
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return { x: 0, y: 0 }
  }
})
