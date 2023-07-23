<script>
  export default {

  }

</script>

<template>
 <div class="app">
  <RouterView />
 </div>
  <!-- <RouterView /> -->
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
  }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
  main {
    flex: 1;
  }
  video {
    max-width: none;
  }
  /* .header:target video {
        display: none;
    }  */
   
</style>
