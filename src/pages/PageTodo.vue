<template>
    <q-page class="q-pa-md">
        <q-list bordered separator>
            <q-item-label header>General</q-item-label>

            <q-item v-ripple v-for="(task, index) in tasks" :key="index" @click="task.status = !task.status" clickable
                :class="!task.status ? 'bg-orange-1' : 'bg-light-green-2'">

                <q-item-section side top>
                    <q-checkbox v-model="task.status" />
                </q-item-section>
                <q-item-section>
                    <q-item-label :class="{'text-strikethrough': task.status}">{{ task.name }}</q-item-label>
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
            </q-item>

        </q-list>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    name: 'shop',
                    status: false,
                    dueDate: '2022/12/18',
                    dueTime: '10:15:30',
                },
                {
                    id: 2,
                    name: 'run',
                    status: false,
                    dueDate: '2022/12/18',
                    dueTime: '10:15:30',
                },
                {
                    id: 3,
                    name: 'jump',
                    status: false,
                    dueDate: '2022/12/18',
                    dueTime: '10:15:30',
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.text-strikethrough {
    text-decoration: line-through;
}
</style>
