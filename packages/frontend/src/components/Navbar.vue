<template>
  <nav>
    <v-app-bar class="d-flex align-center pl-3" :elevation="0" density="default" color="rgba(255, 0, 0, 0.0)">
      <RouterLink to="/" class="mr-3">
        <Logo />
      </RouterLink>
      <template v-slot:append>
        <v-btn to="/service-areas" class="d-none d-sm-flex" variant="text" color="primary">Service Areas</v-btn>
        <v-btn class="ml-3 d-none d-sm-flex" rounded="0" variant="flat" color="primary">Free Quote</v-btn>
      </template>
    </v-app-bar>
  </nav>


  <!-- <v-btn to="/" class="mx-3" variant="text" color="primary">Owner / Operator</v-btn> -->
</template>

<script setup lang="ts">

</script>
<style scoped>
a {
  text-decoration: none;
}
</style>