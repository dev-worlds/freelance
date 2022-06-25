import {createRouter, createWebHistory} from 'vue-router'
import Tasks from "@/views/Tasks";
import NewTask from "@/views/New";
import Task from "@/views/Task";

const routes = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/new',
        name: 'New',
        component: NewTask
    },
    {
        path: '/task/:id',
        name: 'Task',
        component: Task
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/',
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
