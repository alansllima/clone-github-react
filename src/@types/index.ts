export interface APIUser{
    login: string;
    name: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}
export interface APIRepo{
    name: string;
    owner:{
        login: string;
    }
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
}