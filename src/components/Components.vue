<template>
    <div class="page_container">
      <div class="heading">
        <h1><u><b>props</b></u></h1>
      </div>
      <p>
        In Vue.js, props are a way to pass data from a parent component to a child component.
        Props allow you to establish a unidirectional data flow, where data is passed from the parent to the child but not the other way around.
        This is a fundamental concept in Vue.js and is commonly used when building complex applications with multiple components.
      </p>
      <br>
      <Componentforprops/> <!-- Props component is defined in the Componentforprops.vue file -->
  
      <div class="heading">
        <h1><u><b>Events [$emit]</b></u></h1>
      </div>
      <p>
        In Vue.js, the $emit mechanism is a powerful tool for facilitating communication between child components and their parent components.
        It allows child components to emit custom events with data, which can then be captured and handled by parent components.
      </p>
      <br>
      <ComponentforEmits/>    <!-- Emit component is defined in the ComponentforEmits.vue file -->
  
      <div class="heading">
        <h1><b><u>Slots</u></b></h1>
      </div>
      <p>
        Slots are a powerful feature in Vue.js that allows you to compose and customize the structure of components from the parent component.
        They provide a way to pass content from the parent component to its child components, allowing for more flexible and reusable component design.
      </p>
  
     
      <Componentforslots>                           <!-- slots component is defined in the Componentforalots.vue file -->
        <pre>
            Name:- Anmolpreet Singh
            Student id:- 222502703
            Degree:-Bachelor Of Information Technology
            Year:- 1st year
            Student type:- International
        </pre>
        
      </Componentforslots>
    </div>
  </template>
  
  <script>
  import Componentforprops from '../components/Componentforprops.vue';
  import ComponentforEmits from '../components/ComponentforEmits.vue';
  import Componentforslots from '../components/Componentforslots.vue';
  
  export default {
    components: {
      Componentforprops,
      ComponentforEmits,
      Componentforslots,
    },
    name: 'ParentComponent',
  };
  </script>
  
  <style scoped>
  .page_container {
    background-color: lightgray;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: black;
  }
  .heading {
    color: darkred;
  }
  </style>
  