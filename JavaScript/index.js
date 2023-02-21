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
  if(hyperButtons[i])
    hyperButtons[i].addEventListener("click", () => window.open(hyperlinks[i], "blank"));
}

// At this point I realize I shouldn't be using 1 JavaScript file for the whole website but... it's too late now LOL

let linkedinPic = document.getElementById("linkedin-pic");

if(linkedinPic)
  linkedinPic.addEventListener("click", () => window.open("https://www.linkedin.com/in/silis-kleemoff/", "blank"));