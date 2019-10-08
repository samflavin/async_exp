console.log('Before');

getUser(1, function(user){
    console.log('User', user)
    getRepos(user.gitHubUsername, function(repos){
        console.log('Repos', repos)
        getCommits(repos[0], function(commits){
            console.log(commits)
        })
    })
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'samflavin' })
    }, 2000); 
    }

function getRepos (username, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Reading commits from a database...');
        callback(9)
    }, 2000);
}
    
