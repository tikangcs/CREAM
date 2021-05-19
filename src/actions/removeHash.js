function removeLocationHash() {
  var noHashURL = window.location.href.replace(/#$/, "");
  window.history.replaceState("", document.title, noHashURL);
}
window.addEventListener("popstate", function (event) {
  removeLocationHash();
});
window.addEventListener("hashchange", function (event) {
  event.preventDefault();
  removeLocationHash();
});
window.addEventListener("load", function () {
  removeLocationHash();
});

export default removeLocationHash;
