<template>
    <q-page class="q-pa-md">
        <q-list bordered separator>
            <q-item-label class="row" header>
                <p>General</p>
                <q-space />
                <q-btn flat round color="primary" icon="add" @click="showAddTask = true" />
            </q-item-label>

            <task v-for="(task, key) in tasks" :task="task" :id="key"></task>
            <q-dialog v-model="showAddTask">
                <add-task></add-task>
            </q-dialog>
        </q-list>
    </q-page>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            showAddTask: false
        }
    },

    computed: {
        ...mapGetters('tasks', ['tasks'])
    },
    components: {
        'task': require('components/tasks/Task.vue').default,
        'add-task': require('components/tasks/AddTask.vue').default
    }
}
</script>

<style scoped lang="scss">
.text-strikethrough {
    text-decoration: line-through;
}
</style>
