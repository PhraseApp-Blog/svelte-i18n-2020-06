function bulmaUrl(dir = "ltr") {
  const suffix = dir == "rtl" ? "-rtl" : "";

  return (
    "https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/" +
    `bulma${suffix}.min.css`
  );
}

export { bulmaUrl };
