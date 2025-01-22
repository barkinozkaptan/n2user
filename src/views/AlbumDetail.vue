<template>
  <div class="p-6">
    <GoBackButton
      routeName="Albums"
      :routeParams="{ id: userId }"
      buttonLabel="Go Albums"
    />

    <div v-if="albumPhotos" class="flex flex-wrap justify-start gap-4">
      <img
        v-for="(photo, index) in albumPhotos"
        :key="index"
        :src="photo.url"
        :alt="photo.title"
        class="w-56 h-56 object-cover rounded-lg shadow-md"
      />
    </div>
    <div v-else class="text-center text-gray-500">
      Loading album details...
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/GoBackButton.vue";

export default {
  name: "AlbumDetails",
  // We no longer need userId/albumId as props if they come from route
  data() {
    return {
      albumPhotos: null,
    };
  },
  computed: {
    // Retrieve userId & albumId from the route
    userId() {
      return this.$route.params.userId;
    },
    albumId() {
      return this.$route.params.albumId;
    },
  },
  mounted() {
    this.generateUniquePhotos();
  },
  methods: {
    generateUniquePhotos() {
      // Access albumId via the computed property
      const photos = Array.from({ length: 12 }, (_, index) => ({
        id: `${this.albumId}-${index + 1}`,
        title: `Photo ${index + 1}`,
        url: `https://picsum.photos/seed/album${this.albumId}-${index + 1}/400/400`,
      }));
      this.albumPhotos = photos;
    },
  },
  components: {
    GoBackButton,
  },
};
</script>
