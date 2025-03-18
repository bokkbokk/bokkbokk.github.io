async function getLastCommit() {
    const url = `https://api.github.com/repos/bokkbokk/bokkbokk.github.io/commits`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`GitHub API responded with ${response.status}`);
        }
        
        const commits = await response.json();
        const lastCommit = commits[0]; // The most recent commit

        console.log("Last Commit Info:");
    
        console.log("SHA:", lastCommit.sha);
        let sha = lastCommit.sha;
        console.log("Message:", lastCommit.commit.message);
        let message = lastCommit.commit.message;
        console.log("Author:", lastCommit.commit.author.name);
        let author = lastCommit.commit.author.name;
        console.log("Date:", lastCommit.commit.author.date);
        let date = lastCommit.commit.author.date;
        console.log("URL:", lastCommit.html_url);
        let commitUrl = lastCommit.html_url;
        let out = date + " - " + message + " - " + sha;
        console.log (out);
        return out;

    } catch (error) {
        console.error("Error fetching commit:", error);
    }
}
function setMessage(){
    let message = getLastCommit();
    document.getElementById("last-updated").innerHTML = message;
}