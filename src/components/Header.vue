<template>
    <div class="flex h-screen">
      <!-- Sidebar (Header) -->
      <aside
        class="w-64 bg-gray-200 text-gray-600 flex flex-col fixed left-0 top-0 h-screen overflow-y-auto"
      >
        <nav class="flex-grow py-8 border border-gray-300 flex flex-col justify-between">
          <ul>
            <!-- Navigation Item with Reversed Semi-Rounded Border -->
            <li class="mb-4 bg-white py-1 pl-4 flex items-center relative">
              <!-- Purple semi-rounded border -->
              <div
                class="absolute inset-y-0 left-0 w-1.5 bg-purple-700"
                style="border-top-right-radius: 12px; border-bottom-right-radius: 12px;"
              ></div>
              <!-- Navigation Item Content -->
              <a href="#" class="flex items-center text-purple-700 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <p class="text-md ml-4">Users</p>
              </a>
            </li>
            <!-- Add more navigation items as needed -->
          </ul>
          <div class="h-16 flex items-center justify-center border-t pt-6 border-gray-300 mt-auto">
            <img src="@/assets/image.png" alt="" class="w-10 h-10" />
            <h1 class="text-xl font-bold ml-1">N2Mobil</h1>
          </div>
        </nav>
      </aside>
  
      <!-- Main content -->
      <main class="flex-grow overflow-hidden ml-64">
        <!-- Your main content goes here -->
      </main>
    </div>
  </template>
  
  <style>
  /* Styles for the purple border */
  .bg-purple-700 {
    background-color: #6b46c1; /* Adjust the color if needed */
  }
  
  /* Reversed rounded effect for the border */
  .rounded-right-custom {
    border-top-right-radius: 12px; /* Slight rounding at the top-right */
    border-bottom-right-radius: 12px; /* Slight rounding at the bottom-right */
  }
  </style>
  