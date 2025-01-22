<template>
  <div>
    <h2 class="text-xl font-semibold mb-6 text-gray-800">All Users</h2>

    <div v-if="users.length === 0" class="text-center text-gray-500">
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <!-- Display each user -->
      <div
        v-for="user in users"
        :key="user.id"
        class="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col h-96 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        @click="$emit('user-selected', user)"
      >
        <div class="flex items-center mb-6">
          <!-- Example avatar using i.pravatar.cc -->
          <img
            :src="`https://i.pravatar.cc/150?img=${user.id}`"
            alt="User Avatar"
            class="w-28 h-28 rounded-full mr-4"
          />
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-gray-800">{{ user.name }}</h3>
            <p class="text-sm text-gray-500">{{ user.email }}</p>
            <p class="text-sm text-gray-500">{{ user.phone }}</p>
          </div>
        </div>

        <!-- User Details -->
        <div class="text-sm text-gray-600">
          <p class="mb-2 flex items-center">
            <!-- Location Icon -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 10.9998C14.9998 10.4486 14.8477 9.9082 14.5605 9.43777C14.2734 8.96735 13.8621 8.58514 13.372 8.33308C12.8818 8.08102 12.3317 7.96886 11.782 8.00891C11.2323 8.04896 10.7043 8.23967 10.2558 8.56011C9.80739 8.88055 9.45589 9.31834 9.23992 9.82542C9.02394 10.3325 8.95184 10.8893 9.03151 11.4347C9.11119 11.98 9.33956 12.4929 9.69158 12.917C10.0436 13.3411 10.5056 13.66 11.027 13.8388"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.76 21.4699C11.3161 21.417 10.9029 21.2162 10.587 20.8999L6.34301 16.6569C5.41078 15.7245 4.72345 14.5762 4.34215 13.3141C3.96085 12.0519 3.89741 10.7151 4.15747 9.42254C4.41753 8.12997 4.99303 6.92171 5.83278 5.90524C6.67252 4.88877 7.75048 4.09561 8.97076 3.59631C10.191 3.09702 11.5158 2.90706 12.8272 3.04334C14.1386 3.17962 15.396 3.63792 16.4876 4.37746C17.5791 5.11701 18.4709 6.11487 19.0837 7.28229C19.6965 8.4497 20.0113 9.75048 20 11.0689"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 21.9999L21.35 18.7159C21.5554 18.5165 21.7188 18.278 21.8306 18.0145C21.9423 17.7509 22.0001 17.4677 22.0006 17.1814C22.0011 16.8952 21.9442 16.6117 21.8333 16.3478C21.7224 16.0839 21.5598 15.8449 21.355 15.6449C20.9371 15.2362 20.3762 15.0069 19.7917 15.0058C19.2072 15.0046 18.6454 15.2318 18.226 15.6389L18.002 15.8589L17.779 15.6389C17.3612 15.2305 16.8005 15.0014 16.2162 15.0002C15.632 14.9991 15.0704 15.2261 14.651 15.6329C14.4455 15.8321 14.282 16.0706 14.1702 16.3341C14.0583 16.5976 14.0004 16.8808 13.9999 17.1671C13.9993 17.4534 14.0561 17.7368 14.1669 18.0008C14.2777 18.2647 14.4403 18.5038 14.645 18.7039L18 21.9999Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2">Location:</span>
          </p>
          <span class="block mb-4 font-extralight"
            >{{ user.address.street }}, {{ user.address.city }}</span
          >

          <p class="mb-2 flex items-center">
            <!-- Company Icon -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 21H21M5 21V7L13 3V21M19 21V11L13 7M9 9V9.01M9 12V12.01M9 15V15.01M9 18V18.01"
                stroke="#26303E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2">Company:</span>
          </p>
          <span class="block mb-4 font-extralight">{{ user.company.name }}</span>

          <p class="flex mb-2 items-center">
            <!-- Website Icon -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.94 13.045C21.1518 11.2333 20.8081 9.39995 19.9544 7.78798C19.1007 6.176 17.7774 4.86147 16.1598 4.01857C14.5421 3.17566 12.7066 2.84418 10.8963 3.06805C9.08602 3.29191 7.3865 4.06055 6.02293 5.27212C4.65937 6.48369 3.69613 8.08099 3.26086 9.85236C2.82558 11.6237 2.93883 13.4855 3.58558 15.1911C4.23233 16.8967 5.38206 18.3654 6.88241 19.4028C8.38277 20.4402 10.1629 20.9972 11.987 21M3.59998 9H20.4M3.59998 15H13"
                stroke="#26303E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 3C9.81532 5.69961 8.92218 8.81787 8.92218 12C8.92218 15.1821 9.81532 18.3004 11.5 21M12.5 3C14.4191 6.07385 15.3053 9.68077 15.029 13.294M16 22L21 17M21 17V21.5M21 17H16.5"
                stroke="#26303E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2">Website:</span>
          </p>
          <a
            :href="'http://' + user.website"
            class="text-blue-500 hover:underline block mb-4 font-extralight"
            target="_blank"
          >
            {{ user.website }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/services/service"; // Adjust import path based on your folder structure

export default {
  name: "UserCard",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    await this.fetchUsersData();
  },
  methods: {
    async fetchUsersData() {
      try {
        // Use axios instance from service.js
        const response = await service.get("/users");
        this.users = response.data.slice(0, 12);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles for your component here */
</style>
