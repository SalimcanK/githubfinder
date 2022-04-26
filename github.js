class Github {

    constructor() {

        this.client_id = '3b895e4a2244752a6a0f';
        this.client_secret = '2cf046ec5c2bf64197209120087a3dba130c1f06';
        
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {

            profile,
            repos
        }
    }
}