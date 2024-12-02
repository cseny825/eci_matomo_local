// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Recommend from '@/components/Recommend.vue'
import Search from '@/components/Search.vue'
import Detail from '@/components/Detail.vue'
import SearchResult from "@/components/SearchResult.vue";

const routes = [
    { path: '/', redirect: '/app/dashboard', component: Recommend },
    { path: '/app/dashboard', component: Recommend },
    { path: '/digital/product/search-quote', component: Search },
    { path: '/digital/product/search-result', component: SearchResult },
    { path: '/digital/product/pre-book', component: Detail, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
