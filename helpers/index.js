export function changeUrl(currentUrl) {
  window.history.pushState(null, null, currentUrl);
}

export function addSlugToUrl(id, slug) {
  const urlSlug = slug.toLowerCase().replace(/ /g, '-');
  return id + '-' + urlSlug;
}
