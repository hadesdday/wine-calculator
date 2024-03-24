import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'tinh-so-lit-ruou',
        component: () => import('pages/ActualQuantityCalculator.vue'),
      },
      {
        path: 'tinh-tien-ruou',
        component: () => import('pages/WineBillCalculate.vue'),
      },
      {
        path: 'cap-nhat-gia-ruou',
        component: () => import('pages/UpdateWineData.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
