let codewarsLabel = document.getElementById("codewars-score-label");

let codewarsRefreshButton = document.getElementById("codewars-refresh");

if(codewarsRefreshButton){
  codewarsRefreshButton.addEventListener("click", async () => {
    codewarsLabel.innerHTML = "Updating...";
  
    // Literally the entire purpose of this is to let the user know it's being updated...
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    let response = await fetch('https://www.codewars.com/api/v1/users/Kleemoff%20Dev');
    let data = await response.json();
  
    codewarsLabel.innerHTML = "My Score: " + data.honor;
  });
}

let githubPicButton = document.getElementById("github-pic-button");

githubPicButton.addEventListener("click", () => window.open("https://github.com/KleemoffDeveloper", "blank"));