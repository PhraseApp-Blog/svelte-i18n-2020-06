import { get, derived, writable } from "svelte/store";
import {
  addMessages,
  locale,
  init,
  dictionary,
  _,
} from "svelte-i18n";

const MESSAGE_FILE_URL_TEMPLATE = "/lang/{locale}.json";

let _activeLocale;

const isLoading = writable(false);

function setupI18n(options) {
  const { withLocale: locale_ } = options;

  init({ initialLocale: locale_ });

  if (!hasLoadedLocale(locale_)) {
    isLoading.set(true);

    const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
      "{locale}",
      locale_,
    );

    return loadJson(messsagesFileUrl).then((messages) => {
      _activeLocale = locale_;

      addMessages(locale_, messages);

      locale.set(locale_);

      isLoading.set(false);
    });
  }
}

const isLocaleLoaded = derived(
  [dictionary, isLoading],
  ([$dictionary, $isLoading]) =>
    !$isLoading && !!$dictionary[_activeLocale],
);

function loadJson(url) {
  return fetch(url).then((response) => response.json());
}

function hasLoadedLocale(locale) {
  return get(dictionary)[locale];
}

export { _, setupI18n, isLocaleLoaded, locale };
