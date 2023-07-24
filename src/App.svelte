<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import LoginForm from "./components/LoginForm.svelte";
  import SignupForm from "./components/SignupForm.svelte";
</script>

<Router>
  <main class="align">
    <Route path="/"><LoginForm /></Route>
    <Route path="/signup"><SignupForm /></Route>
  </main>
</Router>
