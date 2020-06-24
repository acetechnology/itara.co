<template>
  <v-app-bar app flat fixed>
    <v-navigation-drawer v-model="drawer" fixed app absolute right>
      <v-list>
        <v-icon class="pl-3" @click="drawer = !drawer">mdi-close-circle</v-icon>
        <v-list-item v-for="item in menuItem" :key="item.title" link>
          <v-list-item-content>
            <router-link
              class="menuLink"
              v-if="item.type == 'self'"
              :to="{ name: item.link }"
            >{{ item.title }}</router-link>
            <router-link
              class="menuLink"
              v-else-if="item.type == 'id'"
              :to="'/'+item.link"
            >{{ item.title }}</router-link>
            <a
              class="menuLink"
              v-else-if="item.type == 'external'"
              :href="item.link"
              target="_blank"
            >{{ item.title }}</a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div>
          <v-btn v-for="item in socialMediaItem" :key="item.title" link icon>
           <a class="menuLink" target="blank" :href="item.link+item.handle">
          <v-icon>{{ item.icon }}</v-icon>
        </a>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
     <router-link
         :to="{ name: 'home' }"
        >
    <img
      data-aos="fade-right"
      class="logo"
      src="@/assets/logo.png"
      alt="Itara's Logo"
    />
     </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items data-aos="fade-left" class="hidden-sm-and-down" id="header">
      <v-btn link text rounded v-for="item in menuItem" :key="item.title">
        <router-link
          class="menuLink"
          v-if="item.type == 'self'"
          :to="{ name: item.link }"
        >{{ item.title }}</router-link>
        <router-link
          class="menuLink"
          v-else-if="item.type == 'id'"
          :to="'/'+item.link"
        >{{ item.title }}</router-link>
        <a
          class="menuLink"
          v-else-if="item.type == 'external'"
          :href="item.link"
          target="_blank"
        >{{ item.title }}</a>
      </v-btn>
      <v-btn v-for="item in socialMediaItem" :key="item.title" link icon>
        <a class="menuLink" target="blank" :href="item.link+item.handle">
          <v-icon>{{ item.icon }}</v-icon>
        </a>
      </v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon data-aos="fade-left" @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false
      };
    },
    props: {
      menuItem: {
        type: Array,
        required: true
      },
      socialMediaItem: {
        type: Array,
        required: true
      }
    }
  };
</script>