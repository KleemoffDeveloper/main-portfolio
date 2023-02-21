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

// Must be in correct order to work properly
let hyperlinks =
["https://play.google.com/store/apps/dev?id=7304933132245725873&hl=en_US&gl=US",
"https://github.com/KleemoffDeveloper",
"https://kleemoff-developer.itch.io",
"https://www.youtube.com/@pourmydrank"];

let hyperButtons = document.getElementsByClassName("pic-button");

for(let i = 0; i < hyperButtons.length; i++){
  hyperButtons[i].addEventListener("click", () => window.open(hyperlinks[i], "blank"));
}