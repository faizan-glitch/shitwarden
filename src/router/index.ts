import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import LockScreen from '../views/LockScreen.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LockScreen
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/vault'
      },
      {
        path: 'vault',
        component: () => import('@/views/Vault.vue')
      },
      {
        path: 'generator',
        component: () => import('@/views/Generator.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/Settings.vue'),
      },
      {
        path: 'folders',
        component: () => import('@/views/FoldersSettings.vue'),
      },
      {
        path: 'sync',
        component: () => import('@/views/SyncSettings.vue'),
      },
      {
        path: 'excluded-domains',
        component: () => import('@/views/ExcludedDomainsSettings.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
