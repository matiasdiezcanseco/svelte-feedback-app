<script lang="ts">
  import FeedbackForm from './components/FeedbackForm.svelte'
  import FeedbackList from './components/FeedbackList.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'

  let feedback = [
    {
      id: 1,
      rating: 5,
      text: 'Exercitation exercitation aute consectetur occaecat reprehenderit culpa eiusmod excepteur excepteur do eiusmod adipisicing.'
    },
    {
      id: 2,
      rating: 7,
      text: 'Exercitation exercitation aute consectetur occaecat reprehenderit culpa eiusmod excepteur excepteur do eiusmod adipisicing.'
    },
    {
      id: 3,
      rating: 1,
      text: 'Exercitation exercitation aute consectetur occaecat reprehenderit culpa eiusmod excepteur excepteur do eiusmod adipisicing.'
    },
    {
      id: 4,
      rating: 9,
      text: 'Exercitation exercitation aute consectetur occaecat reprehenderit culpa eiusmod excepteur excepteur do eiusmod adipisicing.'
    }
  ]

  $: count = feedback.length
  $: average = feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length

  const handleDeleteFeedback = (e: CustomEvent<number>) =>
    (feedback = feedback.filter((fb) => fb.id !== e.detail))

  const handleCreateFeedback = (e: CustomEvent) => {
    console.log(e.detail)
    feedback = [e.detail, ...feedback]
  }
</script>

<main class="container">
  <FeedbackForm on:create-feedback={handleCreateFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={handleDeleteFeedback} />
</main>
