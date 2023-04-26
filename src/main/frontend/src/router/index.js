import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../stores/authStore.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },

    {
      path: "/session",
      name: "LayoutSession",
      component: () => import('../layouts/LayoutSession.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('../layouts/userLayout/UserLayout.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: 'myRequests',
              name: 'myRequests',
              component: () => import('../views/EmployeView.vue'),
              meta: { requiresAuth: true },
            }
          ]
        },
        {
          path: 'responsable',
          name: 'responsable',
          component: () => import('../layouts/ResponsableLayout/ResponsableLayout.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: 'requestList',
              name: 'requestListView',
              component: () => import('../views/HeadOfSchool/RequestListView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'requestDetails/employe/:document/request/:idRequest',
              name: 'requestDetailsofResponsableView',
              component: () => import('../views/HeadOfSchool/RequestDetailsView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'employeSection',
              name: 'employeResponsableView',
              component: () => import('../views/EmployeView.vue'),
              meta: { requiresAuth: true }
            },

          ]
        },
        {
          path: 'admin',
          name: 'admin',
          component: () => import('../layouts/superAdminLayout/SuperAdminLayout.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: 'createUser',
              name: 'createUserView',
              component: () => import('../views/Admin/CreateUserView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'requestList',
              name: 'requestListViewAdmin',
              component: () => import('../views/Admin/RequestListViewAdmin.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'stadistic',
              name: 'stadisticsView',
              component: () => import('../views/Admin/StatisticsView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'usersList',
              name: 'userListView',
              component: () => import('../views/Admin/UserListView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'usersDetails/:document',
              name: 'userDetailsView',
              component: () => import('../views/Admin/UserInfoView.vue'),
              meta: { requiresAuth: true },
              props: route => ({ document: route.params.document })

            },
            {
              path: 'requestDetails/user/:document/request/:idRequest',
              name: 'requestDetailsView',
              component: () => import('../views/Admin/RequestDetailsView.vue'),
              meta: { requiresAuth: true },
              props: route => ({ document: route.params.document, idRequest: parseInt(route.params.idRequest) })
            },
            {
              path: 'createTeams',
              name: 'createTeamsView',
              component: () => import('../views/Admin/CreateTeamsView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'inactiveUsers',
              name: 'firedUsersView',
              component: () => import('../views/Admin/InactiveUsers.vue'),
              meta: { requiresAuth: true }
            }
          ]
        }
      ]
    }
  ]
});
router.beforeEach((to, from) => {
  const loginStore = useAuthStore()

  if (to.meta.requiresAuth && !loginStore.isAuthenticated) return { name: 'LoginView' }
  if (to.name == 'LayoutSession' && loginStore.roleLogin == 'ROLE_USER') router.push({ name: 'myRequests' })
  if (to.name == 'LayoutSession' && loginStore.roleLogin == 'ROLE_RESPONSABLE') router.push({ name: 'requestListView' })
  if (to.name == 'LayoutSession' && loginStore.roleLogin == 'ROLE_ADMIN') {
    console.log('admin');
    router.push({ name: 'createUserView' })
  }
})

export default router
