<template>
  <div class="home-page">
    <!-- Render UserCard Component -->
      <UserCard @user-selected="selectUser" />
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  name: "HomePage",
  components: {
      UserCard,
  },
  methods: {
    selectUser(user) {
      this.$emit("user-selected", user);
      this.$router.push({ name: "UserTodos", params: { id: user.id } });
    },
  },
};
</script>
