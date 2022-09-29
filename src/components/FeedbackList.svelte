<script lang="ts">
  import { onDestroy } from 'svelte'
  import { FeedbackStore } from '../stores/stores'
  import { fade, scale } from 'svelte/transition'
  import type { IFeedback } from '../interfaces/interfaces'
  import FeedbackItem from './FeedbackItem.svelte'
  let feedback = [] as IFeedback[]

  const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data))

  onDestroy(() => unsubscribe())
</script>

{#each feedback as fb (fb.id)}
  <div in:scale out:fade>
    <FeedbackItem item={fb} />
  </div>
{/each}
