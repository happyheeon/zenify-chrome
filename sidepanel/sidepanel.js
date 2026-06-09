const searchInput = document.getElementById('search');

async function renderTabs() {
  const tabs = await chrome.tabs.query({ currentWindow: true });

  const filter = (searchInput?.value || '').toLowerCase();
  const container = document.getElementById('tabs');
  container.innerHTML = '';

  tabs
    .filter(tab => (tab.title || '').toLowerCase().includes(filter))
    .forEach(tab => {
      const element = document.createElement('div');
      element.className = 'tab';

      if (tab.active) element.classList.add('active');

      element.textContent = tab.title;

      element.addEventListener('click', async () => {
        await chrome.tabs.update(tab.id, { active: true });
        renderTabs();
      });

      container.appendChild(element);
    });
}

searchInput?.addEventListener('input', renderTabs);

chrome.tabs.onCreated.addListener(renderTabs);
chrome.tabs.onRemoved.addListener(renderTabs);
chrome.tabs.onUpdated.addListener(renderTabs);
chrome.tabs.onActivated.addListener(renderTabs);

renderTabs();