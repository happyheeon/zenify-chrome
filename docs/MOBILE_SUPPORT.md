# Mobile Support (Kiwi Browser)

## Goal

Support Zenify Chrome on Kiwi Browser for Android.

## Planned Features

- Vertical tab workspace UI
- Bookmark viewer
- Tab search
- Workspace management

## Limitations

Kiwi Browser may not support all desktop Chrome extension APIs.

Features depending on Side Panel API may require alternative mobile UI implementations.

## Strategy

- Detect mobile environment
- Fallback to popup-based interface when Side Panel is unavailable
- Share workspace data through chrome.storage
