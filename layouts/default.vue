<template>
  <div class="font-sans antialiased bg-gray-200 text-gray-700">
    <!-- navbar -->
    <nav class="bg-white">
      <div class="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- insert mobile nav -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="open menu"
            >
              <!-- Icon when menu is closed. -->
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                v-if="open === false"
                class="fill-current text-gray-600 block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="open = !open"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                v-else
                class="fill-current text-gray-600 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="open = !open"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0">
              <!-- Insert logo here -->
              <h1 class="text-gray-800 text-lg lg:text-xl font-semibold">
                NELLYSAR <span class="text-green-600">BOOKS</span>
              </h1>
            </div>
          </div>
          <div class="hidden sm:block">
            <div class="flex">
              <div class="relative">
                <div>
                  <a
                    id="user-menu"
                    class="focus:outline-none cursor-pointer px-3 py-2 inline-flex font-medium leading-5 transition duration-150 ease-in-out"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @click="dropdown = !dropdown"
                  >
                    <span>Books</span>
                    <svg
                      class="text-gray-400 mt-1 ml-2 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  v-if="dropdown === true"
                  class="origin-top-right transition duration-300 ease-in-out absolute right-0 mt-2 w-48 rounded-md shadow-lg z-20"
                >
                  <div
                    class="py-1 rounded-lg bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <nuxt-link
                      to="/"
                      class="flex items-center justify-between block px-4 py-2 font-normal leading-5 border-b border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      <span>Garden City</span>
                      <button
                        type="button"
                        class="rounded-full px-4 mr-2 bg-red-600 text-white text-xs py-1 rounded leading-none flex items-center"
                      >
                        New
                      </button>
                    </nuxt-link>
                    <a
                      href="#"
                      class="block px-4 py-2 leading-5 bg-gray-100 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                      >Upcoming Book</a
                    >
                  </div>
                </div>
              </div>
              <a
                class="focus:outline-none cursor-pointer ml-4 px-3 py-2 font-medium leading-5 hover:text-gray-600"
                @click="showPanel"
              >
                Stores
              </a>
              <a
                href="#author"
                class="ml-4 px-3 py-2 font-medium leading-5 hover:text-gray-600"
                >Author</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 font-medium leading-5 hover:text-gray-600"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
      <div v-if="open === true" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 border-t border-gray-300">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-green-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Books</a
          >
          <div>
            <a
              href="#"
              class="block px-3 ml-4 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-600 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >Garden City Book
              <span class="text-sm py-1 px-2 bg-red-100 text-red-600"
                >New</span
              ></a
            >
          </div>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:text-gray-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Stores</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:text-gray-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Projects</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:text-gray-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Calendar</a
          >
        </div>
      </div>
    </nav>
    <Nuxt />
    <slideout-panel></slideout-panel>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    dropdown: false,
    panelObject: null,
  }),

  methods: {
    showPanel() {
      this.panelObject = this.$showPanel({
        component: 'vue-panel',
        openOn: 'top',
      })
    },
    hidePanel() {
      this.panelObject.hide()
    },
  },
}
</script>
