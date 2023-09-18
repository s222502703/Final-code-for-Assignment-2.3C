<template>
    <div class="implement">
      <p>
        This section has been created with props component
      </p>
      <h1><b>{{ text }}</b></h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {                                                                           //props defined here 
        type: String, 
        default: '**Props Component Implemented**', 
      },
    },
  };
  </script>
  
  <style>

  .implement {
    background-color: darkturquoise;
    width: auto;
    color:darkmagenta
  }
  </style>
  