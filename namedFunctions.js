console.log('Before');

getUser(1, getRepos);

console.log('After');

function getRepos(user) {
    getRepos(user.gitHubUsername, getCommits);
}

function getCommits(repos){
    console.log('reading Commits')
    getCommits(repo, displayCommits)
};

function displayCommits(commits){
    console.log(commits)
} 

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'samflavin' })
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log('Reading a repos from a database...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}



