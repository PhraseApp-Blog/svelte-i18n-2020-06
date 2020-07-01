<script>
  import { setupI18n, isLocaleLoaded } from "./services/i18n";
  import Header from "./components/Layout/Header.svelte";
  import Footer from "./components/Layout/Footer.svelte";
  import CharacterList from
    "./components/Characters/CharacterList.svelte";

   setupI18n({ withLocale: "ar", fallbackLocale: "en" });
</script>

{#if $isLocaleLoaded}
  <Header />

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