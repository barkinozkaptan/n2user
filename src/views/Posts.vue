<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <div class="p-6 flex items-center">
      <GoBackButton routeName="Home" buttonLabel="Go to Home" />
    </div>

    <!-- Posts List -->
    <div class="flex-grow p-6">
      <ul class="space-y-4">
        <!-- Use the PostCard component to render each post -->
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @openModal="openModal"
        />
      </ul>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white rounded-lg shadow-xl w-2/3 max-h-[98vh] overflow-hidden relative">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-6">
          <h2 class="text-lg font-semibold text-gray-800">
            {{ selectedPost?.title }}
          </h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-xl">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10L14 14M14 10L10 14M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z"
                stroke="#26303E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6 flex">
          <!-- Post Body -->
          <div class="w-3/5 pr-6 border-r border-gray-300 mr-5">
            <p class="text-gray-700 mb-6">{{ selectedPost?.body }}</p>
          </div>

          <!-- Comments -->
          <div class="w-2/5">
            <h3 class="text-md font-semibold mb-4 text-gray-800">Comments</h3>
            <div class="max-h-96 overflow-y-auto space-y-4">
              <div
                v-for="comment in comments"
                :key="comment.id"
                class="border-b border-gray-200 pb-4 flex items-start"
              >
                <img
                  :src="`https://i.pravatar.cc/40?u=${comment.id}`"
                  alt="Random avatar"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p class="font-semibold text-gray-800">{{ comment.name }}</p>
                  <p class="text-gray-600 text-sm">{{ comment.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/GoBackButton.vue";
import PostCard from "@/components/PostCard.vue";
import service from "@/services/service"; // <-- Use our axios instance

export default {
  name: "UserPosts",
  props: ["id"],
  data() {
    return {
      posts: [],
      comments: [],
      selectedPost: null,
      showModal: false,
    };
  },
  computed: {
    userId() {
      // Determine user ID from props or route params
      return this.id || this.$route.params.id;
    },
  },
  components: {
    GoBackButton,
    PostCard,
  },
  methods: {
    async fetchPosts() {
      try {
        // Use the axios instance to get the user's posts
        const response = await service.get(`/users/${this.userId}/posts`);
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async fetchComments(postId) {
      try {
        // Use the axios instance to get comments for the post
        const response = await service.get(`/posts/${postId}/comments`);
        this.comments = response.data;
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    },
    openModal(postId) {
      this.selectedPost = this.posts.find((post) => post.id === postId);
      this.showModal = true;
      this.fetchComments(postId); // Fetch comments for the selected post
    },
    closeModal() {
      this.showModal = false;
      this.comments = [];
      this.selectedPost = null;
    },
  },
  mounted() {
    this.fetchPosts(); // Fetch posts when component is mounted
  },
};
</script>

<style scoped>
/* Tailwind handles most of the styling in-line */
</style>
