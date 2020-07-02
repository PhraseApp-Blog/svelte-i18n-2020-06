<script>
  import { locale } from "../../services/i18n";
  import Character from './Character.svelte';

  let characters = [];
  let isLoading = true;

  locale.subscribe((newLocale) => {
    isLoading = true;

    fetch(`/data/${newLocale}.json`)
      .then(response => response.json())
      .then((json) => {
        characters = json;

        isLoading = false;
      });
  });
</script>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <div class="columns is-mobile is-multiline">
    {#each characters as character}
      <div
        class="column is-one-third-desktop is-half-tablet is-full-mobile"
      >
          <Character {character} />
      </div>
    {/each}
  </div>
{/if}