import { createRouter, createWebHistory } from 'vue-router'
import TemplateSyntaxView from '../views/TemplateSyntaxView.vue'
import MethodView from '../views/MethodView.vue'
import ComputedPropertiesView from '../views/ComputedPropertiesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Template Syntax',
      component: TemplateSyntaxView
    },
    
    {
      path: '/Method',
      name: 'Methods',
      component: MethodView
    },
    
    {
      path: '/ReactivityFundamentals',
      name: 'Reactivity FundamentalsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReactivityFundamentalsView.vue')
    },

    {
      path: '/ComputedProperties',
      name: 'Computed Properties',
      component: ComputedPropertiesView

    }
  ]
})

export default router
