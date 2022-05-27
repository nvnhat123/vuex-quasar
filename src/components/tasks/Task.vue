<template>
    <q-item v-ripple @click="updateTask({ id: id, updates: { status: !task.status } })" clickable
        :class="!task.status ? 'bg-orange-1' : 'bg-light-green-2'">

        <q-item-section side top>
            <q-checkbox v-model="task.status" />
        </q-item-section>
        <q-item-section>
            <q-item-label :class="{ 'text-strikethrough': task.status }">{{ task.name }} {{ id }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
            <div class="row">
                <div class="column justify-center">
                    <q-icon name="today" class="q-mr-xs" size="25px" />
                </div>
                <div class="column">
                    <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
                    <q-item-label class="row justify-end" caption>{{ task.dueTime }}</q-item-label>
                </div>
            </div>
        </q-item-section>
        <q-item-section side top>
            <q-btn flat round color="red" icon="delete" @click.stop="confirmToDelete(id)" />
        </q-item-section>
    </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
        }
    },

    props: ['task', 'id'],
    methods: {
        ...mapActions('tasks', ['updateTask', 'deleteTask']),

        confirmToDelete(id) {
            this.$q.dialog({
                title: 'Confirm',
                message: 'Would you like to turn on the wifi?',
                cancel: true,
                persistent: true
            }).onOk(() => {
                console.log('>>>> OK')
                this.deleteTask(id);
            })
        }
    }
}
</script>

<style scoped lang="scss">
.text-strikethrough {
    text-decoration: line-through;
}
</style>

