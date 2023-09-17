<template>
  <div class="page_container">
    <div class="content">
      <h1 class="heading"><b><u>Reactivity Fundamentals</u></b></h1>
      <p>It enables the framework to automatically track and update changes to data, ensuring that the user interface (UI) remains 
        synchronized with the underlying data. These fundamentals are essential for building dynamic and responsive applications in Vue.js
        Overall, reactivity fundamentals in Vue.js simplify the process of building dynamic and interactive web applications by handling the synchronization of data and the UI automatically.
         This simplifies the development process and leads to more maintainable code.

      </p>
    </div>
    <br>


    <div class="function">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <p>Count: {{ count }}</p>
    </div>
    <br> 
    <div class="table_generator">
      <h2>Generating Table of {{ factor }} with Reactivity Fundamentals</h2>
      <button @click="generateTable">Generate Table</button>
    </div>
    <div class="result" v-if="showTable">
      <table>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>2x{{ i }}</td>
            <td>{{ multiplication(i) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer>
      <!-- Add footer content here -->
      <p>More Information can be found at :- <a href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity"> Click here...</a> </p>
    </footer>
  </div>
</template>

<script setup>                    /*<script setup> has been used here  */
import { ref } from 'vue';    

const count = ref(0);             /*ref() has beenused here  */
const factor = ref(2);
const showTable = ref(false);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const generateTable = () => {
  showTable.value = !showTable.value;
};

const multiplication = (number) => {
  return factor.value * number;
};
</script>

<style scoped>
.content {
  border-bottom: 4px solid black;
}

.function {
  background-color: burlywood;
  color: tomato;
  width: 500px;
  text-align: center;
}

.heading {
  color: darkred;
}

.table_generator {
  text-align: center;
  background-color: darkblue;
  width: 800px;
  color: white;
  padding:10px;
}

.result {
  text-align: center;
  background-color: darkblue;
  width: 800px;
  color: white;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid white;
  padding: 8px;
  text-align: center;
  color: white;
}

.page_container {
  background-color: darkcyan;
  width: 1000px;
  height: 800px;
  padding: 10px;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: grey;
  color: white;
}
</style>
