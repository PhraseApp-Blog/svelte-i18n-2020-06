<script>
  import { createEventDispatcher } from "svelte";

  export let value;

  const dispatch = createEventDispatcher();

  function handleLocaleChange(event) {
      event.preventDefault();

      dispatch("locale-changed", event.target.value);
  }
</script>

<style>
  .locale-selector {
      display: flex;
      justify-content: center;
  }

  .select { margin: 0 1rem 1rem; }
</style>

<div class="locale-selector">
  <div class="select">
    <select value={value} on:change={handleLocaleChange}>
      <option value="en">English</option>
      <option value="ar">عربي</option>
    </select>
  </div>
</div>