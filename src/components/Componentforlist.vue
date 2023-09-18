
<template>
    <div id="extra">
     
      {{ unit.name }} ({{ unit.grade }})
    </div>
  </template>
  
  <script>
  export default {
    props: {
      unit: Object, 
    },
  };
  </script>
  
  <style scoped>
#extra{
    color:purple;
}
  </style>
  