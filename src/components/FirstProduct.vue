<template>
  <v-container class="mSpacing firstProductContainer">
    <h1 class="text-center mb-5 sectionTitle">Our First Product</h1>
    <v-layout row wrap align-center>
      <v-flex
        class="text-center text-xs-center text-sm-center text-md-left text-lg-left"
        xs12
        md6
        sm12
        data-aos="zoom-in"
      >
        <img class="firstProductImage" src="@/assets/cart.png" alt="First Product" />
      </v-flex>
      <v-flex data-aos="zoom-out-up" xs12 md6 sm12 text-left>
        <h2
          class="hidden-sm-and-up text-center text-xs-center text-sm-center text-md-left text-lg-left mb-2 pl-5 pr-5 font-weight-black greenTxt"
        >Itara.ng</h2>
        <h4
          class="text-center text-xs-center text-sm-center text-md-left text-lg-left mb-5 pl-5 pr-5 fpSynopsisQuote"
        >We are building Itara Marketplace – a platform to make locally made goods and African brands accessible.</h4>
        <p
          class="text-left text-xs-center text-sm-center text-md-left text-lg-left mb-2 pl-5 pr-5 fpSynopsis"
        >In line with our mission to lead the digitization of African societies, we are digitizing the informal production and manufacturing ecosystems starting in Lagos, Nigeria. We believe this would lead to the migration of workers into the digital economy and enable them to reap the benefits of digital inclusion.</p>
        <p
          class="text-left text-xs-center text-sm-center text-md-left text-lg-left mb-2 pl-5 pr-5 fpSynopsis"
        >We work with our product partners – entrepreneurs, manufacturers, and creatives – to enhance their production and creative processes, improve the quality of their products, and offer them a clear path to market.</p>
        <p
          class="text-left text-xs-center text-sm-center text-md-left text-lg-left mb-2 pl-5 pr-5 fpSynopsis"
        >Lastly, the consumers win as they would have access to the best locally made products.</p>
        <p
          class="text-center text-xs-center text-sm-center text-md-left text-lg-left mb-2 pl-5 pr-5"
        >
        <br>
          <v-btn class="learnMore">
            Visit
            <a
              class="menuLink ml-1 mr-1"
              target="blank"
              href="https://www.itara.ng/"
            >www.itara.ng</a> to learn more
          </v-btn>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>