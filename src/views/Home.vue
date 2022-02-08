<template>
  <div class="home">
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Todo from "@/types/Todo";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "Home",
  components: {
    TodoList,
  },
  setup() {
    const store = useStore();
    let todos: Todo[] = [];

    if (store.state.todos) {
      todos = store.state.todos;
    }

    return {
      todos,
    };
  }
});
</script>
