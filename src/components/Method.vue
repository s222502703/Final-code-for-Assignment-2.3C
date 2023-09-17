<template>
    <div class="page_container">
      <h1><b>Methods</b></h1>
      <div class="content">
        <p>In Vue.js, methods are functions that you can define within a Vue component to encapsulate and manage behavior or functionality.
          These methods can be called in response to events, user interactions, or at any point within the component's lifecycle.
        </p>
      </div>
      <span class="example">
        <h2>Click to run a method</h2>
      </span>
      <div id="app">
        <p>Click on the box below:</p>
        <div id="tester" @click="changeText">{{ text }}</div>
      </div>
      <br>
  
      <h2><u>Position Finder by Methods </u></h2>
      <div class="checker">
        <p>Move the mouse pointer over the box below:</p>
        <div @mousemove="handleMouseMove">
          <span>xPos: {{ xPos }}</span><br><span>yPos: {{ yPos }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        text: '',
        xPos: 0,
        yPos: 0,
      };
    },
    methods: { 
      changeText() { 
        this.text = 'This text is written by methods !!!!';
      },
      handleMouseMove(event) {
        this.xPos = event.offsetX;
        this.yPos = event.offsetY;
      },
    },
  };
  </script>
  
  <style scoped>
  .page_container {
    width: 1000px;
    background-color: springgreen;
    color: red;
    text-align: center;
    height: 800px;
  }
  
  .content {
    color: darkblue;
  }
  
  #app {
    background-color: lightgreen;
    padding: 20px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    border: black dashed 1px;
    width: 200px;
    color: black;
  }
  
  #tester {
    background-color: burlywood;
    padding: 5px;
  }
  
  .example {
    color: darkviolet;
  }
  
  .checker {
    margin: 0 auto; /* Center horizontally */
    display: block;
    width: 400px;
    height: 150px;
    background-color: lightslategray;
    padding: 20px;
    text-align: center;
    color: lightgoldenrodyellow;
  }
  </style>
  