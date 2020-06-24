<template>
  <v-app light>
    <NavBar :menuItem="menuItem" :socialMediaItem="socialMediaItem" />
    <v-content>
       <router-view :key="$route.fullPath" />
    </v-content>
    <Footer :socialMediaItem="socialMediaItem" />
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "App",
    data() {
      return {
        menuItem: [
          { title: "Home", link: "home", type:"self" },
          { title: "Who We Are", link: "#about", type:"id"  },
          { title: "Products", link: "https://www.itara.ng/", type:"external"  },
          { title: "Careers", link: "careers", type:"self"  },
          { title: "Contact Us", link: "#contactus", type:"id"  }
        ],
        socialMediaItem: [
          { icon: "mdi-facebook", link: "https://web.facebook.com/Itarang-112632246789112/", handle:"itarang" },
          { icon: "mdi-twitter", link: "https://twitter.com/", handle:"Itaradotng" },
          { icon: "mdi-instagram", link: "https://www.instagram.com/", handle:"itara.ng" }
        ]
      };
    },
    components: {
      NavBar,
      Footer
    }
  };
</script>

<style lang="scss">
  @import "App.scss";
</style>
