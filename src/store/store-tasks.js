// import Vue from 'vue'
import { uid } from 'quasar'
import  *  as Vue from 'vue'

const state = {
    tasks: {
        'ID1': {
            name: 'shop',
            status: false,
            dueDate: '2022/12/18',
            dueTime: '10:15:30',
        },
        'ID2': {
            name: 'run',
            status: false,
            dueDate: '2022/12/18',
            dueTime: '10:15:30',
        },
        'ID3': {
            name: 'jump',
            status: false,
            dueDate: '2022/12/18',
            dueTime: '10:15:30',
        },
    }
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        console.log('delete task id', id);
        // Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        console.log('add task');
        // Vue.setBlockTracking(state.tasks, pahload.id, payload.tasks)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        console.log('1');
        let taskId = uid();
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasks: (state) => { return state.tasks }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
