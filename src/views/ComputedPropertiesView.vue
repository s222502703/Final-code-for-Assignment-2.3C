<template>
    <div class="page_container">
      <span id="heading">
        <h1><b>Computed Properties</b></h1>
      </span>
      <p>
        Computed properties in Vue.js are properties that automatically calculate
        their values based on data changes and a defined computation logic. They
        are read-only properties that depend on one or more data properties and
        are used for performing calculations, transformations, or filtering of
        data within Vue components. Computed properties are cached, which means
        they are efficiently recalculated only when their dependencies change,
        improving performance and ensuring that the UI remains in sync with the
        underlying data.
      </p>
      <br>
      <div class="example_1">
        
        <p>Original Value: {{ value }}</p>
        <p>Computed Value: {{ computedValue }}</p>
        <p>Within this the actual value was 5. Then, that value if further changed by the help of computed properties
            <br> {Refer to code for proper Understanding} </p>
      </div>
      <br>
      <div class="example_2">
        <textarea v-model="comment" placeholder="Write the words"></textarea>
        <p>Characters: {{ commentLength }}/200</p>

        <br><p>I have created the character counter by using th computed properties . For better understanding , refer to code in ComputedPropertiesView.vue</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const value = ref(5);
  const comment = ref('');
  
  const computedValue = computed(() => {
    // This computed property depends on 'value'
    return value.value * 2;
  });
  
  const commentLength = computed(() => {
    // This computed property calculates the length of the comment
    return comment.value.length;
  });
  </script>
  
  <style scoped>
  .page_container {
    background-color: lightsalmon;
    width: 900px;
    height: 800px;
    padding: 5px;
  }
  #heading {
    color: darkred;
  }
  .example_1{
    background-color: steelblue;
    color:lightcyan;
    width:fit-content;
    margin: auto;
    padding: 5px;
  }

  .example_2{
    background-color: darkblue;
    color:lightcyan;
    width:500px;
    margin: auto;
    padding: 5px;

  }
  </style>
  