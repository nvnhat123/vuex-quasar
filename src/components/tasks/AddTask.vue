<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add Task</div>
            <q-space />
            <q-btn flat round color="primary" icon="close" v-close-popup />
        </q-card-section>

        <q-form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <div class="row q-mb-sm">
                    <q-input outlined v-model="taskToSubmit.name" label="Name" class="col"
                        :rules="[val => !!val || 'Field is required']" ref="name" />
                </div>
                <div class="row q-mb-sm">
                    <q-input outlined v-model="taskToSubmit.dueDate" label="Date" :rules="['date']">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date v-model="taskToSubmit.dueDate">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div class="row q-mb-sm">
                    <q-input outlined v-model="taskToSubmit.dueTime" label="Time" :rules="['time']">
                        <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                    <q-time v-model="taskToSubmit.dueTime">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-time>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Save" color="primary" type="submit" />
            </q-card-actions>
        </q-form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            taskToSubmit: {
                name: '',
                status: false,
                dueDate: '',
                dueTime: '',
            },
        }
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitForm() {
            console.log('submit');
            console.log(this.$refs.name);
            if (!this.$refs.name.hasError) {
                this.submitTask();
            }
        },
        submitTask() {
            this.addTask(this.taskToSubmit)
            console.log('submit task');
        }
    }
}
</script>
