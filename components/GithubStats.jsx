'use client';

import { useEffect, useState } from 'react';

export default function GithubStats({ metrics }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadProfile() {
      try {
        const response = await fetch('https://api.github.com/users/edward1503', {
          headers: { Accept: 'application/vnd.github+json' }
        });
        if (!response.ok) return;
        const profile = await response.json();
        if (mounted) setRepos(profile.public_repos);
      } catch {
        // Static values stay visible if GitHub is unavailable.
      }
    }

    loadProfile();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <dl className="metric-grid" aria-label="GitHub and profile metrics">
      {metrics.map((metric) => (
        <div key={metric.label} className="metric-cell">
          <dt>{metric.stat === 'repos' && repos ? repos.toLocaleString('en-US') : metric.value}</dt>
          <dd>{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}
