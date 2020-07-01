import { addMessages, init } from "svelte-i18n";
import App from "./App.svelte";

import en from "./lang/en.json";
import ar from "./lang/ar.json";

addMessages("en", en);
addMessages("ar", ar);

init({
  fallbackLocale: "en",
  initialLocale: "ar",
});

const app = new App({
  target: document.body,
});

export default app;
