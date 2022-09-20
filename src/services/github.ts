import { Term } from "../common/interfaces";

export async function requestGithubUserDetails ({ username }: { username: string }) {
  if (!username || username === '') {
    return { error: 'Field is missing' }
  }

  const URL = "http://api.github.com/users/"
  try {
    const response = await fetch(URL + username);
    const json = await response.json();

    if (json.repos_url) {
      const repoResponse = await fetch(json.repos_url);
      json.repos = await repoResponse.json();
    }

    const termsInString = localStorage.getItem("terms");
    if (!termsInString) {
      localStorage.setItem(
        "terms",
        JSON.stringify([{ username, timeStamp: Date.now() } as Term])
      );
    } else {
      const terms = JSON.parse(termsInString) as Term[];
      terms.push({ username, timeStamp: Date.now() });
      localStorage.setItem("terms", JSON.stringify(terms));
    }

    return json
  } catch (e) {
    throw e
  }
}