console.log('Before');

getUser(1, getRepos);

console.log('After');

function getRepos (user){
    getReposs(user.gitHubUsername, getCommits)
}

function getCommits(repo){
    getCommitss(repo, displayCommits)
}

function displayCommits(commits){
    console.log(commits)
};


function getCommitss( repo, callback) {
    setTimeout(() => {
        console.log("Reading Commits from database");
        callback(9)
    }, 2000);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'samflavin' })
    }, 2000);
}

function getReposs(username, callback) {
    setTimeout(() => {
        console.log('Reading a repos from a database...');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

