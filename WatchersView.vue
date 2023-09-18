<template>
    <div class="page_container">
      <div id="heading"><h1><b><u>Watchers</u></b></h1></div>
  
      <p>
        Watchers in Vue.js are a powerful and essential feature that allows you to reactively monitor changes in a data property and execute custom logic in response to those changes.
        It provides a way to observe and respond to changes in data without the need for manual event handling or extensive if-else checks.
      </p>
  
      <div id="heading"><h2>Watcher Example 1</h2></div>
      <p>Counter: {{ counter }}</p>
      <input v-model="userInput" placeholder="Enter a number" />
      <p>In this example, if you write something other than numbers, it will show 'NaN', which means 'Not a Number'. It changes based on the user input!</p>
  
      <div id="heading"><h2>Watcher Example 2</h2></div>
      <p>Message: {{ message }}</p>
      <input v-model="userInput2" placeholder="Enter a message" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 'NaN',
        userInput: '',
        message: 'Watchers used!!!',
        userInput2: '',
      };
    },
    watch: {
      // Watch for changes in the 'userInput' data property
      userInput(newValue, oldValue) {
        // Perform actions based on the new value,
        if (!isNaN(newValue)) {
          this.counter = parseInt(newValue); // parseInt converts a string to an integer
        }
      },
      // Watch for changes in the 'userInput2' data property
      userInput2(newValue, oldValue) {
        // When the input changes, update the 'message' data property
        this.message = `You entered: ${newValue}`;
      },
    },
  };
  </script>
  
  <style scoped>
  
  #heading {
    background-color: lightgoldenrodyellow;
    color: darkblue;
  }
  
  .page_container {
    background-color: violet;
    padding: 15px;
  }
  </style>
  