<template>
  <div>
    <HeaderImage />
    <About />
    <Mission />
    <VisionMission />
    <CoreValues />
    <FirstProduct />
  </div>
</template>

<script>
  import HeaderImage from "@/components/HeaderImage.vue";
  import About from "@/components/About.vue";
  import Mission from "@/components/Mission.vue";
  import VisionMission from "@/components/VisionMission.vue";
  import FirstProduct from "@/components/FirstProduct.vue";
  import CoreValues from "@/components/CoreValues.vue";
  import { type } from "os";

  export default {
    components: {
      HeaderImage,
      About,
      Mission,
      VisionMission,
      CoreValues,
      FirstProduct
    }
  };
</script>