<script>
  import { createEventDispatcher } from "svelte";
  import { locales } from "../../config/l10n";

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
      {#each Object.keys(locales) as locale}
        <option value={locale}>{locales[locale]}</option>
      {/each}
    </select>
  </div>
</div>