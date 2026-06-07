# Skip Ads Chrome Extension

Manifest V3 Chrome extension that automatically clicks YouTube skip-ad buttons when they appear in the DOM.

## Problem

Manual ad skipping breaks viewing flow. A lightweight observer can click skip buttons as soon as they render.

## Approach

- **Content script** watches DOM mutations on `youtube.com`
- Matches skip button labels (`Skip`, `Skip Ad`, `Skip Ads`)
- Clicks matching buttons without user interaction
- **Service worker** reserved for future background events

## Repository structure

```
manifest.json     Extension manifest (MV3)
content.js        DOM observer and click logic
background.js     Service worker stub
```

## Install locally

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select this folder

## Permissions

| Permission | Reason |
|------------|--------|
| `activeTab` | Interact with current YouTube tab |
| `scripting` | Inject content script |
| `https://www.youtube.com/*` | Host access scoped to YouTube |

## Tech stack

JavaScript, Chrome Extension Manifest V3

## Limitations and next steps

- YouTube UI changes may break selectors; add DOM snapshot regression tests
- Remove unused Firebase files from repo or wire them intentionally
- Publish privacy policy if distributing on Chrome Web Store
