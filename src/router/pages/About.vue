<script>
import HeaderAbout from '../../components/AboutPageParts/HeaderAbout.vue';
import MainAbout from '../../components/AboutPageParts/MainAbout.vue';
import FooterAbout from '../../components/AboutPageParts/FooterAbout.vue';

    export default {
        components: {
          HeaderAbout,
          MainAbout,
          FooterAbout

        }
    }

</script>

<template>
  <div class="about">
    <HeaderAbout></HeaderAbout>
    <MainAbout></MainAbout>
    <FooterAbout></FooterAbout>
  </div>
  
 
      
  
  <!-- <RouterView /> -->
</template>

<style>
  
  body {
    background: #20242A;
  }
  
  /* * {
    background: #1D1F24;
  } */
  
</style>