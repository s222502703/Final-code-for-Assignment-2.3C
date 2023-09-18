<template>
    <div class="page_container">
      <div class="heading"><h1><u><b>Forms</b></u></h1></div>
      <p>
        Forms in Vue.js are a crucial component for creating interactive and user-friendly web applications. 
        Vue provides a range of powerful tools and directives to streamline form development. It's mostly helpful for the backend team to manage a large amount of data.
      </p>
      <br>
      <div class="forms">
        <div class="heading">Deakin Admission Form</div>
        <!-- Input Fields -->
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model.lazy="formData.name" />          <!--v-model.lazy applies here -->
        </div>
        <div>
          <label for="student_id">Student ID:</label>
          <input type="number" id="student_id" v-model.number="formData.student_id" />      <!--v-model.number applies here-->
        </div>
        <!-- Checkbox -->
        <div>
          <br>
          <p> Student type: - </p>
          <pre>
              <label for="International">International</label>   
              <input type="checkbox" id="International" v-model="formData.International" />
              <label for="Domestic">Domestic</label> 
              <input type="checkbox" id="Domestic" v-model="formData.Domestic" />
          </pre>
        </div>
        <!-- Radio Buttons -->
        <div>
          <label>Gender:</label>
          <br>
          <input type="radio" id="male" value="male" v-model="formData.gender" />
          <label for="male">Male</label>
          <input type="radio" id="female" value="female" v-model="formData.gender" />
          <label for="female">Female</label>
        </div>
        <!-- Select Box -->
        <br>
        <div>
          <label for="country">Country:</label>
          <select id="country" v-model="formData.country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="India">India</option>
          </select>
        </div>
        <br>
        <!-- Textarea -->
        <div>
          <label for="comments">Comments:</label>
          <br>
          <textarea id="comments" placeholder="Enter your comments here" v-model.trim="formData.comments"></textarea>   <!--V-model.trim applies here-->
        </div>
      </div>
      <br>
      <!-- Display Form Data -->
      <div id="backend">
        <h2>Form Data at the backend:</h2>
        <pre>{{ formData }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          student_id: '',
          International: false,
          Domestic: false,
          gender: '',
          country: '',
          comments: '',
        },
      };
    },
  };
  </script>
  
  <style>
  .page_container {
    background-color: brown;
    color: lightgray;
  }
  .heading {
    color: lightpink;
  }
  .forms {
    background-color: darkslateblue;
    color: darkcyan;
  }
  #backend {
    background-color: dimgray;
    color: yellow;
  }
  </style>
  