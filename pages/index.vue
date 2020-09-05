<template>
  <div>
    <div class="h-screen flex flex-col">
      <section
        class="relative px-5 pt-6 pb-6 md:px-24 md:pt-16 md:pb-24 h-auto book-cover"
      >
        <div class="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          <div>
            <img
              class="rounded shadow-2xl p-2 bg-white"
              src="~/assets/images/optimized/book-cover.jpg"
              alt="book-cover"
              height="900"
              width="900"
            />
          </div>
          <div class="ml-0 lg:ml-10 mt-3">
            <p
              class="hidden lg:flex items-center font-bold text-3xl lg:text-5xl text-white leading-5 pb-2"
            >
              <span>Garden City</span>
              <button
                type="button"
                class="hidden lg:block ml-4 rounded-full px-4 mr-2 mt-2 bg-white text-green-600 p-2 rounded text-sm leading-none flex items-center uppercase font-bold shadow-2xl"
              >
                Available now !!
              </button>
            </p>
            <p class="text-2xl text-white leading-tight py-3">
              Tells the story of Ama Tricie and her quest to restore her city to
              its glory days.
            </p>
            <p class="text-2xl text-white leading-tight py-3">
              With the help of her parents, classmates and her favorite teacher,
              Miss P, she goes on an amazing journey.
            </p>
            <p class="text-2xl text-white leading-tight py-3">
              And puts the garden back in Garden City.
            </p>
            <div class="flex flex-col lg:flex-row py-4 mb-4">
              <!-- <button
                class="p-3 mb-4 lg:mb-0 lg:p-4 bg-green-700 rounded text-white text-xl font-bold uppercase shadow-xl"
              >
                Place Order
              </button> -->
              <button
                class="z-10 p-3 lg:p-4 bg-blue-700 hover:bg-blue-500 rounded-md text-white text-xl font-bold uppercase shadow-xl"
                @click="showPanel"
              >
                Buy from book stores
              </button>
            </div>
          </div>
        </div>
        <svg
          class="hidden md:hidden lg:block absolute inset-x-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ecf2f7"
            fill-opacity="1"
            d="M0,320L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section class="relative pb-16 grass-cover">
        <div class="flex justify-center">
          <div class="flex items-center max-w-5xl mx-auto">
            <img
              class="-ml-32 hidden lg:block"
              src="~/assets/images/optimized/butterfly-left.png"
              alt="butterfly-right"
              height="290"
              width="290"
            />
            <img
              class="mx-auto mt-24 hidden lg:block"
              src="~/assets/images/optimized/Oval.png"
              alt="oval shape"
              height="800"
              width="800"
            />
            <img
              class="-ml-32 hidden lg:block"
              src="~/assets/images/optimized/butterfly-right.png"
              alt="butterfly right"
              height="290"
              width="290"
            />
          </div>
          <div
            class="lg:absolute flex flex-col lg:w-1/3 lg:mt-40 py-32 lg:py-0"
          >
            <h1
              class="text-center text-4xl font-semibold pb-1 text-gray-800 capitalize"
            >
              About the book
            </h1>
            <p class="text-2xl text-center py-3 px-8 lg:px-0">
              Ama Tricie is determined to change the world one idea at a time.
              When she decides to restore Garden City into the city it was
              before, she is met with uncertainty and doubt.
            </p>

            <p class="text-2xl text-center py-3 px-8 lg:px-0">
              After a series of ups and downs Ama Tricie realizes that all you
              need to do is to believe in yourself and everything else will fall
              in place.
            </p>
          </div>

          <img
            class="absolute mt-8 pb-3"
            src="~/assets/images/optimized/sun.png"
            alt="sunshine"
            height="150"
            width="150"
          />
        </div>
      </section>
      <section class="bg-white h-auto p-8 lg:p-24">
        <div
          class="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-5xl"
        >
          <div class="">
            <img
              src="~/assets/images/optimized/helping.png"
              alt="hepacy project"
              height="700"
              width="700"
            />
          </div>
          <div class="mt-12 mx-2 lg:ml-8">
            <h1 class="font-bold text-3xl text-gray-800 leading-5 pb-5">
              HEAPCY PROJECT
            </h1>
            <p class="text-2xl text-gray-700">
              50% of all profits will go to aid the building of water wells by
              Health and Education for Afram Plains Children and Youth (HEAPCY),
              an NGO dedicated to improving lives through education and health.
            </p>

            <p class="text-sm text-gray-700 py-5">
              You can support this project by purchasing a copy to provide
              education and health to a child in Ghana.
            </p>
          </div>
        </div>
      </section>
      <section
        class="relative h-auto bg-orange-300 lg:px-16 py-48 lg:pb-48 desert-cover"
      >
        <div class="flex items-center justify-center max-w-5xl mx-auto">
          <div class="flex flex-col mx-8 lg:ml-12 -mt-32">
            <h1
              class="text-4xl lg:mb-0 mb-4 text-yellow-800 leading-tight lg:leading-none lg:whitespace-no-wrap font-bold"
            >
              Ready to encourage your kids save the world ?
            </h1>
            <p class="text-2xl text-gray-800 pb-3">
              It is difficult to fully explain the effects of climate change to
              a child but Garden City does a great job. Children are our future,
              so why not inspire them to take a bold step and be part of the
              conversation on climate change ?
            </p>
            <button
              class="z-10 p-3 lg:p-4 mr-4 lg:mr-0 bg-yellow-900 hover:bg-yellow-700 hover:text-white lg:text-xl uppercase lg:w-1/2 shadow-2xl rounded uppercase font-bold text-yellow-500"
              @click="showPanel"
            >
              Grab a copy for your child
            </button>
          </div>
        </div>
        <svg
          class="absolute inset-x-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ecf2f7"
            fill-opacity="1"
            d="M0,224L1440,288L1440,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section
        id="author"
        class="flex flex-col mx-auto h-auto p-10 wave-bg-cover"
      >
        <div class="max-w-xl text-center">
          <img
            src="~/assets/images/optimized/author.jpg"
            alt="author"
            class="mx-auto h-32 w-32 rounded-full border-solid border-white border-2 -mt-3"
          />

          <h1 class="text-3xl font-bold text-center text-gray-800 pt-3">
            About the Author
          </h1>
          <p class="text-gray-700 py-1 leading text-xl">
            Nelly Sarpong was born in Germany but grew up in Ghana. During her
            formative years in Germany, she rarely saw any books with a black
            protagonist, talk less of a book with black children on the cover
            pages. With everything happening in the world, it is imperative that
            all children of every race feel represented in literature to know
            they are seen, heard and that they can also be heroes of their own
            stories.
          </p>
        </div>
      </section>
      <section class="flex items-center justify-center h-auto p-5 bg-white">
        <span class="text-gray-700 text-sm"
          >Nellysarbooks &#169; copyright 2020</span
        >
      </section>
      <slideout-panel></slideout-panel>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
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
  head: {
    title: 'Nellysarbooks - Kids Books Hub',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Kids books hub with interesting stories',
      },
    ],
  },
}
</script>
