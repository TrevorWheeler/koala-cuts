<template>
  <div class="services-wrapper">
    <div class="services-container">
      <div class="service">
        <div class="service-left pa-13">
          <v-img src="../assets/koala-mowing.svg"></v-img>
        </div>
        <div class="service-right">
          <div class="content pr-15">
            <h2 class="text-lg-h3 font-weight-black mb-1">General Lawn Maintenance</h2>
            <p class="text-subtitle-1"> Your can expect your grass to be cut, your edges to be sharp, and your
              paths to
              be clean. Whether this is
              a one off job or a bi-weekly service, Koala Cuts has you covered.</p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="service-left">
          <div class="content pl-15">
            <h2 class="text-lg-h3 font-weight-black mb-1">Shrub and Hedge Trimming</h2>
            <p class="text-subtitle-1">Have overgrown hedges or just want to keep your hedges maintained? Koala
              Cuts will work with you to bring
              your garden to life with some crispy hedges.</p>
          </div>
        </div>
        <div class="service-right pa-15">
          <v-img width="100%" src="../assets/koala-hedge.svg"></v-img>
        </div>
      </div>

      <div class="service">
        <div class="service-left pa-15">
          <v-img src="../assets/koala-fertiliser.svg"></v-img>
        </div>
        <div class="service-right">
          <div class="content">
            <h2 class="text-lg-h3 font-weight-black mb-1">Fertilisation, Herbicides and Pest Control</h2>
            <p class="text-subtitle-1">Feel like you aren’t getting the most out of your lawn? Koala Cuts can provide
              industry standard fertilisation, herbicides and pest control to bring your lawn back from the brink.</p>
          </div>
        </div>
      </div>

      <div class="service">
        <div class="service-left">
          <div class="content">
            <h2 class="text-lg-h3 font-weight-black mb-1">Yard Clean Up and Leaf Removal</h2>
            <p class="text-subtitle-1">Have an overgrown backyard? A small tree or hedge that needs to be removed? Koala
              Cuts will work with you to solve your problem.</p>
          </div>
        </div>
        <div class="service-right  pa-15">
          <v-img width="100%" src="../assets/koala-cleanup.svg"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>
<style scoped>
.services-wrapper {
  /* height: calc(100vh - 64px); */
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.services-container {
  grid-area: 2 / 3 / 12 / 11;
}

.service {
  height: 40vh;
  width: 100%;
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
  /* background-color: yellow; */
}

.service-left {
  /* background-color: blue; */
  grid-area: 1 / 1 / 13 /7;
  display: flex;
  align-items: center;
}

.service-right {
  /* background-color: green; */
  grid-area: 1 / 7 / 13 / 13;
  display: flex;
  align-items: center;
}


.content {
  /* width: 85%; */
}
</style>