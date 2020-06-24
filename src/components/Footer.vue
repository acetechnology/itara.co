<template>
  <v-footer id="footer" height="auto" dark>
    <v-container class="careersContent">
      <v-row align-left justify-left>
        <v-col cols="12" md="2" sm="2" lg="2">
          <h3 class="footerHeader">Follow Us</h3>
          <ul class="pl-0">
            <li
              class="text-left footerSocialLinks"
              v-for="item in socialMediaItem"
              :key="item.title"
            >
              <a :href="item.link+item.handle" target="_blank">
                <v-icon x-small>{{ item.icon }}</v-icon>
                <span>{{item.handle}}</span>
              </a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="6" sm="6" lg="5">
          <h3 class="footerHeader">Sign Up To Our Newsletter</h3>
          <p class="footerSynopsis mb-0">Be updated about our events and products</p>
          <v-form @submit.prevent="subscribeNewsLetter" id="contactus" ref="form">
            <div class="d-sm-flex d-xs-flex flex-nowrap">
              <BaseInput
                @blur="$v.subscribe.email.$touch()"
                type="email"
                label="Enter your email address"
                :error-messages="$v.subscribe.email.$error && !$v.subscribe.email.required ? 'Email is required.':'' || $v.subscribe.email.$error && !$v.subscribe.email.email ? 'Please enter a valid email.':''"
                autocomplete="email"
                v-model="subscribe.email"
              />

              <div class="pl-0 pr-3 pt-md-6 pt-lg-4 pt-sm-6 align-end">
                <v-btn type="submit" class="subscribeBtn" :disabled="$v.$invalid" light>Subscribe</v-btn>
              </div>
            </div>
          </v-form>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="5">
          <h3 class="footerHeader">Contact Us</h3>
          <ul class="pl-0">
            <li class="text-left footerSocialLinks">
              <v-icon x-small>mdi-phone</v-icon>
              <a href="tel:+2348170135412">+2348170135412</a>
            </li>
            <li class="text-left footerSocialLinks">
              <v-icon x-small>mdi-email</v-icon>
              <a href="mailto:info@itara.co" target="_top">info@itara.co</a>
            </li>
            <li class="text-left footerSocialLinks">
              <v-icon x-small>mdi-map</v-icon>
              <span>
                7 Ibiyinka Olorunbe Close,
                Victoria Island, Lagos
              </span>
            </li>
          </ul>
          <p class="footerRights">&copy; {{ new Date().getFullYear() }} Itara, All rights reserved</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  import { required, email } from "vuelidate/lib/validators";
  import SubscribeError from "@/components/SubscribeError.vue";
  import BaseInput from "@/components/BaseInput.vue";
  import NProgress from "nprogress";
  import axios from "axios";

  const apiClient = axios.create({
    baseURL: "https://devapi.itara.ng/api/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  export default {
    data() {
      return {
        color: null,
        mode: null,
        snackbar: false,
        text: null,
        timeout: 6000,
        x: null,
        y: "top",
        subscribe: {
          email: null
        }
      };
    },
    components: {
      SubscribeError,
      BaseInput
    },
    props: {
      socialMediaItem: {
        type: Array,
        required: true
      }
    },
    validations: {
      subscribe: {
        email: {
          required,
          email
        }
      }
    },
    methods: {
      subscribeNewsLetter() {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          NProgress.start();
          const newsLetterDetails = {
            email: this.subscribe.email,
            type: "corporate"
          };
          apiClient
            .post("/subscriptions/newsletters", newsLetterDetails)
            .then(response => {
              this.text = response.data.data;
              this.color = "#7fad7c";
              this.$refs.form.reset();
              this.$nextTick(() => {
                this.$v.$reset();
              });
              this.snackbar = true;
              NProgress.done();
            })
            .catch(error => {
              if (error.response.data.errorMessages) {
                error.response.data.errorMessages.forEach(errorElement => {
                  this.text = errorElement;
                  this.color = "#ff5252";
                  this.snackbar = true;
                });
              }
              NProgress.done();
            });
        }
      }
    }
  };
</script>