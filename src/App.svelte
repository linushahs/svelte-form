<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import LoginForm from "./components/LoginForm.svelte";
  import SignupForm from "./components/SignupForm.svelte";
</script>

<Router>
  <h1>Hello world</h1>
  <main class="align">
    <Route path="/"><LoginForm /></Route>
    <Route path="/signup"><SignupForm /></Route>
  </main>
</Router>
