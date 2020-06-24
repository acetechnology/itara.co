<template>
  <v-container center class="visionMissionContainer mSpacing">
    <v-layout row wrap align-center>
      <v-flex data-aos="fade-right" class="order-2 order-md-1 order-sm-1 order-xs-2" xs12 md6 sm6>
        <img class="visionImage" src="@/assets/vision.png" alt="Vision Image" />
      </v-flex>
      <v-flex data-aos="fade-left" class="order-1 order-md-2 order-sm-2 order-xs-1" xs12 md6 sm6 >
        <h1 class="text-left mb-2 vmTitle sectionTitle">Our Vision</h1>
        <p
          class="text-left vmsynopsis"
        >To equip everyone with technology and products to enhance their enterprise and lead better lives.</p>
      </v-flex>
      <v-flex data-aos="fade-right" class="order-3 order-md-3 order-sm-3 order-xs-3" xs12 md6 sm6>
        <h1 class="text-right mb-2 sectionTitle">Our Mission Statement</h1>
        <p
          class="text-right vmsynopsis float-right"
        >To make accessible technology and products that delight everyone.</p>
      </v-flex>
      <v-flex data-aos="fade-left" class="order-4 order-md-4 order-sm-4 order-xs-4" xs12 md6 sm6>
        <img class="missionImage" src="@/assets/target.png" alt="Mission Image" />
      </v-flex>
    </v-layout>
  </v-container>
</template>