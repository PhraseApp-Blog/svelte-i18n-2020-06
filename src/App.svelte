<script>
  import {
    setupI18n,
    isLocaleLoaded,
    locale,
    dir,
    _,
  } from "./services/i18n";
  import { bulmaUrl } from "./services/css";
  import Header from "./components/Layout/Header.svelte";
  import LocaleSelector from
    "./components/UI/LocaleSelector.svelte";
  import Footer from "./components/Layout/Footer.svelte";
  import CharacterList from
    "./components/Characters/CharacterList.svelte";

  setupI18n();

  $: if (document.dir !== $dir) {
    document.dir = $dir;

    document.getElementById("bulmaCssLink").href =
      bulmaUrl($dir);
  }

  $: if ($isLocaleLoaded) {
    document.title = $_("app_title");
  }
</script>

{#if $isLocaleLoaded}
  <Header />

  <LocaleSelector
    value={$locale}
    on:locale-changed={e =>
      setupI18n({ withLocale: e.detail }) }
  />

  <main role="main">
        <CharacterList />
  </main>

  <Footer />
{:else}
  <p>Loading...</p>
{/if}

<style>
  main { padding: 0 1rem; }
</style>