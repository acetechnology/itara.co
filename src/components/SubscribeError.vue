<template>
  <div class="v-text-field__details mt-3">
    <div class="v-messages theme--light error--text">
      <div class="v-messages__wrapper">
        <div class="v-messages__message" v-if="error">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubscribeError",
    props: {
      error: {
        type: String,
        default: "",
        required: true
      }
    }
  };
</script>