<script lang="ts">
  import { Router, Route } from 'svelte-navigator'
  import Card from './components/Card.svelte'
  import FeedbackForm from './components/FeedbackForm.svelte'
  import FeedbackList from './components/FeedbackList.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'
  import NavBar from './components/NavBar.svelte'
</script>

<Router>
  <main class="container">
    <NavBar />
    <Route path="/">
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </Route>

    <Route path="/about">
      <Card>About Us</Card>
    </Route>
  </main>
</Router>
