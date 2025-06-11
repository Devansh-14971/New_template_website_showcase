interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
}

export async function fetchGitHubProfile(username: string): Promise<GitHubUser> {
  const response = await fetch(`/api/github/${username}`);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch GitHub profile: ${response.status}`);
  }
  
  return response.json();
}
