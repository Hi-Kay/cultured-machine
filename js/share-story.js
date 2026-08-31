/* Cultured Machine — per-story share button
   Any element with a `data-share-text` attribute becomes a one-click share
   link. Clicking it opens an X (Twitter) share intent pre-filled with that
   text plus a link back to this exact story — the story's own anchor if the
   button lives inside an element with an id (e.g. a news-card), or the
   current page if not (used for whole-digest "Share on X" buttons).

   No setup needed per page beyond including this script and adding:
   <button class="story-share" data-share-text="..." aria-label="Share this story">…</button>
*/
(function () {
  "use strict";

  function shareUrlFor(el) {
    var withId = el.closest("[id]");
    var fragment = withId ? "#" + withId.id : "";
    return window.location.origin + window.location.pathname + fragment;
  }

  function onClick(e) {
    e.preventDefault();
    var el = e.currentTarget;
    var text = el.getAttribute("data-share-text") || document.title;
    var url = shareUrlFor(el);
    var intent = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) +
                 "&url=" + encodeURIComponent(url);
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  function init() {
    var buttons = document.querySelectorAll("[data-share-text]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", onClick);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
