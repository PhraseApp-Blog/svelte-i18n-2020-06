<script>
  import Header from './components/Layout/Header.svelte';
  import Footer from './components/Layout/Footer.svelte';
  import CharacterList from
    './components/Characters/CharacterList.svelte';
</script>

<Header />

<main role="main">
  <CharacterList />
</main>

<Footer />

<style>
  main { padding: 0 1rem; }
</style>