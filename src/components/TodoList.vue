<template>
  <div class="todo-list">
    <TodoComponent v-for="todo in todos" :key="todo.title" :todo="todo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoComponent from "./Todo.vue";
import Todo from "@/types/Todo";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoComponent,
  },
  props: {
    todos: {
      type: Object as () => Todo[],
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
