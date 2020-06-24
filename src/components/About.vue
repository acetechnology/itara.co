<template>
  <v-container class id="about">
    <v-layout row wrap align-center class="aboutContainer">
      <v-flex xs12 md8 sm12>
        <h1
          class="text-center text-xs-center text-sm-center text-md-left text-lg-left sectionTitle"
        >Who We Are</h1>
        <p
          data-aos="fade-up-right"
          class="text-center text-xs-center text-sm-center text-md-left text-lg-left aboutTxt"
        >We are an African Technology startup on a mission for Africa. What we have is our hunger to build the Africa we want. At Itara, we are obsessed with growth and development in Africa.</p>
        <p
          data-aos="fade-up-right"
          class="text-center text-xs-center text-sm-center text-md-left text-lg-left aboutTxt"
        >We believe we can utilize the technologies of the fourth industrial revolution to drive growth in Africa. We are committed to using these technologies to ensure development and integration within and across Africa as well as maximize the gains of globalization within the continent.</p>
      </v-flex>
      <v-flex
        class="text-center text-xs-center text-sm-center text-md-right text-lg-right"
        xs12
        md4
        sm12
        data-aos="fade-left"
      >
        <img class="map" src="@/assets/africa.png" alt="About Image" />
      </v-flex>
    </v-layout>

    <v-layout data-aos="fade-up" class="aboutContainer" row wrap align-center>
      <v-flex
        class="order-2 order-lg-1 order-md-1 order-sm-2 order-xs-2 text-center text-xs-center text-sm-center text-md-left text-lg-left"
        xs12
        md4
        sm12
        data-aos="fade-right"
      >
        <img class="map" src="@/assets/eArtboard.png" alt="About Image" />
      </v-flex>

      <v-flex xs12 md8 sm12 class="order-1 order-lg-2 order-md-2 order-sm-1 order-xs-1">
        <p
          data-aos="fade-up-right"
          class="text-center text-xs-center text-sm-center text-md-right text-lg-right aboutTxt float-right"
        >We have developed a unique business model that focuses on three core sectors - retail, manufacturing & industrialization, and trade to transform Africa.</p>
        <p
          data-aos="fade-up-left"
          class="text-center text-xs-center text-sm-center text-md-right text-lg-right aboutTxt float-right"
        >We are cognizant of the scale of our dreams and the challenges ahead. We are, however, fully committed to our mission, and we would play our part in the development of our continent. Africa is our home. Africa is our pride. We must band together to build the Africa we want.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: function() {
      return { show: false };
    },

    methods: {
      showMore: function() {
        this.show = true;
      }
    }
  };
</script>