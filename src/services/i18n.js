import { get, derived } from "svelte/store";
import {
  addMessages,
  locale,
  init,
  dictionary,
  _,
} from "svelte-i18n";

const MESSAGE_FILE_URL_TEMPLATE = "/lang/{locale}.json";

let _activeLocale;

function setupI18n(options) {
  const { withLocale: locale_, fallbackLocale } = options;

  init({
    initialLocale: locale_,
    fallbackLocale: fallbackLocale || locale_,
  });

  if (
    fallbackLocale &&
    fallbackLocale !== locale_ &&
    !hasLoadedLocale(fallbackLocale)
  ) {
    const fallbackFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
      "{locale}",
      fallbackLocale,
    );

    loadJson(fallbackFileUrl).then((messages) => {
      addMessages(fallbackLocale, messages);
    });
  }

  if (!hasLoadedLocale(locale_)) {
    const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
      "{locale}",
      locale_,
    );

    return loadJson(messsagesFileUrl).then((messages) => {
      _activeLocale = locale_;

      addMessages(locale_, messages);

      locale.set(locale_);
    });
  }
}

const isLocaleLoaded = derived(
  dictionary,
  ($dictionary) => !!$dictionary[_activeLocale],
);

function loadJson(url) {
  return fetch(url).then((response) => response.json());
}

function hasLoadedLocale(locale) {
  return get(dictionary)[locale];
}

export { _, setupI18n, isLocaleLoaded };
