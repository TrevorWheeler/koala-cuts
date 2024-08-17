<template>
  <v-footer class="text-white footer-wrapper" style="background-color:#65CE95;">
    <div class="footer-container">
      <Logo />

      <div class="contact-container px-2">
        <!-- <p>Email or Text Preferred</p> -->

        <div class="email-container">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <p class="font-weight-black">query@koalacuts.com</p> -->
          <v-btn to="/service-areas" class="" variant="text" color="primary">query@koalacuts.com</v-btn>
        </div>


        <!-- <div class="phone-container px-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
          <p class="">0488 4788 179</p>
        </div> -->

      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">


</script>
<style scoped>
.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 159px !important;
  color: black;
}


.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.contact-container {
  margin-top: 15px;
  display: flex;
}


.email-container,
.phone-container {
  display: flex;
}

p {
  color: black;
  font-weight: bolder;
  margin-left: 0.5rem;
}
</style>