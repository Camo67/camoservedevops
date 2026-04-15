import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getGitHubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated&direction=desc`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Filter out forks and private repos if needed
    return repos.filter((repo: any) => !repo.fork);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export async function getRepoDetails(username: string, repoName: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repo details: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching repository details:', error);
    return null;
  }
}
