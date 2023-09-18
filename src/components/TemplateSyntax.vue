<template>
 
  <div class="app">
    <h1 v-bind:id="elementId" class="heading-color">{{ heading }}</h1>  <!-- Bind the id attribute of the <h1> element -->
    <p>
      Global warming is a major issue on a global scale. Reducing greenhouse gas emissions, switching to clean energy sources,
      adopting sustainable land-use practices, and increasing public awareness of the necessity of taking action on
      climate change are all ways to lessen its effects.
    </p>
<br>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWSd_Y8R9a6px_twOE38p7u77e2pi0rMcIkOTj5z3pA&s" alt="global" height="600" width="800">
<br>
{{ extra_text }} <!-- This is the javascript with {{  }}-->
</div>

  <div class="container">
    
    <h2>
      Current Temperature: <span class="new_color" ><h3>{{ userInput }}</h3></span> <!-- This is text interplortation-->
    </h2>
  
    <input v-model="userInput" placeholder="Enter the temperature" />
   
    
  </div>

  
  <div class="raw-html-content" v-html="htmlContent" :style="{ fontSize: fontSize }"></div> <!--This is the raw html-->
  <div class="font-size-changer">
      <label for="fontSizeSelector">Change Font Size:</label>
      <select v-model="fontSize" id="fontSizeSelector">
        <option value="16px">Small</option>
        <option value="24px">Medium</option>
        <option value="32px">Large</option>
      </select>
    </div>

</template>

<script>
export default{
  data() {
    return {
      userInput: '',
      htmlContent: '<h2>It can be very Dangerous in the future.</h2>',
      heading: 'Global Warming',
      fontSize: '16px',
      elementId: 'myHeading', // Initialize elementId with a default value
      extra_text:'In summary, global warming is a critical environmental issue that requires urgent action to reduce greenhouse gas emissions,mitigate its impacts, and transition to a more sustainable and resilient future. It is a complex problem with far-reaching consequences that affect ecosystems, economies, and the well-being of people worldwide.'
    };
  }, 
    methods: {
changeHeading() {
  
  this.heading = 'New Heading Text';

},
},
};
</script>

<style>
.app {
  

  margin-left: 80px;
  width:900px;
  background-color: lightblue;
  font-family: Arial, sans-serif;
  margin: 100;
  padding: 20px;
  text-align: center;
  color:darkcyan;
  height: 900px;
  
}

.container {
  margin-top: 20px; /* Adjust the margin to separate the sections */
  width: 900px; /* Adjust the width as needed */
  background-color: springgreen;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: x-large;
  margin: 0 auto; /*Center the container horizontally */
  margin-left: 80px; 
  color:darkblue
 
  
}

.heading-color {
  color: blue; 
}

.new_color {
  color: red;
}

.raw-html-content {
  background-color: orange;
  padding: 20px;
  max-height: auto;
  width: auto;
 
}

.font-size-changer {
  /* margin: auto; */
  width: 1000px;
  margin-left: 80px; 
 

}

#fontSizeSelector {
  margin-left: 10px;
  
}

</style>
