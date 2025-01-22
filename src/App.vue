<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <component :is="currentHeader" :user="currentUser" />

    <!-- Main Content -->
    <main class="flex-grow p-6">
      <router-view @user-selected="updateCurrentUser" />
    </main>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";

const route = useRoute();
const currentUser = reactive(JSON.parse(localStorage.getItem("selectedUser")) || {});

const currentHeader = computed(() => {
  return route.path === "/" ? Header : Header2;
});

const updateCurrentUser = (user) => {
  Object.assign(currentUser, user);
  localStorage.setItem("selectedUser", JSON.stringify(user));
};

onMounted(() => {
  const storedUser = localStorage.getItem("selectedUser");
  if (storedUser) {
    Object.assign(currentUser, JSON.parse(storedUser));
  }
});
</script>
