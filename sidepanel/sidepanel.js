async function renderTabs() {
  const tabs = await chrome.tabs.query({ currentWindow: true });

  const container = document.getElementById('tabs');
  container.innerHTML = '';

  tabs.forEach(tab => {
    const element = document.createElement('div');
    element.className = 'tab';

    if (tab.active) {
      element.classList.add('active');
    }

    element.textContent = tab.title;

    element.addEventListener('click', () => {
      chrome.tabs.update(tab.id, { active: true });
    });

    container.appendChild(element);
  });
}

renderTabs();