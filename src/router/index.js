import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import StudentList from "../views/StudentList.vue"
import EventCategory from "../views/EventCategory.vue"
import About from '../views/About.vue'

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/category",
    name: "EventCategory",
    component: EventCategory
  },
  {
    path: "/student",
    name: "StudentList",
    component: StudentList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
