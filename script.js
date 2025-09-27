function getLastCommit() {
    console.log("Fetching last commit...");
    const url = `https://api.github.com/repos/bokkbokk/bokkbokk.github.io/commits`;

    const request = new XMLHttpRequest();
    request.open('GET', url, false); //  synchronous

    try {
        request.send(null);
        if (request.status !== 200) {
            throw new Error(`GitHub API responded with ${request.status}`);
        }

        const commits = JSON.parse(request.responseText);
        const lastCommit = commits[0];

        console.log("Last Commit Info:");
        console.log("SHA:", lastCommit.sha);
        let sha = lastCommit.sha;
        console.log("Message:", lastCommit.commit.message);
        let message = lastCommit.commit.message;
        console.log("Date:", lastCommit.commit.author.date);
        let date = lastCommit.commit.author.date;
        let out = date + " - " + message + " - " + sha;
        console.log(out);
        return out;

    } catch (error) {
        console.error("Error fetching commit:", error);
    }
}
function setMessage(){
    let message = getLastCommit();
    document.getElementById("last-updated").innerHTML = message;
}