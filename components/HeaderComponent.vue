<template>
    <header class=" mx-auto px-4 lg:px-12 xl:px-24 py-1 bg-white naan-navbar digartback">
    
      <div class="flex flex-col">
        <div class="flex flex-row items-center py-1 text-naan-base justify-between">
        <!-- TODO: CHANGE THIS HREF URL -->
        <nuxt-link to="/" class="w-full">
          <div class="flex flex-row w-full justify-between items-center">
              <img class="h-16" src="~/assets/images/img/logo.jpg" />
          </div>
        </nuxt-link>
      
        <div class="flex flex-row space-x-4">
          <a
            class="cursor-pointer"
            :class="{ 'text-naan-secondary': currentLocale === 'ta' }"
            @click="changeLocale('ta')">
            தமிழ்
          </a>
          <div class="en-tam-slash w-[2px]  h-5"></div>
          <a
            class="cursor-pointer"
            :class="{ 'text-naan-secondary': currentLocale === 'en' }"
            @click="changeLocale('en')">
            English
          </a>
        </div>
      </div>
      
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
  },
  mounted() {
    const locale = localStorage.getItem("lang");
    this.$i18n.setLocale(locale || "en");
  },
  methods:{
    changeLocale(locale) {
      localStorage.setItem('lang',locale)
      this.$i18n.setLocale(locale || "en");
    },
  },
}
</script>
<style>
.en-tam-slash{
  --tw-bg-opacity: 1;
  background-color: black;
}

</style>