/* eslint-disable */
export default [
    {
    name: 'home',
    path: '/home',
    component:()=> import('@/views/HomeView/index.vue'), 
    meta: {},
    children: [

    ],
},
{
    path:'',
    redirect:'/home',
    component:import('@/views/HomeView/index.vue')
}
]