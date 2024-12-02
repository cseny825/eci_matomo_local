// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Recommend from '@/components/Recommend.vue'
import Search from '@/components/Search.vue'
import Detail from '@/components/Detail.vue'

const routes = [
    { path: '/', component: Recommend },
    { path: '/search', component: Search },
    { path: '/detail/:id', component: Detail, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
