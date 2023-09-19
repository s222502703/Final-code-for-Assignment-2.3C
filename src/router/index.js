import { createRouter, createWebHistory } from 'vue-router'
import TemplateSyntaxView from '../views/TemplateSyntaxView.vue'
import MethodView from '../views/MethodView.vue'
import ComputedPropertiesView from '../views/ComputedPropertiesView.vue'
import ClassandstyleView from '../views/ClassandstyleView.vue'
import ListRenderingView from '../views/ListRenderingView.vue'

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

    },
    {
      path: '/Classandstyle',
      name: 'Class and Style bindings',
      component: ClassandstyleView

    },
    {
      path: '/ListRendering',
      name: 'List Rendering',
      component: ListRenderingView

    },
    {
      path: '/EventHandling',
      name: 'Event Handling',
      component:  () => import('../views/EventHandlingView.vue')
    },
    {
      path: '/Forms',
      name: 'Forms Input Bindings',
      component:  () => import('../views/FormView.vue')
    },
    
    {
        path: '/Watchers',
        name: 'Watchers',
        component:  () => import('../views/WatchersView.vue')
    },
    {
      path: '/Components',
      name: 'Components',
      component:  () => import('../views/ComponentsView.vue')
    },
    {
      path: '/Router',
      name: 'Router',
      component:  () => import('../views/RouterView.vue')
    }
    
  ]
})

export default router
