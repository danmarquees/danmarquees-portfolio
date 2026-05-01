import { useEffect, useState } from 'react';

const FALLBACK = { repos: '21', followers: '96', since: '2022' };
const CACHE_KEY = 'github-stats-cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export function useGitHubStats() {
  const [githubStats, setGithubStats] = useState(FALLBACK);

  useEffect(() => {
    async function fetchGitHub() {
      // Return cached data if still fresh
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            setGithubStats(data);
            return;
          }
        }
      } catch {
        // sessionStorage unavailable — continue with fetch
      }

      try {
        const res = await fetch('https://api.github.com/users/danmarquees');
        if (!res.ok) return;
        const data = await res.json();
        const stats = {
          repos:     String(data.public_repos ?? FALLBACK.repos),
          followers: String(data.followers    ?? FALLBACK.followers),
          since:     data.created_at
            ? String(new Date(data.created_at).getFullYear())
            : FALLBACK.since,
        };
        setGithubStats(stats);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: stats, timestamp: Date.now() }));
        } catch {
          // sessionStorage unavailable — silently ignore
        }
      } catch {
        setGithubStats(FALLBACK);
      }
    }

    fetchGitHub();
  }, []);

  return githubStats;
}
