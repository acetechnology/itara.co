<template>
  <v-container class="coreContainer" data-aos="flip-left">
    <h1 class="text-center mb-2 sectionTitle">Our Core Values</h1>
    <v-layout
      text-left
      text-xs-left
      text-sm-left
      text-md-left
      text-lg-left
      row
      wrap
      align-center
      justify="center"
    >
      <v-flex align-center v-for="item in values" v-bind:key="item.title" xs12 sm6 md6 lg6>
        <v-list three-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="require('@/assets/'+item.icon+'')"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="coreTitle" v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle class="coreSynopsis" v-html="item.synopsis"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        values: [
          {
            icon: "people.png",
            title: "We believe in our People and Partners.",
            synopsis:
              "We value our relationship with our people, partners, customers, communities, the government, institutions we work with, and our environment."
          },
          {
            icon: "trust.png",
            title: "We believe in Trust",
            synopsis:
              "Trust is at the core of building any relationship. We are conscious of our promises daily, and we work to ensure we keep our promises to our people and partners."
          },
          {
            icon: "learn.png",
            title: "We believe Continuous Learning",
            synopsis:
              "Learning never stops. We are committed to learning every day to enable us to do more for our people and partners. We are a learning organization."
          },
          {
            icon: "tech.png",
            title: "We believe in Technology",
            synopsis:
              "We believe in using technology to do good. We are committed to applying the technologies of the fourth industrial revolution in building Africa."
          }
        ]
      };
    }
  };
</script>