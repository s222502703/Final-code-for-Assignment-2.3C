<template >
  <div class="page-container">
    
    <nav class="nav-stack">
      <pre>
<RouterLink to="/">Template Syntax</RouterLink>

<RouterLink to="/Method">Methods</RouterLink>

<RouterLink to="/ReactivityFundamentals">Reactivity Fundamentals</RouterLink>

<RouterLink to="/ComputedProperties">Computed Properties</RouterLink>

<RouterLink to="/Classandstyle">Class and Style Bindings</RouterLink>

<RouterLink to="/ListRendering">List Rendering</RouterLink>

<RouterLink to="/EventHandling">Event Handling</RouterLink>

<RouterLink to="/Forms">Forms Input Bindings</RouterLink>

<RouterLink to="/Watchers">Watchers</RouterLink>

<RouterLink to="/Components">Components</RouterLink>

<RouterLink to="/Router">Router</RouterLink>






      </pre>
    </nav>

    
    <RouterView />
  </div>
</template>


<style scoped>
/* Styling for the page container */
.page-container {
  display: flex;
  flex-direction: column; /* or column for a vertical layout */
  align-items: center; /* Center items along the cross axis */
}

/* Styling for the navigation menu */
nav.nav-stack {
  font-size:x-large;
  width: auto; /* Set the desired width for the navigation menu */
  padding: 1rem;
  background-color: lightpink; /* Optional: Add a background color to the navigation menu */
}

nav.nav-stack a.router-link-exact-active {
  color: var(--color-text);
}

nav.nav-stack a.router-link-exact-active:hover {
  background-color: lightgreen;
}

/* Styling for the main content */
header {
  line-height: 1.5;
  max-height: 100vh;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  height: 100vh; /* Use the full viewport height */
   /* Allow the header to expand and fill the remaining space */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* Media query for larger screens */
@media (min-width: 1024px) {
  /* Position the navigation menu as fixed on the left side */
  nav.nav-stack {
    position: fixed;
    top: 0;
    bottom: 5;
    left: 0;
    height: 100vh;
  }
}

  /* Adjust the margin to make space for the fixed navigation menu */
  .page-container {
    margin-left: 200px; /* Adjust the margin to match the width of the navigation menu */
   
  }

  /* Center align the content within the header */
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }


</style>
