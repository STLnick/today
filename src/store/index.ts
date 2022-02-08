import { createStore } from "vuex";
import Todo from "@/types/Todo";
/* Use this to set local todos again in case they are deleted, removed, corrupted, etc. */
// localStorage.setItem("todayTodos", JSON.stringify(
//   [
//     { title: "Numero Uno", description: "I am being described here my guy.", completed: false },
//     { title: "The Second Task", description: "asdfas fasdf getbsdg adfgasgas.", completed: true },
//   ]
// ));
const storedTodos = localStorage.getItem("todayTodos");

export default createStore({
  state: { 
    todos: storedTodos ? JSON.parse(storedTodos) : [],
  },
  mutations: {
    setTodos(state, newTodos) {
      state.todos = newTodos;
    },
  },
  actions: {
    updateTodo({ commit, state }, updatedTodo) {
      if (!updatedTodo) return;

      const updatedTodos = state.todos.map((todo: Todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      });

      commit("setTodos", updatedTodos);
      localStorage.setItem("todayTodos", JSON.stringify(updatedTodos));
    },
  },
  modules: {},
});
