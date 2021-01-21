const routes = [{
    path: '/',
    redirect:{
      name:'page1'
    }
}, {
    path: '/page1',
    name: 'page1',
    component: () => import('../pages/page1.vue'),
}]
export default routes;