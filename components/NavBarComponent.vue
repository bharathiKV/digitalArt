<template>
  <div class="headerwh ">
     <nav class=" dart-navbar ">
    <div class="w-full md:flex px-6 lg:pr-0 hidden flex-row justify-between space-x-4 xl:space-x-6 items-center text-center mx-auto py-2">
      <div
        class="menu-parent"
        v-for="(item, index) in menus" :key="index"
        :to="item.path">
        <div class="relative">
          <a
            v-if="item.isExternal"
            :href="item.path"
            :target="item.target"
            class="text-naan-primary py-2"
            style="z-index: 99999999;"
            :class="{'font-bold border-b-2  border-naan-secondary': item.path === activeMenu}">
            {{ $t(item.i18n) }}
          </a>
          <nuxt-link
             v-else
            :to="item.path"
            class="text-naan-primary py-2"
            style="z-index: 99999999;"
            :class="{'font-bold border-b-2  border-naan-secondary': item.path === activeMenu}">
            {{ $t(item.i18n) }}
          </nuxt-link>
          <div
            v-if="item.children"
            class="items-center z-50 absolute rounded-b-lg p-1 bg-white p-2 menu-child invisible w-auto">
            <div class="py-2"></div>
            <div
              class="flex flex-col">
              <div class="py-1"></div>
              <div
                v-for="(dItem, dIndex) in item.children" :key="dIndex + '-' + index"
                @click="openPath(dItem.path)"
                class="px-4 py-2 min-w-[5rem] text-naan-primary font-normal cursor-pointer"
                :class="{'!font-bold': dItem.path === activeMenu}">
                <p>{{ $t(dItem.i18n) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="flex flex-row items-center justify-center">
        <a
          target="_blank"
          :href="loginUrl()"
          class="block bg-naan-primary px-8 py-2.5 text-white rounded-sm">
          {{ $t("login") }}
        </a>
      </div> -->
    </div>

    <div class="w-full md:hidden flex flex-row justify-between items-center container mx-auto px-4 lg:px-24 py-3">
      <div
        v-if="!isMobileMenuOpen"
        class="flex flex-row items-center justify-center text-naan-primary cursor-pointer"
        @click="openMobileMenu">
        <svg viewBox="0 0 100 50" width="40" height="40">
          <rect width="100" height="10" rx="8"></rect>
          <rect y="25" width="100" height="10" rx="8"></rect>
          <rect y="50" width="100" height="10" rx="8"></rect>
        </svg>
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="flex flex-row items-center justify-center text-naan-primary cursor-pointer"
        @click="closeMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>

      <!-- <div class="flex flex-row items-center justify-center">
        <a
          target="_blank"
          href="https://portal.naanmudhalvan.tn.gov.in"
          class="block bg-naan-primary px-8 py-2.5 text-white rounded-md">
          {{ $t("login") }}
        </a>
      </div> -->
    </div>
    <div
      id="mobile-menu"
      :class="{'hidden': !isMobileMenuOpen}"
      class="flex flex-col items-center text-center h-screen space-y-2 px-8 py-2 w-full bg-white text-brand-blue absolute z-[999999] transition transition-all" >
      <template v-for="(item, index) in menus" >
        <div class="flex flex-col space-y-2" :key="index + 'mobile-menus'">
          <a
            v-if="item.isExternal"
            :href="item.path"
            :target="item.target"
            class="text-naan-primary py-2"
            style="z-index: 99999999;"
            :class="{'font-bold border-b-2  border-naan-secondary': item.path === activeMenu}">
            {{ $t(item.i18n) }}
          </a>
          <nuxt-link
            v-else
            :key="index"
            :to="item.path"
            class="px-3 py-3 text-naan-primary"
            :class="{'font-bold': item.path === activeMenu}">
            {{ $t(item.i18n) }}
          </nuxt-link>
          <template
            v-if="item.children">
            <nuxt-link
              v-for="(childItem, index) in item.children" :key="index + 'children'"
              :to="childItem.path"
              class="px-3 py-3 text-naan-primary"
              :class="{'font-bold': childItem.path === activeMenu}">
              {{ $t(childItem.i18n) }}
            </nuxt-link>
          </template>
        </div>
      </template>
      <div class="flex flex-col space-y-3">
      </div>
    </div>
  </nav></div>
</template>
<script>
export default {
  name: "NavBarComponent",
  data() {
    return {
      isMobileMenuOpen: false,
      activeMenu: "",
      menus: [
        {
          name: "Home",
          i18n: "home",
          path: "/",
        },


        {
          name: "Calendar",
          i18n: "calendar",
          isExternal: true,
          path: "/calendars",
        },
        {
          name: "Art Print",
          i18n: "artprint",
          // isExternal: true,
          path: "/art-print",
        },
        {
          name: "Custom Work",
          i18n: "customwork",
          isExternal: true,
          path: "/.",
        },
        {
          name: "contact",
          i18n: "contact",
          isExternal: true,
          path: "/.",
        },

        
      ]
    };
  },
  watch: {
    $route($route) {
      this.activeMenu = $route.path;
      this.isMobileMenuOpen = false;
    },
  },
  mounted() {
    this.setCurrentMenu()
  },
  methods: {
    
    openPath(path) {
      this.$router.push(path);
    },
    openMobileMenu() {
      this.isMobileMenuOpen = true;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    setCurrentMenu() {
      this.menus.forEach((item) => {

        if (this.$route.path.includes(item.path)) {
          this.activeMenu = item.path;
        }
      });
    },
}
}
</script>

<style>
.menu-parent:hover .menu-child {
  visibility: visible;
}
.dart-navbar{
    /* background: #FFFFFF; */
    border-radius: 0px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    box-sizing: inherit

    
}
.headerwh{
  width: 100%;
  color: rgb(29, 142, 146);
  background-color: rgb(239, 245, 246);
  display: flex;
  
}


</style>