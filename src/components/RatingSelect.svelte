<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const ratings = [
    { id: 'num1', value: 1 },
    { id: 'num2', value: 2 },
    { id: 'num3', value: 3 },
    { id: 'num4', value: 4 },
    { id: 'num5', value: 5 },
    { id: 'num6', value: 6 },
    { id: 'num7', value: 7 },
    { id: 'num8', value: 8 },
    { id: 'num9', value: 9 },
    { id: 'num10', value: 10 }
  ]
  let selected = 10

  const dispatch = createEventDispatcher()

  const onChange = (e: any) => {
    selected = e.currentTarget.value || 10
    dispatch('rating-select', selected)
  }
</script>

<ul class="rating">
  {#each ratings as rating}
    <li>
      <input
        type="radio"
        id={rating.id}
        name="rating"
        value={rating.value}
        on:change={onChange}
        checked={selected === rating.value}
      />
      <label for={rating.id}>{rating.value}</label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>
