<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
    <input type="checkbox" @change="handleChange" :checked="todo.completed" />
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
  setup(props) {
    const handleChange = (e: Event) => {
      // take checked val
      //const completed = e.target?.checked;
      // take current todo object
      // overwrite completed property
      // take updated todo + rest of todos
      // dispatch action
    };

    return {
      handleChange,
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
