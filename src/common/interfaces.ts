interface Repo {
	id: string;
	name: string;
	description?: string;
	git_url: string; 
}

export interface User {
	avatar_url?: string;
	login: string;
	name?: string;
	bio?: string;
	repos_url?: string;
	repos: Repo[];
}

export interface Term {
	value: string,
	timeStamp: number,
}