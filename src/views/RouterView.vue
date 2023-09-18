<template>
    <div class="page_container">
      <div class="heading">
        <h1><b><u>Routers</u></b></h1>
      </div>
      <p>
        Vue Router plays a crucial role in building modern Vue.js applications, enabling developers to create complex SPAs with structured navigation and dynamic content rendering. It helps ensure a smooth user experience by handling route changes and component rendering efficiently.
      </p>
      <p> In This, I am going to add gthe navigation to the forms , List vendering and Event Handling . </p>
      <div>
        <pre>
        <button @click="activeComp = 'EventHandlingView'">Event Handling</button>
        <button @click="activeComp = 'FormView'">Form View</button>
        <button @click="activeComp = 'ListRenderingView'">list Rendering</button><br>
        <component :is="activeComp"></component>
        </pre>
        

      </div>
    </div>
  </template>
  
  <script>
   import ListRenderingView from '../views/ListRenderingView.vue';
    import FormView from '../views/FormView.vue';
    import EventHandlingView from '../views/EventHandlingView.vue';
  
  export default {
    data() {
      return {
        activeComp: '', // Initially, no component is active
      };
    },
    components: {
      ListRenderingView,  
      FormView,
      EventHandlingView,
    },
  };
  </script>
  
  <style>
  .heading {
    color: darkslateblue;
  }
  
  .page_container {
    background-color: yellowgreen;
    color: darkviolet;
    width:fit-content;
  }
  </style>
  