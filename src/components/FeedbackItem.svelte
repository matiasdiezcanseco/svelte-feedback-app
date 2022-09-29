<script lang="ts">
  import { FeedbackStore } from '../stores/stores'
  import Card from './Card.svelte'
  import type { IFeedback } from '../interfaces/interfaces'
  export let item = {} as IFeedback

  const handleDelete = (id: string) => {
    FeedbackStore.update((current) => current.filter((item) => item.id !== id))
  }
</script>

<Card>
  <div class="num-display">{item.rating}</div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
