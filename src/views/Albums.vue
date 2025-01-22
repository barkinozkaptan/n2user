<template>
  <div>
    <div v-if="albums.length === 0" class="text-center text-gray-500">
    </div>
    <div class="p-6">
      <GoBackButton
        routeName="Home"
        buttonLabel="Go to Home"
      />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
      >
        <!-- Router link for each album -->
        <router-link
          v-for="album in albums"
          :key="album.id"
          :to="{ name: 'AlbumDetail', params: { userId: userId, albumId: album.id } }"
          class="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col h-96 transform transition-transform duration-300 hover:scale-105"
        >
          <div class="grid grid-cols-2 gap-2 mb-4">
            <img
              v-for="index in 4"
              :key="index"
              :src="`https://picsum.photos/seed/album${album.id}_${index}/200/200`"
              :alt="`Preview ${index}`"
              class="w-full h-32 object-cover rounded"
            />
          </div>
          <div class="flex items-center mb-6">
            <div class="ml-3">
              <h3 class="text-lg font-semibold text-gray-800">{{ album.title }}</h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/GoBackButton.vue";
import service from "@/services/service"; // <-- Import the axios instance

export default {
  name: "Albums",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      albums: [], // List of albums fetched from the API
    };
  },
  computed: {
    userId() {
      return this.id || this.$route.params.id; // Get user ID from props or route params
    },
  },
  components: {
    GoBackButton,
  },
  mounted() {
    this.fetchAlbums(); // Fetch albums data when the component is mounted
  },
  methods: {
    async fetchAlbums() {
      try {
        // Use the axios instance from service.js
        const response = await service.get(`/users/${this.userId}/albums`);
        // The data is in response.data
        this.albums = response.data.slice(0, 12); // Limit to 12 albums for display
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    },
  },
};
</script>

<style scoped>
.rounded-lg {
  border-radius: 12px;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.material-icons {
  font-size: 1.25rem;
}
</style>
