<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      tasks: [
        {
          name: 'Shop',
          dueDate: '2021/01/02',
          dueTime: '11:20'
        },
        {
          name: 'App',
          dueDate: '2021/01/02',
          dueTime: '11:20'
        },
        {
          name: 'Customer',
          dueDate: '2021/05/5',
          dueTime: '11:20'
        },
      ]
    }
  }
}
</script>
