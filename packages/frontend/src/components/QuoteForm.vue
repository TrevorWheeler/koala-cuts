<template>
  <v-form v-model="valid">
    <h2 class="text-h5 font-weight-bold pl-4 mb-4">QUOTE FORM</h2>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-autocomplete label="Please enter the address from which your services are required.." :items="[]"
            variant="solo-filled">
          </v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="firstName" :counter="10" :rules="nameRules" label="First name" required
            variant="solo-filled"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="lastName" :counter="10" :rules="nameRules" label="Last name" required
            variant="solo-filled"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required
            variant="solo-filled"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="email" :rules="emailRules" label="Phone" required variant="solo-filled"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select v-model="service" :items="services" item-value="id" item-title="name" label="Services" required
            variant="solo-filled"></v-select>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="comments" label="Other Comments" variant="solo-filled"></v-textarea>
        </v-col>
        <v-col cols="12" align="end">
          <v-btn rounded="0" class="mt-0" size="x-large" variant="flat" color="primary">Submit Details</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const firstName: Ref<string> = ref('');
const lastName: Ref<string> = ref("");
const email: Ref<string> = ref("");
const service: Ref<number | null> = ref(null);
const comments: Ref<string> = ref("");

const services: Ref<any[]> = ref([
  {
    id: 1,
    name: "General Lawn maintenance"
  },
  {
    id: 2,
    name: "Shurb and Hedge Trimming"
  },
  {
    id: 3,
    name: "Fertilisation, Herbicides and Pest Control"
  },
  {
    id: 4,
    "name": "Yard Clean Up and Leaf Removal"
  }
]);
</script>
