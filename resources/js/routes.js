
export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/MainPageComponent.vue')
    },
    {
        path: '/second',
        name: 'second',
        component: () => import('./components/SecondPageComponent.vue')
    }
]