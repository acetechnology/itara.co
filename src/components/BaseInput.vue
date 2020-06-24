<template>
  <v-text-field class="pr-3 emailField"  :label="label" :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners"></v-text-field>
</template>

<script>
  import { formFieldMixin } from "../mixins/formFieldMixin";
  export default {
    mixins: [formFieldMixin],
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: this.updateValue
          
        };
      }
    }
  };
</script>
