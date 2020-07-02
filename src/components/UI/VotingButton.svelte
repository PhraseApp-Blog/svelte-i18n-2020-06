<script>
  import { number } from "../../services/i18n";

  export let count = 0;
  export let type = "up";
</script>

<style>
  .button { min-width: 5rem; }

  .button-count { font-size: 0.9rem; }
</style>

<button class="button button" on:click>
  <span class="icon">
    <span class="far fa-thumbs-{type}" />
  </span>

  <span class="button-count">{$number(count)}</span>
</button>