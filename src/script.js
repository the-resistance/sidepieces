// Sample project data
const projects = [
  {
    title: 'DevLogger',
    description: 'A lightweight CLI tool to log daily developer notes and export them as markdown.',
    tags: ['CLI', 'Node.js', 'Open Source'],
  },
  {
    title: 'PaletteGen',
    description: 'Generate accessible color palettes from a single seed color with one click.',
    tags: ['Design', 'JavaScript', 'CSS'],
  },
  {
    title: 'LinkVault',
    description: 'Bookmark manager that auto-tags links using AI and keeps them organized.',
    tags: ['AI', 'React', 'Chrome Extension'],
  },
  {
    title: 'StandupBot',
    description: 'Automate daily standup summaries for your team directly in Slack.',
    tags: ['Slack', 'Automation', 'Python'],
  },
  {
    title: 'SoundSnap',
    description: 'Browser-based audio visualizer that turns music into beautiful animations.',
    tags: ['Web Audio', 'Canvas', 'JavaScript'],
  },
  {
    title: 'FormForge',
    description: 'Drag-and-drop form builder with schema export and validation built in.',
    tags: ['Vue.js', 'TypeScript', 'SaaS'],
  },
];

// Render project cards
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  projects.forEach(({ title, description, tags }) => {
    const article = document.createElement('article');
    article.className = 'project-card';

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'project-tags';
    tags.forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagsDiv.appendChild(span);
    });

    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(tagsDiv);
    grid.appendChild(article);
  });
}

// Handle contact form submission
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thanks! Your message has been received.';
    form.reset();
    setTimeout(() => {
      status.textContent = '';
    }, 5000);
  });
}

// Set footer year
function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initContactForm();
  setYear();
});
