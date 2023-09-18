<template>
    <div class="page_container">
      <div class="heading">
        <h1><b>Class and Style Bindings</b></h1>
      </div>
      <p>
        Class and style bindings are features in Vue.js
        that allow you to dynamically manipulate the classes and styles of HTML elements based on data in your Vue component.
        The changes can be made in CSS or HTML with the existing code to see the effects of the bindings.
      </p>
      <br>
      <div class="part_1">
        <div class="heading">
          <h2><u>Binding HTML class [v-bind:class]</u></h2>
        </div>
  
        <p>
          Binding HTML classes in Vue.js using v-bind:class allows you to dynamically manipulate the classes of HTML elements based on data in your Vue component.
          This powerful feature can be used to apply or remove classes based on conditions, user interactions, or data changes.
          It's commonly used for creating responsive and interactive user interfaces.
        </p>
  
        <div class="interaction">
          <!-- Example of HTML class binding -->
          <div :class="{ highlighted: isHighlighted, important: isImportant }">
            <p>This is a dynamically styled paragraph.</p>
          </div>
  
          <!-- Toggle buttons for class binding -->
          <button @click="Highlight">Highlight</button>
          <button @click="Importance">Important</button>
        </div>
      </div>
  
      <br>
  
      <div class="part_2">
        <div class="heading">
          <h2><u>Binding Inline Styles [v-bind:style]</u></h2>
        </div>
  
        <p>
          Binding inline styles in Vue.js using v-bind:style allows you to dynamically set CSS styles directly on HTML elements based on data in your Vue component.
          This feature enables you to apply styles such as colors, font sizes, and more, dynamically.
          You can change the styles of elements based on conditions, user interactions, or data changes, enhancing the interactivity and responsiveness of your web application.
        </p>
      </div>
  
      <br>
  
      <div class="interaction">
        <!-- Example of inline style binding -->
        <div :style="{ backgroundColor: bgColor, color:new_color, fontSize: textSize + 'px' }">
          <p>This is assignment 2.3C of SIT 120</p>
        </div>
  
        <!-- Input fields for inline style binding -->
        <input v-model="bgColor" placeholder="Background Color" />
        <input v-model="new_color" placeholder="Enter the colour for the text" />
        <input v-model="textSize" placeholder="Font Size (px)" />

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isHighlighted = ref(false);
  const isImportant = ref(false);
  
  const Highlight = () => {
    isHighlighted.value = !isHighlighted.value;
  };
  
  const Importance = () => {
    isImportant.value = !isImportant.value;
  };
  
  const bgColor = ref('white');
  const textSize = ref(20);
  const new_color=ref('red');
  </script>
  
  <style>
  .heading {
    color: darkred;
  }
  
  .page_container {
    background-color: violet;
    margin: auto;
    width: 1100px;
    margin-left: 20px;
    color: lightyellow;
    
  }
  
  .part_1 {
    color: darkblue;
  }
  
  .highlighted {
    background-color: yellow;
  }
  
  .important {
    font-size: xx-large;
  }
  
  .interaction {
    display: block;
    border: 3px dotted black;
    color: darkgray;
    text-align: center;
  }
  </style>
  