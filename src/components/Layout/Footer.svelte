<script>
  import { _ } from "../../services/i18n";
</script>

<style>
    .footer {
        margin-top: 2rem;
        background-color: #4a4a4a;
        color: #f7f7f7;
    }

    .footer :global(a),
    .footer :global(a:active),
    .footer :global(a:hover),
    .footer :global(a:visited) {
      color: #65b6e3;
    }
</style>

<footer class="footer">
    <div class="content has-text-centered">
        <p>
          {@html $_("footer", { values: {
              phraseUrl: "https://phrase.com/blog",
              svelteUrl: "https://svelte.dev/",
              bulmaUrl: "https://bulma.io/s" }})}
        </p>
    </div>
</footer>