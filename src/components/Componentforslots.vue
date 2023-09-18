<template>
    
      <h2> Landing in Componentforslots.vue file....</h2>
      <div>
      <p>This content is coming from the Components.vue file...</p>
      <slot></slot> <!-- This slot will be replaced by content provided in the parent component -->
      <button>Verify</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Componentforslots',
  };
  </script>
  
  <style scoped>
  div {
    background-color: lightblue;
    padding: 10px;
    border: 1px solid darkgreen;
  }
  </style>
  