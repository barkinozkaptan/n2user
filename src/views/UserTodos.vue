<template>
    <div class="flex h-screen">
      <!-- Main Content -->
      <div class="w-3/4 p-6">
        <GoBackButton
          routeName="Home"
          buttonLabel="Go to Home"
        />
        <ul>
          <li 
            v-for="todo in todos" 
            :key="todo.id" 
            class="flex items-center p-2 border-b border-gray-200"
          >
            <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleTodo(todo.id)"
              class="mr-4 accent-purple-700"
            />
            <span class="text-gray-800 font-light text-md">
              {{ formatTitle(todo.title) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import GoBackButton from "@/components/GoBackButton.vue";
  import service from "@/services/service"; // <-- Import your axios instance here
  
  export default {
    name: "UserTodos",
    props: ["id"],
    data() {
      return {
        todos: [],
        userId: this.id || this.$route.params.id,
      };
    },
    computed: {
      userId() {
        // Get the user ID from route params or props
        return this.id || this.$route.params.id;
      },
    },
    components: {
      GoBackButton,
    },
    methods: {
      async fetchTodos() {
        try {
          // Use axios instance to get todos
          const response = await service.get(`/users/${this.userId}/todos`);
          this.todos = response.data;
        } catch (error) {
          console.error("Error fetching todos:", error);
        }
      },
      toggleTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      formatTitle(title) {
        return title.charAt(0).toUpperCase() + title.slice(1); 
      },
    },
    mounted() {
      this.fetchTodos();
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Arial', sans-serif;
  }
  
  .material-icons-outlined {
    font-family: 'Material Icons Outlined';
    font-size: 20px;
  }
  
  .bg-gray-100 {
    background-color: #f7fafc;
  }
  
  .border-b {
    border-bottom: 1px solid #e2e8f0;
  }
  </style>
  