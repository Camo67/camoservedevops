'use client';

import { Github, ExternalLink, Star, Eye, GitBranch } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  homepage: string | null;
}

export function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/Camo67/repos?type=owner&sort=updated&direction=desc');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        
        const allRepos = await response.json();
        // Filter out forks and private repos
        const userRepos = allRepos.filter((repo: any) => !repo.fork && !repo.private);
        
        // Take only the top 6 most recently updated repos
        const topRepos = userRepos.slice(0, 6);
        
        setRepos(topRepos);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load GitHub repositories');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="section-shell mt-8">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-700 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-gray-700 rounded-lg p-6">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                <div className="flex gap-4">
                  <div className="h-4 w-16 bg-gray-700 rounded"></div>
                  <div className="h-4 w-16 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-shell mt-8">
        <div className="text-red-500 p-4 bg-red-900/20 rounded border border-red-700">
          {error}
        </div>
      </div>
    );
  }

  return (
    <section className="section-shell mt-12">
      <h2 className="section-heading flex items-center gap-2">
        <Github className="h-4 w-4" />
        My GitHub Repositories
      </h2>
      
      {repos.length === 0 ? (
        <div className="mt-6 text-center py-8 border border-dashed border-gray-700 rounded-lg">
          <p className="text-gray-400">No public repositories found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {repos.map((repo) => (
            <div 
              key={repo.id}
              className="panel-card group grid gap-4 p-5 transition-colors hover:border-primary/30 hover:bg-[rgba(6,24,8,0.9)]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold leading-snug text-foreground flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span className="group-hover:text-primary transition-colors">{repo.name}</span>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {repo.description || "No description provided"}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {repo.topics && repo.topics.slice(0, 3).map((topic) => (
                  <span 
                    key={topic} 
                    className="tag-chip px-2 py-1 text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></div>
                      {repo.language}
                    </span>
                  )}
                  
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-button flex items-center gap-1"
                  >
                    <Github className="h-3 w-3" />
                    Code
                  </Link>
                  
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="micro-button flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 text-center">
        <Link
          href="https://github.com/Camo67"
          target="_blank"
          rel="noopener noreferrer"
          className="micro-button group inline-flex items-center"
        >
          View All Repositories on GitHub
          <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

// Helper function to get color for programming languages
function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E',
    'Python': '#3776AB',
    'Java': '#ED8B00',
    'Go': '#00ADD8',
    'Rust': '#000000',
    'Swift': '#FA7343',
    'Kotlin': '#0095D5',
    'Scala': '#DC322F',
    'PHP': '#787CB5',
    'Ruby': '#CC342D',
    'C': '#A8B9CC',
    'C++': '#00599C',
    'C#': '#239120',
    'Shell': '#89E051',
    'Dockerfile': '#2496ED',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'Sass': '#CC6699',
    'Less': '#1D365D',
    'Stylus': '#333333',
    'Vue': '#4FC08D',
    'React': '#61DAFB',
    'Angular': '#DD0031',
    'Svelte': '#FF3E00',
  };

  return colors[language] || '#858585'; // Default gray if language not found
}