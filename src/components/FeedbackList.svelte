<script lang="ts">
  import type { IFeedback } from '../interfaces/interfaces'
  import FeedbackItem from './FeedbackItem.svelte'
  export let feedback = [] as IFeedback[]
</script>

{#each feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}
