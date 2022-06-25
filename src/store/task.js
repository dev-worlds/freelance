import {addLocalStorage, getLocalStorageData, setLocalStorageData} from "@/js/localStorage";

const task = {
    namespaced: true,
    state: () => {
        return {
            tasks: []
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task)
        },
        setStatus(state, {id, status}) {
            const task = state.tasks.find(task => task.id === id)
            task.status = status;
        }
    },
    actions: {
        addTask({commit, state}, payload) {
            const id = state.tasks.length + 1;
            const newTask = {id: id, ...payload};
            addLocalStorage('tasks', newTask)
            commit('addTask', newTask)
        },
        setStatus({commit, state, getters}, payload) {
            const task = getters.getTask(+payload.id)
            task.status = payload.status
            setLocalStorageData('tasks', state.tasks)
            commit('setStatus', payload)
        },
        loadTasks({commit}) {
            const tasks = getLocalStorageData('tasks') || [];
            if (tasks.length) {
                commit('setTasks', tasks)
            }
        }
    },
    getters: {
        getTasks: state => state.tasks,
        getTask: state => id => {
            return state.tasks.find(task => task.id === id)
        }
    }
}

export default task;