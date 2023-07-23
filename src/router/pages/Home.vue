<script>
  // import HeaderMain from '../../components/HeaderMain.vue';
    export default {
        components: {
            // HeaderMain,

        }
    }

</script>

<template>
  <!-- <HeaderMain/> -->
  <div class="router-container flex justify-center items-center flex-col mt-64 text-center">
    <router-link class="link" to="/">Go to Home page</router-link>
    <router-link class="link mt-8" to="/ourPeople">Go to OurPeople page</router-link>
    <router-link class="link mt-8" to="/about">Go to About page</router-link>
  </div>
  




</template>   
<style>
/* .parent {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
} */
/* .child {
  color: white;
  font-size: 50px;
} */
  .link {
    color:white ;
    font-size: 8rem;
    flex-wrap: wrap;
    
  }
</style>