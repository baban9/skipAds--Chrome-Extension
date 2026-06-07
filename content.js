const SKIP_LABELS = ["Skip", "Skip Ad", "Skip Ads", "Skip advertisement"];

function shouldSkip(node) {
  if (!node || !node.innerText) {
    return false;
  }
  const text = node.innerText.trim();
  return SKIP_LABELS.some((label) => text.startsWith(label));
}

function tryClickSkipButtons(root = document) {
  const candidates = root.querySelectorAll("button, .ytp-ad-skip-button, .ytp-ad-skip-button-modern");
  candidates.forEach((node) => {
    if (shouldSkip(node)) {
      node.click();
    }
  });
}

function startObserver() {
  tryClickSkipButtons();
  const observer = new MutationObserver(() => tryClickSkipButtons());
  observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startObserver);
} else {
  startObserver();
}
