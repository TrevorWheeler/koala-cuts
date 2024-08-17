<template>


  <!-- <img class="background-svg" src="../assets/svg-background.svg"></img> -->

  <div class="splash-container">
    <div class="message-container">
      <div class="message-content">
        <h1>Free up your
          weekend</h1>
        <p class="">Time is money and when it comes to the weekend, your time is
          priceless, with Koala cuts in your corner you can put the weekend back in your pocket.
        </p>
        <v-btn rounded="0" class="text-quote-button mt-15" size="x-large" variant="flat" color="primary">Free
          Quote</v-btn>
      </div>
    </div>
    <div class="image-container">
      <img alt="Koala relaxing after a mowing job well done." src="../assets/koala-beach-chair.svg"></img>
    </div>
    <v-btn rounded="0" class="mt-0 splash-quote-button" size="x-large" variant="flat" color="primary" block>Free
      Quote</v-btn>
    <div class="nav-down">
      <v-btn rounded="0" class="mt-5 arrow" append-icon="mdi-arrow-down" prepend-icon="mdi-arrow-down"
        variant="default">
        <template v-slot:prepend>
          <v-icon color="black"></v-icon>
        </template>
        services
        <template v-slot:append>
          <v-icon color="black"></v-icon>
        </template>
      </v-btn>
    </div>
  </div>


</template>
<script setup lang="ts">

</script>
<style scoped>
.background-svg {
  z-index: 0;
  position: absolute;
  top: -10vw;
  left: -25vw;
  height: 170vh;
}

h1 {
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 900;
  text-wrap: nowrap;
  width: 100%;
  text-align: center;
}

p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  /* padding: 0 1rem; */
}


.splash-container {
  background-color: #68D798;
  height: calc(100vh - 64px);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 52px 36px;
  grid-template-areas:
    "image"
    "message"
    "quote-button"
    "navdown";
  padding: 0 1rem;
  max-width: 1800px;
  margin: 0 auto;
}

.splash-quote-button {
  grid-area: quote-button
}

.message-container {
  grid-area: message;
  display: flex;
}

.image-container {
  grid-area: image;
  padding: 2rem 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    min-width: 300px;
    max-width: 650px;
  }

}


.nav-down {
  grid-area: navdown;
  display: flex;
  justify-content: center;
  align-items: end;
}

.text-quote-button {
  display: none;
}



@media (min-width: 1000px) {
  .splash-container {
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 36px;
    grid-template-areas:
      "message image"
      "navdown navdown";
    padding: 0 20px
  }

  .splash-quote-button {
    display: none;
  }

  .message-container {
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    text-align: left;
  }

  p {
    text-align: left;
  }

  .text-quote-button {
    display: block;
  }

}


@media (min-width: 1250px) {
  h1 {
    font-size: 4rem;
  }
}




@media (min-width: 1400px) {
  h1 {
    font-size: 4rem;
  }


  .message-container {
    justify-content: end;
  }

  .message-content {
    width: 90%;
  }


  .image-container {
    justify-content: start;
  }
}



@media (min-width: 1600px) {
  .message-content {
    /* width: 80%; */
  }

  h1 {
    font-size: 4.4rem;
  }
}









/* @keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.arrow-text {
  position: fixed;
  bottom: 60px;
  left: 50%;
  margin-left: -20px;
}

.arrow {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 40px;
  height: 40px;

}

.bounce {
  animation: bounce 3s infinite;
} */
</style>