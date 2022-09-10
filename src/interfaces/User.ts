export interface Iuser {
  id: number;
  avatar_url: string;
  blog: string;
  bio: string | null;
  company: string | null;
  email: string | null;
  followers: number;
  following: number;
  login: string;
  name: string;
  url: string;
  location: string | null;
  website: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
}
