<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="({target}) => handleCompletedChange(target.checked)"
      @input="() => {}"
    />
    <p>{{ todo.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoType from "@/types/Todo";

export default defineComponent({
  name: "Todo",
  props: {
    todo: {
      type: Object as () => TodoType,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleCompletedChange = (completed: boolean) => {
      emit("update-todo", { ...props.todo, completed });
    };

    return {
      handleCompletedChange,
      test: props.todo.completed,
    };
  },
});
</script>

<style scoped lang="scss">
.todo {
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;

  max-width: 600px;
}
</style>
