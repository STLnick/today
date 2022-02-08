<template>
  <div class="todo-list">
    <TodoComponent
      v-for="todo in todos"
      :key="todo.title"
      :todo="todo"
      @update-todo="handleUpdate"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
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
  setup(props, { emit }) {
    const store = useStore();

    const handleUpdate = (input: any) => {
      store.dispatch('updateTodo', input);
    };

    return {
      handleUpdate,
    };
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
