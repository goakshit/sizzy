import { createWebHistory, createRouter } from "vue-router";
import { auth } from '../firebase'
// import store from "../store/store"
import Login from '../components/login.vue'
import About from '../components/about.vue'
import Home from '../components/home.vue'


const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isProtected: false,
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      isProtected: false,
    }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isProtected: true,
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  // const isLoggedIn = store.getters.isUserLoggedIn
  if (to.name == 'Home' && to.meta.isProtected && auth.currentUser) {
    next({ path: '/' })
  }
  else if (to.meta.isProtected && !auth.currentUser) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }  
})

export default router;