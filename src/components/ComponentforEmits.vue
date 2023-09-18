<template>
    <div class="Message">
      <h2>Message from the Emit Component</h2>
      <button @click="Message">Send Message to Components.vue (Parent File)</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      Message() {
    this.$emit( 'Hello from Child Component!');                                     //Implementing emits here 
        alert('Message sent to Parent file(components.vue.)!');
      },
    },
  };
  </script>
  
  <style>
  .Message {
    background-color: purple;
    color: yellow;
  }

  </style>
  