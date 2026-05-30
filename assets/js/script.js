const header = document.querySelector('[data-header]');

const updateHeader = () => {
  header?.toggleAttribute('data-scrolled', window.scrollY > 12);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

async function hydrateGitHubStats() {
  const statNodes = document.querySelectorAll('[data-github-stat]');
  if (!statNodes.length) return;

  try {
    const response = await fetch('https://api.github.com/users/edward1503', {
      headers: { Accept: 'application/vnd.github+json' }
    });

    if (!response.ok) return;

    const profile = await response.json();
    const values = {
      repos: profile.public_repos,
      followers: profile.followers
    };

    statNodes.forEach((node) => {
      const key = node.dataset.githubStat;
      if (typeof values[key] === 'number') {
        node.textContent = values[key].toLocaleString('en-US');
      }
    });
  } catch {
    // Static fallbacks are already rendered in the markup.
  }
}

hydrateGitHubStats();
