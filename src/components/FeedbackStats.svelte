<script lang="ts">
  export let count = 0
  export let average = 0
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average}</h4>
</div>

<style lang="scss">
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
