# Zenify Chrome

> Make Chrome feel more like Zen Browser.

Zenify Chrome은 Chrome의 강력한 동기화, 확장 프로그램 지원, 최신 웹 기능은 유지하면서 Zen Browser의 워크스페이스 중심 UI와 생산성 기능을 제공하는 확장 프로그램입니다.

---

## 🎯 목표

Zen Browser의 장점을 Chrome에서도 사용할 수 있도록 합니다.

### 유지할 것

- Chrome 동기화
- Chrome 확장 프로그램 생태계
- Chrome 최신 기능
- Chrome 호환성

### 추가할 것

- Vertical Tabs
- Workspaces
- Tab Stash
- Liquid Glass UI
- 빠른 탐색
- 북마크 통합

---

## ✨ 주요 기능

### Vertical Tabs

탭을 세로로 표시합니다.

- 현재 창 탭 표시
- 탭 전환
- 탭 닫기
- 탭 검색

---

### Workspaces

작업별 탭을 정리합니다.

예시:

개발
- GitHub
- ChatGPT
- Docs

학교
- Google Classroom
- Wikipedia

게임
- Steam
- YouTube

---

### Tab Stash

사용하지 않는 탭을 보관합니다.

- 메모리 절약
- 나중에 복원 가능
- Workspace별 보관 가능

---

### Bookmarks Integration

Chrome 북마크를 사이드바에서 표시합니다.

- 폴더 탐색
- 북마크 검색
- 빠른 열기

---

### Search

사이드바에서 바로 검색합니다.

기능:

- 탭 검색
- 북마크 검색
- URL 입력
- 웹 검색

---

### Quick Access

Chrome 내부 페이지 빠른 이동

- Settings
- History
- Downloads
- Bookmarks

---

### Liquid Glass UI

Zen 스타일의 현대적인 UI

특징:

- Blur
- Transparency
- Rounded Corners
- Smooth Animations

---

## 🏗️ 프로젝트 구조

```text
zenify-chrome/
│
├─ manifest.json
│
├─ background/
│  └─ service_worker.js
│
├─ sidepanel/
│  ├─ sidepanel.html
│  ├─ sidepanel.css
│  └─ sidepanel.js
│
├─ core/
│  ├─ tabs/
│  ├─ workspace/
│  ├─ stash/
│  └─ sync/
│
├─ adapters/
│  ├─ tabsAdapter.js
│  ├─ bookmarksAdapter.js
│  └─ storageAdapter.js
│
├─ ui/
│  ├─ components/
│  └─ themes/
│
└─ assets/
```

---

## 🚀 Roadmap

### v0.1

- Side Panel
- Tab List
- Tab Switching
- Active Tab Highlight

### v0.2

- Workspaces
- Bookmark Viewer
- Search
- Favicons

### v0.3

- Tab Stash
- Restore Tabs
- Workspace Persistence

### v0.4

- Liquid Glass UI
- Animations
- Custom Themes

### v0.5

- Workspace Shortcuts
- Bookmark Search
- Quick Actions

### v1.0

- Complete Zen-like Chrome Experience

---

## ❌ 제한 사항

Chrome 확장 프로그램의 한계로 인해 다음 기능은 지원할 수 없습니다.

- 실제 주소창 이동
- 실제 탭바 제거
- 실제 확장 프로그램 버튼 이동
- Chrome UI 직접 수정

대신 Zen Browser와 유사한 사용자 경험을 제공하는 자체 UI를 구현합니다.

---

## 📜 라이선스

MIT License

---

Made with ❤️ by HappyHeeon
