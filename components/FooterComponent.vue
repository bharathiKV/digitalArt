<template>
   <div>
    
    
  <div class="flex flex-col ">
    <div class="footer-color py-12 px-4">

      <div class="mx-auto px-4 lg:px-12 xl:px-24 py-2 flex flex-col md:flex-row justify-between space-y-4 md:space-x-6">
        <div class="flex flex-col space-y-6 text-white">
          <h2 class="text-2xl font-bold ">{{ $t('DIGITAL ART - TheriKopi') }}</h2>
          <a
            
            class="flex flex-row text-base font-normal  space-x-4">
            <img class="h-6 w-6" src="/images/contact/location.svg">
            <p>Address Chennai, Tamil Nadu 600032</p>
          </a>
          <div class="flex flex-row text-base font-normal items-start justify-start space-x-4">
            <img class="h-6 w-6" src="/images/contact/email.svg">
            <a href="mailto:bharathikb8593@gmail.com">therikopi@gmail.com</a>
          </div>
          <div class="flex flex-row text-base font-normal items-start justify-start space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
            </svg>

            <a href="tel:04422500135" class="font-bold text-base text-naan-secondary">Helpline: +91 9159808266</a>
          </div>
        </div>
        <div class="flex flex-col items-start space-y-1 justify-start text-white">

          <p class="text-lg text-white opacity-70">{{ $t('quickLinks') }}</p>
          <div class="flex flex-col">
            <div class="flex flex-wrap items-start justify-start gap-x-3">
              <template v-for="(item, index) in footerLinks">
                <a v-if="item.isExternal" :key="index" :href="item.path">
                  <p class="py-3 font-medium">
                    {{ $t(item.i18n) }}
                  </p>
                </a>
                <nuxt-link v-else :key="index" :to="item.path">
                  <p class="py-3 font-medium">
                    {{ $t(item.i18n) }}
                  </p>
                </nuxt-link>
              </template>
            </div>
            <div class="flex flex-wrap items-start justify-start gap-x-3">
              <template v-for="(item, index) in footerLinks2">
                <a v-if="item.isExternal" :key="index" :href="item.path">
                  <p class="py-3 font-medium">
                    {{ $t(item.i18n) }}
                  </p>
                </a>
                <nuxt-link v-else :key="index" :to="item.path">
                  <p class="py-3 font-medium">
                    {{ $t(item.i18n) }}
                  </p>
                </nuxt-link>
              </template>
            </div>
          </div>
          <p class="text-lg text-white opacity-70">{{ $t('social') }}</p>
          <div class="flex flex-wrap items-center justify-center gap-x-3">
            <a target="_blank" >
              <img src="~/assets/images/footer/fb.svg" alt="Facebook" title="Facebook" >
            </a>
            <a target="_blank" >
              <img src="~/assets/images/footer/twitter.svg" alt="Twitter" title="Twitter">
            </a>
            <a target="_blank" href="https://www.instagram.com/therikopi?igshid=OGQ5ZDc2ODk2ZA==">
              <img src="~/assets/images/footer/instagram.svg" alt="Instagram" title="Instagram">
            </a>
            <a target="_blank" >
              <img src="~/assets/images/footer/youtube.svg" alt="Youtube" title="Youtube">
            </a>
            <router-link to="/">
              <p>View More</p>
            </router-link>
          </div>
          <p class="text-lg text-white opacity-70 pt-3">{{ $t('download') }}</p>
          <div class="flex flex-wrap items-center justify-center space-x-8">
            <a
              class="h-14 object-contain"
              >
              Additional Information of Digital Art - TheriKopi
              <span class="underline">click here</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div> 
   </div>
</template>
<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      footerLinks2: [
        {
          i18n: "Addition Flag (Web)",
          name: "Naan Mudhalvan Schools",
          isExternal: true,
          path: '/',
        },
      ],
      footerLinks: [
        // {
        //   i18n: "gallery",
        //   name: "Gallery",
        //   path: '/gallery',
        // },
        // {
        //   i18n: "contactUs",
        //   name: "Contact Us",
        //   path: '/contact',
        // },
        // {
        //   i18n: "faqs",
        //   name: "FAQ's",
        //   path: '/faq',
        // },
        // {
        //   i18n: "privacyPolicy",
        //   name: "Privacy Policy",
        //   path: '/privacy-policy',
        // },
      ],

    }
  },
}
</script>
<style>
.footer-color{
    --tw-bg-opacity: 1;
    background-color:rgb(29, 142, 146);
    
}
</style>