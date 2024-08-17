<template>
  <v-sheet class="business-card" :elevation="3" border rounded>
    <div class="mower-background">
      <Mower class="mower-component" />
    </div>
    <div class="business-card-left">
      <v-row no-gutters>
        <v-col cols="12" class="pa-0 text-center">
          <h1 class="pa-0">TREV'S</h1>
        </v-col>
        <v-col cols="12" class="pa-0 text-center">
          <h1> <span style="color:#8ECC3C">MOWING</span></h1>
        </v-col>
      </v-row>
    </div>
    <div class="business-card-right sansita-black">
      <h4>General Lawn Maintenance</h4>
      <h4>Shrub / Hedge Trimming</h4>
      <h4>Rubbish Removal</h4>
      <div class="bar">
      </div>
      <h4>Ipswich Areas</h4>
      <h4>Request a free quote below</h4>

    </div>

  </v-sheet>
</template>

<script setup lang="ts">


</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap');

.business-card {
  width: 533px;
  height: 300px;
  background-color: #0B2C3E;
  /* background-color: #212121; */
  position: relative;

  display: flex;
}

.business-card-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 50%;
  z-index: 2;
}

.bar {
  margin: 10px 0;
  width: 25%;
  height: 3px;
  background-color: #8ECC3C;
}

.business-card-left {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 50%;
  z-index: 2;
}

h1 {
  font-size: 50px;
  line-height: 1;
}

.mower-background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.mower-component {
  padding: 5px;
}

.sansita-regular {
  font-family: "Sansita", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.sansita-bold {
  font-family: "Sansita", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.sansita-extrabold {
  font-family: "Sansita", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.sansita-black {
  font-family: "Sansita", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.sansita-regular-italic {
  font-family: "Sansita", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.sansita-bold-italic {
  font-family: "Sansita", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.sansita-extrabold-italic {
  font-family: "Sansita", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.sansita-black-italic {
  font-family: "Sansita", sans-serif;
  font-weight: 900;
  font-style: italic;
}
</style>